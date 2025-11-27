"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Sparkles, User, Bot } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface Message {
    id: string
    role: "user" | "assistant"
    content: string
}

interface ChatInterfaceProps {
    strategy: any
    currentCopy: string
    onUpdateCopy: (copy: string) => void
}

export function ChatInterface({ strategy, currentCopy, onUpdateCopy }: ChatInterfaceProps) {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (strategy && messages.length === 0) {
            setMessages([
                {
                    id: "init",
                    role: "assistant",
                    content: `Engine Online. I have analyzed your strategy.\n\nTarget: ${strategy.audience || 'Unknown'}\nGoal: ${strategy.goal || 'Unknown'}\nFramework: ${strategy.framework || 'PAS'}\n\nI am ready to help you refine this asset.`
                }
            ])
        }
    }, [strategy])

    const handleSend = async () => {
        if (!input.trim()) return

        const userMsg: Message = { id: Date.now().toString(), role: "user", content: input }
        setMessages(prev => [...prev, userMsg])
        setInput("")
        setIsLoading(true)

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMsg],
                    context: strategy,
                    currentCopy: currentCopy
                })
            })

            const data = await res.json()

            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: data.content
            }
            setMessages(prev => [...prev, aiMsg])
        } catch (error) {
            console.error(error)
            toast.error("Failed to connect to Engine.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-col h-full bg-black/50 border-r border-white/10">
            <div className="p-4 border-b border-white/10 flex items-center gap-2 bg-black/40">
                <Sparkles className="h-4 w-4 text-red-500" />
                <span className="font-bold text-sm text-white tracking-wider">STRATEGIC INTELLIGENCE</span>
            </div>

            <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={cn(
                                "flex gap-3 max-w-[90%]",
                                msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                            )}
                        >
                            <div className={cn(
                                "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                                msg.role === "user" ? "bg-gray-700" : "bg-red-900/50 border border-red-500/20"
                            )}>
                                {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4 text-red-400" />}
                            </div>
                            <div className={cn(
                                "rounded-lg p-3 text-sm whitespace-pre-wrap leading-relaxed",
                                msg.role === "user"
                                    ? "bg-gray-800 text-white"
                                    : "bg-red-900/10 border border-red-500/10 text-gray-300"
                            )}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex gap-3">
                            <div className="h-8 w-8 rounded-full bg-red-900/50 border border-red-500/20 flex items-center justify-center shrink-0">
                                <Bot className="h-4 w-4 text-red-400" />
                            </div>
                            <div className="bg-red-900/10 border border-red-500/10 rounded-lg p-3 text-sm text-gray-300">
                                <div className="flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" />
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce delay-75" />
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce delay-150" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>

            <div className="p-4 border-t border-white/10 bg-black/40">
                <form
                    onSubmit={(e) => { e.preventDefault(); handleSend() }}
                    className="relative"
                >
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Direct the strategy (e.g. 'Make the hook punchier')..."
                        className="bg-gray-900/50 border-white/10 text-white pr-10 focus:border-red-500/50 h-12"
                    />
                    <Button
                        type="submit"
                        size="icon"
                        variant="ghost"
                        className="absolute right-2 top-2 h-8 w-8 text-gray-400 hover:text-white hover:bg-white/10"
                        disabled={isLoading || !input.trim()}
                    >
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </div>
        </div>
    )
}
