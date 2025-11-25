"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Sparkles, User, Bot } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
    id: string
    role: "user" | "assistant"
    content: string
}

export function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "assistant",
            content: "I've initialized the strategy engine. Based on your inputs, we're targeting SaaS founders with an authoritative tone. What's the specific angle for this piece?"
        }
    ])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    const handleSend = async () => {
        if (!input.trim()) return

        const userMsg: Message = { id: Date.now().toString(), role: "user", content: input }
        setMessages(prev => [...prev, userMsg])
        setInput("")
        setIsLoading(true)

        // Simulate AI response
        setTimeout(() => {
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: "Understood. I'll draft a hook that focuses on the pain of wasted ad spend. Check the editor on the right."
            }
            setMessages(prev => [...prev, aiMsg])
            setIsLoading(false)
        }, 1500)
    }

    return (
        <div className="flex flex-col h-full bg-black/50 border-r border-white/10">
            <div className="p-4 border-b border-white/10 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-red-500" />
                <span className="font-bold text-sm text-white">Strategy Engine</span>
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
                                "rounded-lg p-3 text-sm",
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

            <div className="p-4 border-t border-white/10">
                <form
                    onSubmit={(e) => { e.preventDefault(); handleSend() }}
                    className="relative"
                >
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Direct the strategy..."
                        className="bg-gray-900/50 border-white/10 text-white pr-10 focus:border-red-500/50"
                    />
                    <Button
                        type="submit"
                        size="icon"
                        variant="ghost"
                        className="absolute right-1 top-1 h-8 w-8 text-gray-400 hover:text-white"
                        disabled={isLoading || !input.trim()}
                    >
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </div>
        </div>
    )
}
