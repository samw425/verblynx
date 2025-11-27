"use client"

import { ChatInterface } from "@/components/editor/chat-interface"
import { DocumentEditor } from "@/components/editor/document-editor"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import * as motion from "framer-motion/client"
import { useState, useEffect } from "react"

export default function EditorPage() {
    const [copy, setCopy] = useState("")
    const [strategy, setStrategy] = useState<any>(null)
    const [projectName, setProjectName] = useState("Untitled Project")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem('verblynx_latest_copy')
        if (stored) {
            const data = JSON.parse(stored)
            setCopy(data.copy || "")
            setStrategy(data.strategy || {})
            setProjectName(data.projectName || "Untitled Project")
        }
        setIsLoaded(true)
    }, [])

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
