import { ChatInterface } from "@/components/editor/chat-interface"
import { DocumentEditor } from "@/components/editor/document-editor"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import * as motion from "framer-motion/client"

export default function EditorPage() {
    return (
        <div className="h-screen flex flex-col bg-black text-foreground overflow-hidden">
            {/* Minimal Header */}
            <header className="h-12 border-b border-white/10 flex items-center px-4 bg-black z-20">
                <Link href="/dashboard" className="text-gray-400 hover:text-white flex items-center gap-2 text-sm transition-colors">
                    <ArrowLeft className="h-4 w-4" /> Back to Dashboard
                </Link>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Left: Chat (30%) */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-[400px] shrink-0 z-10"
                >
                    <ChatInterface />
                </motion.div>

                {/* Right: Editor (70%) */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex-1 relative"
                >
                    {/* Background Effects for Editor Area */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none" />
                    <DocumentEditor />
                </motion.div>
            </div>
        </div>
    )
}
