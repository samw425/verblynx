"use client"

import { useState, useEffect } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Copy, Save, RefreshCw } from "lucide-react"
import { toast } from "sonner"

interface DocumentEditorProps {
    content: string
    setContent: (content: string) => void
    projectName: string
}

export function DocumentEditor({ content, setContent, projectName }: DocumentEditorProps) {

    const handleCopy = () => {
        navigator.clipboard.writeText(content)
        toast.success("Copied to clipboard")
    }

    return (
        <div className="flex flex-col h-full bg-black">
            <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-black/50 backdrop-blur-xl">
                <div className="text-sm font-medium text-gray-400">
                    Draft: <span className="text-white">{projectName}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" onClick={() => toast.success("Saved")}>
                        <Save className="mr-2 h-4 w-4" /> Save
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" onClick={handleCopy}>
                        <Copy className="mr-2 h-4 w-4" /> Copy
                    </Button>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white shadow-[0_0_15px_-5px_rgba(220,38,38,0.4)]">
                        <RefreshCw className="mr-2 h-4 w-4" /> Regenerate
                    </Button>
                </div>
            </div>
            <div className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-3xl mx-auto bg-white text-black rounded-lg shadow-2xl min-h-[800px] p-12 font-mono text-sm leading-relaxed">
                    <Textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full h-full min-h-[700px] border-0 focus-visible:ring-0 resize-none p-0 text-base font-sans text-gray-900 placeholder:text-gray-400"
                    />
                </div>
            </div>
        </div>
    )
}
