"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Sparkles, Target, Users, Zap, Terminal, Cpu, Lock, Activity, BarChart3, Brain, Layers, Radio, ShieldCheck } from "lucide-react"
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

    // Engine Visualizer State
    const [engineStatus, setEngineStatus] = useState<"STANDBY" | "ANALYZING" | "GENERATING" | "OPTIMIZING">("STANDBY")
    const [activeModule, setActiveModule] = useState<string | null>(null)
    const logContainerRef = useRef<HTMLDivElement>(null)

    // Auto-scroll logs
    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight
        }
    }, [logs])

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
        setEngineStatus("ANALYZING")
        setLogs([])

        try {
            // Simulate Engine Startup
            setActiveModule("CORE_SYSTEM")
            addLog("> Initializing Verblynx Core...")
            await new Promise(r => setTimeout(r, 800))

            addLog("> Connecting to Strategic Inference Node...")
            setActiveModule("INFERENCE_ENGINE")
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
            setEngineStatus("GENERATING")
            setActiveModule("GENERATIVE_MATRIX")
            addLog("> Engaging Generative Engine...")
            await new Promise(r => setTimeout(r, 800))
            addLog("> DRAFTING INITIAL VERSION...")
            await new Promise(r => setTimeout(r, 600))

            setEngineStatus("OPTIMIZING")
            setActiveModule("CRITIQUE_LOOP")
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
            setEngineStatus("STANDBY")
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
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${isLoading ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                        <span className="text-[10px] font-bold text-gray-400 tracking-widest">
                            SYSTEM STATUS: {isLoading ? 'PROCESSING' : 'ONLINE'}
                        </span>
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-3 gap-8 items-start">

                {/* LEFT PANEL: MISSION PARAMETERS (Form) */}
                <div className="lg:col-span-2">
                    <Card className="bg-black/80 border border-white/10 backdrop-blur-xl shadow-2xl min-h-[600px] flex flex-col">
                        <CardHeader className="border-b border-white/5 pb-6">
                            <div className="flex items-center gap-4 mb-2">
                                <div className={`h-10 w-10 rounded-lg flex items-center justify-center border transition-colors duration-500 ${step === 1 ? 'bg-red-900/20 border-red-500/50 text-red-500' : 'bg-white/5 border-white/10 text-gray-500'}`}>
                                    <Target className="h-5 w-5" />
                                </div>
                                <div className={`h-10 w-10 rounded-lg flex items-center justify-center border transition-colors duration-500 ${step === 2 ? 'bg-red-900/20 border-red-500/50 text-red-500' : 'bg-white/5 border-white/10 text-gray-500'}`}>
                                    <Users className="h-5 w-5" />
                                </div>
                                <div className={`h-10 w-10 rounded-lg flex items-center justify-center border transition-colors duration-500 ${step === 3 ? 'bg-red-900/20 border-red-500/50 text-red-500' : 'bg-white/5 border-white/10 text-gray-500'}`}>
                                    <Cpu className="h-5 w-5" />
                                </div>
                            </div>
                            <CardTitle className="text-2xl font-black text-white tracking-tight uppercase">
                                {step === 1 && "Phase 1: Target Acquisition"}
                                {step === 2 && "Phase 2: Audience Profiling"}
                                {step === 3 && "Phase 3: Engine Calibration"}
                            </CardTitle>
                            <CardDescription className="text-gray-400">
                                {step === 1 && "Define the mission parameters."}
                                {step === 2 && "Who are we targeting?"}
                                {step === 3 && "Set the persuasion frequency."}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-8 pt-8 px-8 flex-1">
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
                                            disabled={isLoading}
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
                                            disabled={isLoading}
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
                                            disabled={isLoading}
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
                                                onClick={() => !isLoading && setFormData({ ...formData, tone })}
                                                className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 ${formData.tone === tone
                                                    ? "bg-red-900/20 border-red-500 text-white shadow-[0_0_20px_-5px_rgba(220,38,38,0.3)]"
                                                    : "bg-white/5 border-white/5 text-gray-400 hover:border-white/20 hover:bg-white/10"
                                                    } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                                <Button variant="ghost" onClick={handleBack} disabled={isLoading} className="text-gray-400 hover:text-white hover:bg-white/5">
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
                                <Button onClick={handleSubmit} disabled={isLoading} className="bg-red-600 hover:bg-red-700 text-white shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)] font-bold px-8 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                                    {isLoading ? (
                                        <span className="flex items-center gap-2">
                                            <span className="h-2 w-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                                            <span className="h-2 w-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                                            <span className="h-2 w-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                        </span>
                                    ) : (
                                        <>
                                            <Sparkles className="mr-2 h-4 w-4" />
                                            INITIALIZE ENGINE
                                        </>
                                    )}
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                </div>

                {/* RIGHT PANEL: ENGINE MONITOR (Visualizer) */}
                <div className="lg:col-span-1 h-full">
                    <div className="sticky top-6 space-y-4">
                        {/* Status Card */}
                        <div className="bg-black border border-white/10 rounded-xl p-6 shadow-2xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-2 opacity-20">
                                <Activity className="h-24 w-24 text-red-500" />
                            </div>

                            <div className="relative z-10">
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Engine Status</div>
                                <div className={`text-2xl font-black tracking-tight ${isLoading ? 'text-red-500 animate-pulse' : 'text-white'}`}>
                                    {engineStatus}
                                </div>

                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Inference Node</span>
                                        <div className={`h-2 w-2 rounded-full ${activeModule === 'INFERENCE_ENGINE' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]' : 'bg-gray-800'}`} />
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Generative Matrix</span>
                                        <div className={`h-2 w-2 rounded-full ${activeModule === 'GENERATIVE_MATRIX' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]' : 'bg-gray-800'}`} />
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Critique Loop</span>
                                        <div className={`h-2 w-2 rounded-full ${activeModule === 'CRITIQUE_LOOP' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]' : 'bg-gray-800'}`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Terminal Output */}
                        <div className="bg-black border border-white/10 rounded-xl p-4 shadow-2xl h-[400px] flex flex-col font-mono text-xs relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black to-transparent z-10" />
                            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent z-10" />

                            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2 text-gray-500">
                                <Terminal className="h-3 w-3" />
                                <span>VERBLYNX_CORE_LOGS</span>
                            </div>

                            <div ref={logContainerRef} className="flex-1 overflow-y-auto space-y-2 scrollbar-hide pb-4">
                                {logs.length === 0 ? (
                                    <div className="text-gray-700 italic text-center mt-20">
                                        Waiting for initialization...
                                    </div>
                                ) : (
                                    logs.map((log, i) => (
                                        <div key={i} className="text-green-500/80 animate-in fade-in slide-in-from-left-2 duration-200">
                                            {log}
                                        </div>
                                    ))
                                )}
                                {isLoading && (
                                    <div className="h-4 w-2 bg-green-500 animate-pulse mt-2" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
