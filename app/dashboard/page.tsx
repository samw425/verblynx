"use client"

import { DashboardHeader } from "@/components/dashboard/header"
import { Button } from "@/components/ui/button"
import { Plus, Sparkles, ArrowRight, Copy, Check, Brain, Layers, Zap, Clock, FileText, Target } from "lucide-react"
import Link from "next/link"
import * as motion from "framer-motion/client"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { toast } from "sonner"

export default function DashboardPage() {
    const [latestCopy, setLatestCopy] = useState<any>(null)
    const [projects, setProjects] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const supabase = createClient()
                const { data: { user } } = await supabase.auth.getUser()

                if (user) {
                    // Logged in: Fetch from Supabase
                    const { data, error } = await supabase
                        .from('projects')
                        .select('*')
                        .order('created_at', { ascending: false })

                    if (error) throw error
                    if (data) setProjects(data)

                    // Only use localStorage if it's VERY recent (e.g. just generated) AND we have no DB data yet
                    // This prevents showing old/stale data to a new user
                    const stored = localStorage.getItem('verblynx_latest_copy')
                    if (stored && (!data || data.length === 0)) {
                        const parsed = JSON.parse(stored)
                        const created = new Date(parsed.createdAt).getTime()
                        const now = new Date().getTime()
                        // Only show if created in last 5 minutes
                        if (now - created < 5 * 60 * 1000) {
                            setLatestCopy(parsed)
                        }
                    }
                } else {
                    // Not logged in: Show localStorage
                    const stored = localStorage.getItem('verblynx_latest_copy')
                    if (stored) {
                        setLatestCopy(JSON.parse(stored))
                    }
                }
            } catch (error) {
                console.error('Failed to load dashboard data:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProjects()
    }, [])

    const handleCopy = (text: string) => {
        if (text) {
            navigator.clipboard.writeText(text)
            setCopied(true)
            toast.success("Copy to clipboard")
            setTimeout(() => setCopied(false), 2000)
        }
    }

    return (
        <div className="min-h-full flex flex-col">
            <DashboardHeader />

            <div className="flex-1 p-8 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between mb-12"
                >
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Command Center</h1>
                        <p className="text-gray-400 mt-1">Manage your strategic assets.</p>
                    </div>
                    <Link href="/create">
                        <Button className="bg-red-600 hover:bg-red-700 text-white shadow-[0_0_20px_-5px_rgba(220,38,38,0.4)]">
                            <Plus className="mr-2 h-4 w-4" /> New Project
                        </Button>
                    </Link>
                </motion.div>

                {/* Latest Generation (Hero Card) */}
                {latestCopy && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="h-4 w-4 text-red-500" />
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Latest Generation</span>
                        </div>
                        <div className="bg-black border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-colors group">
                            <div className="p-6 border-b border-white/10 bg-white/5 flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2">{latestCopy.projectName || "Untitled Project"}</h2>
                                    <div className="flex items-center gap-4 text-sm text-gray-400">
                                        <span className="flex items-center gap-1"><Brain className="h-3 w-3" /> {latestCopy.strategy?.framework || "Strategic Copy"}</span>
                                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {new Date(latestCopy.createdAt).toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/10 text-gray-300" onClick={() => handleCopy(latestCopy.copy)}>
                                        {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                                        {copied ? "Copied" : "Copy"}
                                    </Button>
                                    <Link href="/editor/latest">
                                        <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                                            Open in Editor
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-6 bg-black/50">
                                <div className="font-mono text-sm text-gray-300 whitespace-pre-wrap line-clamp-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {latestCopy.copy}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Project History */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                        <Layers className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Project History</span>
                    </div>

                    {isLoading ? (
                        <div className="text-center py-12 text-gray-500">Loading history...</div>
                    ) : projects.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <Link href={`/editor/${project.id}`} key={project.id}>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-all cursor-pointer h-full flex flex-col"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 rounded-lg bg-red-900/20 text-red-400">
                                                <FileText className="h-5 w-5" />
                                            </div>
                                            <span className="text-xs text-gray-500 font-mono">
                                                {new Date(project.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{project.name}</h3>
                                        <p className="text-sm text-gray-400 line-clamp-3 mb-4 flex-1">
                                            {project.copy}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto pt-4 border-t border-white/5">
                                            <Target className="h-3 w-3" />
                                            <span className="truncate">{project.goal || "Marketing Copy"}</span>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 border border-dashed border-white/10 rounded-xl">
                            <p className="text-gray-500 mb-4">No saved projects yet.</p>
                            <Link href="/create">
                                <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white">
                                    Start Your First Project
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
