"use client"

import { useState, useEffect } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Copy, Save, RefreshCw } from "lucide-react"
import { toast } from "sonner"

export function DocumentEditor() {
    const [content, setContent] = useState("")
    const [projectName, setProjectName] = useState("Untitled Project")

    useEffect(() => {
        const stored = localStorage.getItem('verblynx_latest_copy')
        if (stored) {
            const data = JSON.parse(stored)
            setContent(data.copy || "")
            setProjectName(data.projectName || "Untitled Project")
        } else {
            // Fallback for demo if nothing in local storage
            setContent(`Subject: Stop burning cash on ads.

[Name],

I analyzed your Q3 ad spend. You're bleeding ~20% on unoptimized creatives. 

Most founders try to fix this by increasing budget. That's a mistake.

I ran a model to fix it. Here is the recovered revenue forecast if we optimize your creative strategy:

[Link to Forecast]

Let's stop the bleeding.

- [Your Name]`)
        }
    }, [])

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
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
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
