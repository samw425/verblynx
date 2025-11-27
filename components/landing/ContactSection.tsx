"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, Send, MessageSquare } from "lucide-react"
import { toast } from "sonner"
import * as motion from "framer-motion/client"

export function ContactSection() {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const res = await fetch('/api/notify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'contact',
                    ...formData
                })
            })

            if (!res.ok) throw new Error("Failed to send message")

            toast.success("Message sent! We'll be in touch shortly.")
            setFormData({ name: "", email: "", message: "" })
        } catch (error) {
            toast.error("Failed to send message. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="py-24 relative overflow-hidden bg-black border-t border-white/10" id="contact">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
                            CONTACT <span className="text-red-600">HQ.</span>
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed mb-8">
                            Have questions about the engine? Feature requests?
                            <br />
                            Direct line to the engineering team.
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
                            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                            SYSTEM STATUS: LISTENING
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="contact-name" className="text-gray-300">Name</Label>
                                <Input
                                    id="contact-name"
                                    placeholder="Your name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="bg-black/50 border-white/10 text-white focus:border-red-500/50 h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="contact-email" className="text-gray-300">Email</Label>
                                <Input
                                    id="contact-email"
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="bg-black/50 border-white/10 text-white focus:border-red-500/50 h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="contact-message" className="text-gray-300">Message</Label>
                                <Textarea
                                    id="contact-message"
                                    placeholder="Tell us what's on your mind..."
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="bg-black/50 border-white/10 text-white focus:border-red-500/50 min-h-[120px]"
                                />
                            </div>

                            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-12 text-lg shadow-[0_0_20px_-5px_rgba(220,38,38,0.4)]" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Transmitting...
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2 h-5 w-5" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
