"use client"

import { DashboardHeader } from "@/components/dashboard/header"
import { Button } from "@/components/ui/button"
import { Plus, Sparkles, ArrowRight, Copy, Check, Brain, Layers, Zap } from "lucide-react"
import Link from "next/link"
import * as motion from "framer-motion/client"
import { useEffect, useState } from "react"

export default function DashboardPage() {
    const [latestCopy, setLatestCopy] = useState<any>(null)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        // Check for latest generated copy
        const stored = localStorage.getItem('verblynx_latest_copy')
        if (stored) {
            setLatestCopy(JSON.parse(stored))
        }
    }, [])

    const handleCopy = () => {
        if (latestCopy?.copy) {
            navigator.clipboard.writeText(latestCopy.copy)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    // Real projects would come from Supabase. For Beta, we rely on the latest generation.
    const projects: any[] = []

    return (
        <div className="min-h-full flex flex-col">
            <DashboardHeader />

            <div className="flex-1 p-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between mb-8"
                >
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Command Center</h1>
                        <p className="text-gray-400 mt-1">Manage your strategic assets.</p>
                    </div>
                    {projects.length > 0 && (
                        <Link href="/create">
                            <Button className="bg-red-600 hover:bg-red-700 text-white shadow-[0_0_20px_-5px_rgba(220,38,38,0.4)]">
                                <Plus className="mr-2 h-4 w-4" /> New Project
                            </Button>
                        </Link>
                    )}
                </motion.div>

                {/* Latest Generated Copy Section */}
                {latestCopy && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-8 bg-gradient-to-br from-red-900/20 to-black border border-red-500/20 rounded-2xl p-8"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-1">{latestCopy.projectName || 'Latest Generation'}</h2>
                                <p className="text-gray-400 text-sm">Generated {new Date(latestCopy.createdAt).toLocaleString()}</p>
                            </div>
                            <Button
                                onClick={handleCopy}
                                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                            >
                                {copied ? (
                                    <>
                                        <Check className="mr-2 h-4 w-4" /> Copied!
                                    </>
                                ) : (
                                    <>
                                        <Copy className="mr-2 h-4 w-4" /> Copy
                                    </>
                                )}
                            </Button>
                            <Link href="/editor/latest">
                                <Button className="ml-2 bg-red-600 hover:bg-red-700 text-white shadow-[0_0_15px_-5px_rgba(220,38,38,0.4)]">
                                    Open in Editor
                                </Button>
                            </Link>
                        </div>

                        {/* The Generated Copy */}
                        <div className="bg-black/50 rounded-xl p-6 mb-6 border border-white/5">
                            <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">Your Copy</h3>
                            <div className="text-white whitespace-pre-wrap leading-relaxed">
                                {latestCopy.copy}
                            </div>
                        </div>

                        {/* The "Why" Explanation - Masterclass Breakdown */}
                        {latestCopy.explanation && (
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                    <Sparkles className="h-4 w-4 text-red-500" />
                                    Masterclass Breakdown
                                </h3>

                                {typeof latestCopy.explanation === 'object' ? (
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {/* Psychology Card */}
                                        <div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="h-8 w-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                                    <Brain className="h-4 w-4 text-purple-400" />
                                                </div>
                                                <span className="font-bold text-purple-200">Psychology</span>
                                            </div>
                                            <p className="text-sm text-purple-100/80 leading-relaxed">
                                                {latestCopy.explanation.psychology}
                                            </p>
                                        </div>

                                        {/* Structure Card */}
                                        <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                                    <Layers className="h-4 w-4 text-blue-400" />
                                                </div>
                                                <span className="font-bold text-blue-200">Structure</span>
                                            </div>
                                            <p className="text-sm text-blue-100/80 leading-relaxed">
                                                {latestCopy.explanation.structure}
                                            </p>
                                        </div>

                                        {/* Power Words Card */}
                                        <div className="bg-yellow-900/10 border border-yellow-500/20 rounded-xl p-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="h-8 w-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                                                    <Zap className="h-4 w-4 text-yellow-400" />
                                                </div>
                                                <span className="font-bold text-yellow-200">Power Words</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {latestCopy.explanation.power_words?.map((word: string, i: number) => (
                                                    <span key={i} className="px-2 py-1 rounded bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-200">
                                                        {word}
                                                    </span>
                                                )) || (
                                                        <span className="text-sm text-yellow-100/50">N/A</span>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-blue-900/10 rounded-xl p-6 border border-blue-500/20">
                                        <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                                            {latestCopy.explanation}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                )}

                {projects.length === 0 && !latestCopy && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="h-[60vh] flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5"
                    >
                        <div className="h-20 w-20 rounded-full bg-red-900/20 flex items-center justify-center mb-6 border border-red-500/20 shadow-[0_0_30px_-5px_rgba(220,38,38,0.2)]">
                            <Sparkles className="h-10 w-10 text-red-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Ready to Master the Art?</h2>
                        <p className="text-gray-400 max-w-md text-center mb-8">
                            You haven't created any campaigns yet. Initialize the strategy engine to start generating high-converting copy.
                        </p>
                        <Link href="/create">
                            <Button size="lg" className="h-12 px-8 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-[0_0_30px_-5px_rgba(220,38,38,0.4)] transition-all hover:scale-105">
                                Initialize Project <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
