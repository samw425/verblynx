"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Copy, Download, Save, Sparkles, Wand2 } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { toast } from "sonner"

export default function EditorPage() {
    const params = useParams()
    const id = params.id as string
    const [versions, setVersions] = useState<{ main: string; alt1: string; alt2: string } | null>(null)
    const [currentTab, setCurrentTab] = useState("main")
    const [customInstruction, setCustomInstruction] = useState("")
    const [isRefining, setIsRefining] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let retries = 0
        const maxRetries = 10 // 2 seconds total (200ms * 10)

        const loadDraft = () => {
            try {
                const key = `draft-${id}`
                console.log(`Attempting to load draft: ${key}`)
                const saved = localStorage.getItem(key)

                if (saved) {
                    const data = JSON.parse(saved)
                    setVersions({
                        main: data.main_version,
                        alt1: data.alt_versions[0],
                        alt2: data.alt_versions[1]
                    })
                    setIsLoading(false)
                } else {
                    if (retries < maxRetries) {
                        retries++
                        setTimeout(loadDraft, 200)
                    } else {
                        console.error(`Draft not found after ${maxRetries} retries`)
                        setIsLoading(false)
                    }
                }
            } catch (e) {
                console.error("Failed to load draft", e)
                toast.error("Could not load draft")
                setIsLoading(false)
            }
        }

        loadDraft()
    }, [id])

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        )
    }

    if (!versions) {
        return (
            <div className="flex h-screen flex-col items-center justify-center gap-4">
                <p className="text-muted-foreground">Draft not found</p>
                <Button asChild variant="outline">
                    <Link href="/dashboard">Back to Dashboard</Link>
                </Button>
            </div>
        )
    }

    const getCurrentText = () => {
        // @ts-ignore
        return versions[currentTab]
    }

    const updateCurrentText = (text: string) => {
        setVersions((prev) => {
            if (!prev) return null
            return {
                ...prev,
                [currentTab]: text || prev[currentTab as keyof typeof prev]
            }
        })
    }

    const handleRefine = async (instruction: string) => {
        setIsRefining(true)
        try {
            const response = await fetch("/api/refine", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    currentCopy: getCurrentText(),
                    instruction
                })
            })

            const data = await response.json()
            if (data.refinedCopy) {
                updateCurrentText(data.refinedCopy)
                toast.success("Copy refined!")
            }
        } catch (error) {
            toast.error("Failed to refine copy")
        } finally {
            setIsRefining(false)
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(getCurrentText())
        toast.success("Copied to clipboard")
    }

    return (
        <div className="flex h-screen flex-col md:flex-row overflow-hidden bg-black">
            {/* Main Editor */}
            <div className="flex-1 flex flex-col p-6 md:p-8 overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white hover:bg-gray-900">
                            <Link href="/create">
                                <ArrowLeft className="h-4 w-4" />
                            </Link>
                        </Button>
                        <h1 className="text-2xl font-bold text-white">Copy Editor</h1>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={copyToClipboard} className="border-red-500/30 text-white hover:bg-red-500/10">
                            <Copy className="mr-2 h-4 w-4" /> Copy
                        </Button>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                            <Save className="mr-2 h-4 w-4" /> Save
                        </Button>
                    </div>
                </div>

                <Tabs value={currentTab} onValueChange={setCurrentTab} className="flex-1 flex flex-col">
                    <TabsList className="w-fit mb-4 bg-gray-900 border border-red-500/20">
                        <TabsTrigger value="main" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-400">Main Version</TabsTrigger>
                        <TabsTrigger value="alt1" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-400">Variation 1</TabsTrigger>
                        <TabsTrigger value="alt2" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-400">Variation 2</TabsTrigger>
                    </TabsList>

                    <div className="flex-1 relative">
                        <Textarea
                            value={getCurrentText()}
                            onChange={(e) => updateCurrentText(e.target.value)}
                            className="h-full resize-none p-6 text-lg leading-relaxed bg-gray-900 border-red-500/20 text-white focus-visible:ring-1 focus-visible:ring-red-500 focus-visible:border-red-500"
                            placeholder="Your copy appears here..."
                        />
                    </div>
                </Tabs>
            </div>

            {/* Sidebar Controls */}
            <div className="w-full md:w-80 border-l border-red-500/20 bg-gray-950 p-6 overflow-y-auto">
                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold mb-4 flex items-center gap-2 text-white">
                            <Wand2 className="h-4 w-4 text-red-500" />
                            Refine Copy
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                            <Button variant="outline" size="sm" onClick={() => handleRefine("Make it shorter")} disabled={isRefining} className="border-red-500/30 text-gray-300 hover:bg-red-500/10 hover:text-white">
                                Shorter
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleRefine("Make it longer")} disabled={isRefining} className="border-red-500/30 text-gray-300 hover:bg-red-500/10 hover:text-white">
                                Longer
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleRefine("More confident")} disabled={isRefining} className="border-red-500/30 text-gray-300 hover:bg-red-500/10 hover:text-white">
                                Confident
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleRefine("Softer tone")} disabled={isRefining} className="border-red-500/30 text-gray-300 hover:bg-red-500/10 hover:text-white">
                                Softer
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleRefine("Simpler language")} disabled={isRefining} className="border-red-500/30 text-gray-300 hover:bg-red-500/10 hover:text-white">
                                Simpler
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleRefine("More persuasive")} disabled={isRefining} className="border-red-500/30 text-gray-300 hover:bg-red-500/10 hover:text-white">
                                Persuasive
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold text-sm text-white">Custom Instruction</h3>
                        <div className="flex gap-2">
                            <Input
                                placeholder="e.g. Add urgency..."
                                value={customInstruction}
                                onChange={(e) => setCustomInstruction(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleRefine(customInstruction)}
                                className="bg-gray-900 border-red-500/20 text-white placeholder:text-gray-500"
                            />
                            <Button size="icon" onClick={() => handleRefine(customInstruction)} disabled={isRefining || !customInstruction} className="bg-red-600 hover:bg-red-700">
                                <Sparkles className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
