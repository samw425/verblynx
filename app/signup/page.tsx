"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Loader2, Lock } from "lucide-react"
import { toast } from "sonner"

export default function SignupPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const supabase = createClient()

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName,
                        beta_access: true,
                    },
                },
            })

            if (error) {
                toast.error(error.message)
                return
            }

            // Send notification email to owner
            try {
                const notifyRes = await fetch('/api/notify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        type: 'signup',
                        email,
                        name: fullName
                    })
                })
                const notifyData = await notifyRes.json()
                if (!notifyData.success) {
                    console.error('Email Notification Failed:', notifyData)
                    toast.error(`Admin Alert Failed: ${notifyData.error || 'Unknown Error'}`)
                } else {
                    console.log('Email Notification Sent:', notifyData)
                }
            } catch (notifyError) {
                console.error('Failed to send notification:', notifyError)
                toast.error("Network Error sending admin alert")
            }

            toast.success("Welcome to Beta! Check your email to verify.")
            router.push("/dashboard")
        } catch (error) {
            toast.error("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-black text-foreground relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

            <Card className="w-full max-w-md bg-black/50 border-red-900/20 backdrop-blur-xl shadow-[0_0_50px_-10px_rgba(220,38,38,0.2)] relative z-10">
                <CardHeader className="space-y-1 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-950/30 px-4 py-1.5 text-sm font-medium text-red-400">
                            <Lock className="h-3.5 w-3.5" />
                            <span>EXCLUSIVE BETA ACCESS</span>
                        </div>
                    </div>
                    <CardTitle className="text-3xl font-black tracking-tight text-white">Claim Your Beta Spot</CardTitle>
                    <CardDescription className="text-gray-400">
                        Limited slots available. Get full access while it's free.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignup} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                            <Input
                                id="name"
                                placeholder="John Doe"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-600 focus:border-red-500/50 focus:ring-red-500/20"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-300">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-600 focus:border-red-500/50 focus:ring-red-500/20"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-gray-300">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-gray-900/50 border-white/10 text-white focus:border-red-500/50 focus:ring-red-500/20"
                            />
                        </div>

                        <div className="p-3 rounded-lg bg-red-900/10 border border-red-500/20">
                            <p className="text-xs text-red-400 leading-relaxed">
                                <strong>Beta Access:</strong> Free during development. Pricing TBD after launch.
                            </p>
                        </div>

                        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-medium shadow-[0_0_20px_-5px_rgba(220,38,38,0.4)] transition-all" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Claiming spot...
                                </>
                            ) : (
                                "Claim Beta Access"
                            )}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link href="/login" className="text-red-400 font-medium hover:text-red-300 hover:underline">
                            Sign in
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
