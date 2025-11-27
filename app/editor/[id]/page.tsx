"use client"

import { ChatInterface } from "@/components/editor/chat-interface"
import { DocumentEditor } from "@/components/editor/document-editor"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import * as motion from "framer-motion/client"
import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"

export default function EditorPage({ params }: { params: { id: string } }) {
    const [copy, setCopy] = useState("")
    const [strategy, setStrategy] = useState<any>(null)
    const [projectName, setProjectName] = useState("Untitled Project")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const loadProject = async () => {
            // 1. If ID is "latest", try localStorage
            if (params.id === 'latest') {
                const stored = localStorage.getItem('verblynx_latest_copy')
                if (stored) {
                    try {
                        const data = JSON.parse(stored)
                        if (data && data.copy) {
                            setCopy(data.copy)
                            setStrategy(data.strategy || {})
                            setProjectName(data.projectName || "Untitled Project")
                        }
                    } catch (e) {
                        console.error("Failed to parse localStorage data", e)
                    }
                }
                setIsLoaded(true)
                return
            }

            // 2. If ID is UUID, fetch from Supabase
            const supabase = createClient()
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .eq('id', params.id)
                .single()

            if (data) {
                setCopy(data.copy)
                setStrategy(data.strategy || {})
                setProjectName(data.name || "Untitled Project")
            } else if (error) {
                console.error("Failed to fetch project:", error)
            }
            setIsLoaded(true)
        }

        loadProject()
    }, [params.id])

    return (
        <div className="h-screen flex flex-col bg-black text-foreground overflow-hidden">
            {/* Minimal Header */}
            <header className="h-12 border-b border-white/10 flex items-center px-4 bg-black z-20 justify-between">
                <Link href="/dashboard" className="text-gray-400 hover:text-white flex items-center gap-2 text-sm transition-colors">
                    <ArrowLeft className="h-4 w-4" /> Back to Dashboard
                </Link>
                <div className="text-sm text-gray-500 font-mono">
                    {projectName} // <span className="text-red-500">LIVE EDITOR</span>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Left: Chat (30%) */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-[400px] shrink-0 z-10 border-r border-white/10 bg-black"
                >
                    <ChatInterface
                        strategy={strategy}
                        currentCopy={copy}
                        onUpdateCopy={(newCopy) => setCopy(newCopy)}
                    />
                </motion.div>

                {/* Right: Editor (70%) */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex-1 relative bg-gray-900/50"
                >
                    {/* Background Effects for Editor Area */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/5 via-black to-black pointer-events-none" />
                    <DocumentEditor
                        content={copy}
                        setContent={setCopy}
                        projectName={projectName}
                    />
                </motion.div>
            </div>
        </div>
    )
}
