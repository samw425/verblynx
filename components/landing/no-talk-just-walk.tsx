"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NoTalkJustWalkSection() {
    const [text, setText] = useState("")
    const fullText = "VSL HOOK: Most founders think churn is a product problem. It's not. It's a positioning problem. I analyzed your funnel, and here is the exact 3-step fix to recover 20% of your revenue."
    const [isCopied, setIsCopied] = useState(false)
    const [startTyping, setStartTyping] = useState(false)

    useEffect(() => {
        if (startTyping) {
            let i = 0
            const interval = setInterval(() => {
                setText(fullText.slice(0, i + 1))
                i++
                if (i > fullText.length) {
                    clearInterval(interval)
                }
            }, 30) // Typing speed
            return () => clearInterval(interval)
        }
    }, [startTyping])

    const handleCopy = () => {
        navigator.clipboard.writeText(fullText)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
    }

    return (
        <section className="py-24 bg-black relative border-b border-white/10 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6"
                    >
                        Proof. <span className="text-red-600">Over Pitch.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Don't just claim expertise. <strong className="text-white">Demonstrate it.</strong>
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* The Old Way */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-2xl bg-gray-900/30 border border-white/5 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 flex flex-col justify-center"
                    >
                        <div className="space-y-4 font-mono text-sm text-gray-500">
                            <p>"Hi [Name], just checking in to see if you saw my last email. We offer great services that can help your business grow. Let me know if you have time for a chat."</p>
                            <div className="h-px w-full bg-white/5 my-4" />
                            <p className="text-xs text-red-900/50 font-bold uppercase">Result: Deleted.</p>
                        </div>
                    </motion.div>

                    {/* The Verblynx Way */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        onViewportEnter={() => setStartTyping(true)}
                        className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-red-600/30 shadow-[0_0_50px_-10px_rgba(220,38,38,0.2)] group"
                    >
                        <div className="absolute top-0 right-0 px-4 py-1 bg-red-600 text-white text-xs font-bold rounded-bl-xl rounded-tr-xl">
                            VERBLYNX GENERATED
                        </div>

                        <div className="absolute top-4 right-4 z-20">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handleCopy}
                                className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full h-8 w-8"
                            >
                                {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                            </Button>
                        </div>

                        <div className="space-y-4 font-mono text-sm text-gray-300 min-h-[80px] pt-6">
                            <p>
                                "{text}"
                                <span className="inline-block w-2 h-4 bg-red-500 ml-1 animate-pulse align-middle" />
                            </p>
                            <div className="h-px w-full bg-gradient-to-r from-red-900/50 to-transparent my-4" />
                            <p className="text-xs text-red-400 font-bold uppercase flex items-center gap-2">
                                <CheckCircle2 className="h-3 w-3" /> Result: Reply & Results.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
