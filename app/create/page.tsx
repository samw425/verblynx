"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Sparkles, Target, Users, Zap, Terminal, Cpu, Lock } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

export default function CreateProjectPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [step, setStep] = useState(1)
    const [logs, setLogs] = useState<string[]>([])
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

    const addLog = (message: string) => {
        setLogs(prev => [...prev, message])
    }

    const handleSubmit = async () => {
        setIsLoading(true)
        setLogs([])

        try {
            // Simulate Engine Startup
            addLog("> Initializing Verblynx Core...")
            await new Promise(r => setTimeout(r, 800))

            addLog("> Connecting to Strategic Inference Node...")
            await new Promise(r => setTimeout(r, 800))

            // Step 1: Get strategic inference
            addLog(`> Analyzing Objective: "${formData.goal.substring(0, 20)}..."`)
            const inferenceRes = await fetch('/api/infer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: `${formData.goal} for ${formData.audience}`
                })
            })
            const inference = await inferenceRes.json()

            addLog(`> DETECTED FRAMEWORK: ${inference.framework || 'PAS'}`)
            await new Promise(r => setTimeout(r, 600))
            addLog(`> IDENTIFIED DESIRE: ${inference.core_desire || 'Unknown'}`)
            await new Promise(r => setTimeout(r, 600))
            addLog(`> IDENTIFIED OBJECTION: ${inference.main_objection || 'Unknown'}`)
            await new Promise(r => setTimeout(r, 800))

            // Step 2: Generate actual copy
            addLog("> Engaging Generative Engine...")
            await new Promise(r => setTimeout(r, 800))
            addLog("> DRAFTING INITIAL VERSION...")
            await new Promise(r => setTimeout(r, 600))
            addLog("> CRITIQUING AGAINST ELITE STANDARDS...")
            await new Promise(r => setTimeout(r, 600))
            addLog("> REFINING FOR MAXIMUM IMPACT...")

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

            addLog("> Copy Generated.")
            await new Promise(r => setTimeout(r, 500))
            addLog("> Compiling Masterclass Breakdown...")
            await new Promise(r => setTimeout(r, 800))
            addLog("> FINALIZING OUTPUT...")
            await new Promise(r => setTimeout(r, 500))

            // Store result in localStorage for the editor page
            localStorage.setItem('verblynx_latest_copy', JSON.stringify({
                ...result,
                projectName: formData.name,
                createdAt: new Date().toISOString()
            }))

            toast.success("Engine Execution Complete.")
            // Redirect to dashboard which will show the result
            router.push(`/dashboard`)
        } catch (error) {
            console.error('Generation error:', error)
            toast.error("Engine Failure. Please retry.")
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-black text-foreground flex flex-col relative overflow-hidden font-mono">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            {/* Header */}
            <header className="p-6 flex items-center justify-between relative z-10 border-b border-white/5 bg-black/50 backdrop-blur-sm">
                <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors text-xs uppercase tracking-widest">
                    <ArrowLeft className="h-3 w-3" /> Abort Mission
                </Link>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/20 border border-red-500/20">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-red-500 tracking-widest">ENGINE ONLINE</span>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex items-center justify-center p-6 relative z-10">
                {isLoading ? (
                    <Card className="w-full max-w-2xl bg-black border border-red-500/30 shadow-[0_0_100px_-20px_rgba(220,38,38,0.2)] font-mono">
                        <CardHeader className="border-b border-white/5 pb-4">
                            <div className="flex items-center gap-3">
                                <Terminal className="h-5 w-5 text-red-500" />
                                <CardTitle className="text-lg text-white tracking-widest">VERBLYNX_CORE_PROCESS</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8 min-h-[400px] bg-black/80 flex flex-col justify-end">
                            <div className="space-y-2">
                                {logs.map((log, i) => (
                                    <div key={i} className="text-green-500 text-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
                                        {log}
                                    </div>
                                ))}
                                <div className="h-4 w-2 bg-green-500 animate-pulse" />
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <Card className="w-full max-w-2xl bg-black/80 border border-white/10 backdrop-blur-xl shadow-2xl">
                        <CardHeader className="text-center pb-8 border-b border-white/5">
                            <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-red-900/40 to-black flex items-center justify-center border border-red-500/30 shadow-[0_0_30px_-10px_rgba(220,38,38,0.5)]">
                                {step === 1 && <Target className="h-8 w-8 text-red-500" />}
                                {step === 2 && <Users className="h-8 w-8 text-red-500" />}
                                {step === 3 && <Cpu className="h-8 w-8 text-red-500" />}
                            </div>
                            <CardTitle className="text-3xl font-black text-white tracking-tight uppercase">
                                {step === 1 && "Target Acquisition"}
                                {step === 2 && "Audience Profiling"}
                                {step === 3 && "Engine Calibration"}
                            </CardTitle>
                            <CardDescription className="text-gray-400 text-base mt-2">
                                {step === 1 && "Define the mission parameters."}
                                {step === 2 && "Who are we targeting?"}
                                {step === 3 && "Set the persuasion frequency."}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-8 pt-8 px-8">
                            {step === 1 && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                                    <div className="space-y-3">
                                        <Label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500">Operation Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="e.g. Q4_REVENUE_SPRINT"
                                            className="bg-white/5 border-white/10 text-white focus:border-red-500/50 h-12 text-lg font-medium"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            autoFocus
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <Label htmlFor="goal" className="text-xs uppercase tracking-widest text-gray-500">Primary Objective</Label>
                                        <Textarea
                                            id="goal"
                                            placeholder="e.g. Convert 500 cold leads into booked demos for our SaaS platform..."
                                            className="bg-white/5 border-white/10 text-white focus:border-red-500/50 min-h-[120px] text-lg resize-none p-4"
                                            value={formData.goal}
                                            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                        />
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                                    <div className="space-y-3">
                                        <Label htmlFor="audience" className="text-xs uppercase tracking-widest text-gray-500">Target Profile</Label>
                                        <Textarea
                                            id="audience"
                                            placeholder="e.g. Exhausted Agency Owners doing $50k/mo who are stuck in fulfillment hell..."
                                            className="bg-white/5 border-white/10 text-white focus:border-red-500/50 min-h-[200px] text-lg resize-none p-4"
                                            value={formData.audience}
                                            onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                                            autoFocus
                                        />
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                                    <Label className="text-xs uppercase tracking-widest text-gray-500">Voice Modulation</Label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {["Authoritative", "Empathetic", "Urgent", "Witty"].map((tone) => (
                                            <div
                                                key={tone}
                                                onClick={() => setFormData({ ...formData, tone })}
                                                className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 ${formData.tone === tone
                                                    ? "bg-red-900/20 border-red-500 text-white shadow-[0_0_20px_-5px_rgba(220,38,38,0.3)]"
                                                    : "bg-white/5 border-white/5 text-gray-400 hover:border-white/20 hover:bg-white/10"
                                                    }`}
                                            >
                                                <div className="font-bold text-lg mb-1">{tone}</div>
                                                <div className="text-xs text-gray-500 uppercase tracking-wider">
                                                    {tone === "Authoritative" && "Command & Control"}
                                                    {tone === "Empathetic" && "Deep Resonance"}
                                                    {tone === "Urgent" && "Immediate Action"}
                                                    {tone === "Witty" && "Pattern Interrupt"}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </CardContent>

                        <CardFooter className="flex justify-between p-8 border-t border-white/5 bg-black/20">
                            {step > 1 ? (
                                <Button variant="ghost" onClick={handleBack} className="text-gray-400 hover:text-white hover:bg-white/5">
                                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                                </Button>
                            ) : (
                                <div />
                            )}

                            {step < 3 ? (
                                <Button onClick={handleNext} className="bg-white text-black hover:bg-gray-200 font-bold px-8">
                                    Next Phase
                                </Button>
                            ) : (
                                <Button onClick={handleSubmit} className="bg-red-600 hover:bg-red-700 text-white shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)] font-bold px-8 transition-all hover:scale-105">
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    INITIALIZE ENGINE
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                )}
            </main>
        </div>
    )
}
