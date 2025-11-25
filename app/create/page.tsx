"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Sparkles, Loader2, Edit2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { CopyBrief } from "@/lib/schemas"

export default function CreatePage() {
    const router = useRouter()
    const [prompt, setPrompt] = useState("")
    const [isInferring, setIsInferring] = useState(false)
    const [inferredBrief, setInferredBrief] = useState<CopyBrief | null>(null)
    const [isGenerating, setIsGenerating] = useState(false)

    const handleInfer = async () => {
        if (!prompt.trim()) return
        setIsInferring(true)
        try {
            const res = await fetch("/api/infer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt })
            })
            if (!res.ok) throw new Error("Inference failed")
            const data = await res.json()
            setInferredBrief(data)
        } catch (error) {
            toast.error("Could not understand request. Try again.")
        } finally {
            setIsInferring(false)
        }
    }

    const handleGenerate = async () => {
        if (!inferredBrief) return
        setIsGenerating(true)
        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(inferredBrief),
            })

            if (!response.ok) throw new Error("Generation failed")
            const result = await response.json()

            const tempId = Date.now().toString()
            localStorage.setItem(`draft-${tempId}`, JSON.stringify({
                ...result,
                brief: inferredBrief,
                createdAt: new Date().toISOString()
            }))

            // Small delay to ensure storage persistence before navigation
            setTimeout(() => {
                router.push(`/editor/${tempId}`)
            }, 100)
        } catch (error) {
            toast.error("Failed to generate copy.")
        } finally {
            setIsGenerating(false)
        }
    }

    return (
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-6 md:p-24 bg-background relative overflow-hidden">

            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full max-w-3xl z-10 space-y-8">

                <AnimatePresence mode="wait">
                    {!inferredBrief ? (
                        <motion.div
                            key="input"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6 text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                                What do you want to write?
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Describe your goal, and Verblynx will handle the strategy.
                            </p>

                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                                <div className="relative bg-card rounded-xl shadow-2xl border border-border/50">
                                    <Textarea
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        placeholder="e.g. Write a VSL script for a B2B SaaS offer targeting CTOs who are tired of slow deployments..."
                                        className="min-h-[150px] w-full resize-none border-0 bg-transparent p-6 text-xl placeholder:text-muted-foreground/50 focus-visible:ring-0"
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" && !e.shiftKey) {
                                                e.preventDefault()
                                                handleInfer()
                                            }
                                        }}
                                        autoFocus
                                    />
                                    <div className="flex justify-between items-center p-4 border-t border-border/50 bg-muted/20 rounded-b-xl">
                                        <span className="text-xs text-muted-foreground font-medium px-2">
                                            Press Enter to strategize
                                        </span>
                                        <Button
                                            onClick={handleInfer}
                                            disabled={!prompt.trim() || isInferring}
                                            className="rounded-full px-6"
                                        >
                                            {isInferring ? (
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                            ) : (
                                                <>
                                                    Strategize <ArrowRight className="ml-2 h-4 w-4" />
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="strategy"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full max-w-2xl mx-auto"
                        >
                            <div className="bg-card rounded-2xl border shadow-2xl overflow-hidden">
                                <div className="p-8 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2 text-primary">
                                            <Sparkles className="h-5 w-5" />
                                            <span className="font-semibold tracking-wide uppercase text-sm">Strategy Detected</span>
                                        </div>
                                        <Button variant="ghost" size="sm" onClick={() => setInferredBrief(null)}>
                                            <Edit2 className="h-4 w-4 mr-2" /> Edit Brief
                                        </Button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-muted-foreground uppercase">Format</label>
                                            <p className="text-lg font-medium capitalize">{inferredBrief.type}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-muted-foreground uppercase">Audience</label>
                                            <p className="text-lg font-medium">{inferredBrief.audience}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-muted-foreground uppercase">Goal</label>
                                            <p className="text-lg font-medium">{inferredBrief.goal}</p>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                                        <label className="text-xs font-medium text-muted-foreground uppercase mb-2 block">Context</label>
                                        <p className="text-sm text-foreground/80 italic">"{inferredBrief.context}"</p>
                                    </div>
                                </div>

                                <div className="p-6 bg-muted/20 border-t flex justify-end">
                                    <Button
                                        size="lg"
                                        onClick={handleGenerate}
                                        disabled={isGenerating}
                                        className="w-full md:w-auto text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                                    >
                                        {isGenerating ? (
                                            <>
                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Writing...
                                            </>
                                        ) : (
                                            <>
                                                <Sparkles className="mr-2 h-5 w-5" /> Generate Magic Copy
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
