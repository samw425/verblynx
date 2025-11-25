"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Sparkles, Target, Users, Zap, Loader2 } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

export default function CreateProjectPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        name: "",
        audience: "",
        goal: "",
        tone: "Authoritative",
    })

    const handleNext = () => {
        if (step < 3) setStep(step + 1)
    }

    const handleBack = () => {
        if (step > 1) setStep(step - 1)
    }

    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            // Step 1: Get strategic inference
            const inferenceRes = await fetch('/api/infer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: `${formData.goal} for ${formData.audience}`
                })
            })
            const inference = await inferenceRes.json()

            // Step 2: Generate actual copy
            const generateRes = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: formData.goal,
                    context: inference,
                    type: inference.type || 'marketing copy',
                    audience: formData.audience,
                    goal: formData.goal,
                    tone: {
                        formal: formData.tone === 'Authoritative' ? 8 : formData.tone === 'Empathetic' ? 4 : 6,
                        direct: formData.tone === 'Urgent' ? 9 : formData.tone === 'Witty' ? 5 : 7,
                        emotional: formData.tone === 'Empathetic' ? 8 : formData.tone === 'Witty' ? 6 : 5
                    }
                })
            })
            const result = await generateRes.json()

            // Store result in localStorage for the editor page
            localStorage.setItem('verblynx_latest_copy', JSON.stringify({
                ...result,
                projectName: formData.name,
                createdAt: new Date().toISOString()
            }))

            toast.success("Copy Generated Successfully!")
            // Redirect to dashboard which will show the result
            router.push(`/dashboard`)
        } catch (error) {
            console.error('Generation error:', error)
            toast.error("Failed to generate copy. Please try again.")
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-black text-foreground flex flex-col relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black pointer-events-none" />

            {/* Header */}
            <header className="p-6 flex items-center justify-between relative z-10">
                <Link href="/dashboard" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                    <ArrowLeft className="h-4 w-4" /> Cancel
                </Link>
                <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${step >= 1 ? "bg-red-500" : "bg-gray-800"}`} />
                    <div className={`h-2 w-2 rounded-full ${step >= 2 ? "bg-red-500" : "bg-gray-800"}`} />
                    <div className={`h-2 w-2 rounded-full ${step >= 3 ? "bg-red-500" : "bg-gray-800"}`} />
                </div>
            </header>

            <main className="flex-1 flex items-center justify-center p-6 relative z-10">
                <Card className="w-full max-w-2xl bg-black/50 border-red-900/20 backdrop-blur-xl shadow-[0_0_50px_-10px_rgba(220,38,38,0.1)]">
                    <CardHeader className="text-center">
                        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-red-900/20 flex items-center justify-center border border-red-500/20">
                            {step === 1 && <Target className="h-6 w-6 text-red-500" />}
                            {step === 2 && <Users className="h-6 w-6 text-red-500" />}
                            {step === 3 && <Zap className="h-6 w-6 text-red-500" />}
                        </div>
                        <CardTitle className="text-2xl font-black text-white">
                            {step === 1 && "Define the Objective"}
                            {step === 2 && "Identify the Target"}
                            {step === 3 && "Calibrate the Engine"}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                            {step === 1 && "What are we selling or achieving today?"}
                            {step === 2 && "Who are we persuading?"}
                            {step === 3 && "How should the voice sound?"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {step === 1 && (
                            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-gray-300">Project Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="e.g. Q4 Email Sequence"
                                        className="bg-gray-900/50 border-white/10 text-white focus:border-red-500/50"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        autoFocus
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="goal" className="text-gray-300">Primary Goal</Label>
                                    <Textarea
                                        id="goal"
                                        placeholder="e.g. Get 50 signups for the webinar..."
                                        className="bg-gray-900/50 border-white/10 text-white focus:border-red-500/50 min-h-[100px]"
                                        value={formData.goal}
                                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                    />
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="space-y-2">
                                    <Label htmlFor="audience" className="text-gray-300">Target Audience</Label>
                                    <Textarea
                                        id="audience"
                                        placeholder="e.g. SaaS Founders with $1M+ ARR who are struggling with churn..."
                                        className="bg-gray-900/50 border-white/10 text-white focus:border-red-500/50 min-h-[150px]"
                                        value={formData.audience}
                                        onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                                        autoFocus
                                    />
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="grid grid-cols-2 gap-4">
                                    {["Authoritative", "Empathetic", "Urgent", "Witty"].map((tone) => (
                                        <div
                                            key={tone}
                                            onClick={() => setFormData({ ...formData, tone })}
                                            className={`cursor-pointer p-4 rounded-xl border transition-all ${formData.tone === tone
                                                ? "bg-red-900/20 border-red-500 text-white"
                                                : "bg-gray-900/30 border-white/10 text-gray-400 hover:border-white/30"
                                                }`}
                                        >
                                            <div className="font-bold">{tone}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        {step > 1 ? (
                            <Button variant="ghost" onClick={handleBack} className="text-gray-400 hover:text-white">
                                Back
                            </Button>
                        ) : (
                            <div />
                        )}

                        {step < 3 ? (
                            <Button onClick={handleNext} className="bg-white text-black hover:bg-gray-200">
                                Next Step
                            </Button>
                        ) : (
                            <Button onClick={handleSubmit} disabled={isLoading} className="bg-red-600 hover:bg-red-700 text-white shadow-[0_0_20px_-5px_rgba(220,38,38,0.4)]">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Initializing...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="mr-2 h-4 w-4" />
                                        Initialize Engine
                                    </>
                                )}
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}
