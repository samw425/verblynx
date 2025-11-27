"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Send, Mail, MessageSquare } from "lucide-react"
import { toast } from "sonner"

export default function ContactPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const res = await fetch('/api/notify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'contact',
                    ...formData
                })
            })

            if (!res.ok) throw new Error("Failed to send message")

            toast.success("Message sent! We'll be in touch shortly.")
            setFormData({ name: "", email: "", message: "" })
        } catch (error) {
            toast.error("Failed to send message. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                            CONTACT <span className="text-red-600">HQ.</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Questions? Feedback? Feature requests? We're listening.
                        </p>
                    </div>

                    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-white">
                                <MessageSquare className="h-5 w-5 text-red-500" />
                                Send us a message
                            </CardTitle>
                            <CardDescription className="text-gray-400">
                                Direct line to the engineering team.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-gray-300">Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="Your name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="bg-black/50 border-white/10 text-white focus:border-red-500/50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-300">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="bg-black/50 border-white/10 text-white focus:border-red-500/50"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us what's on your mind..."
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="bg-black/50 border-white/10 text-white focus:border-red-500/50 min-h-[150px]"
                                    />
                                </div>

                                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="mt-12 text-center space-y-4">
                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/5 border border-white/10 mb-4">
                            <Mail className="h-6 w-6 text-gray-400" />
                        </div>
                        <p className="text-gray-400">
                            Prefer email? Reach us directly at <br />
                            <a href="mailto:saziz4250@gmail.com" className="text-white hover:text-red-400 font-bold transition-colors">
                                saziz4250@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
