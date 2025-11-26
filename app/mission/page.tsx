"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Heart, Zap, Users } from "lucide-react"

export default function MissionPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24">
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="space-y-6 text-center">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                            NOT TO REPLACE. <br />
                            <span className="text-red-600">TO EMPOWER.</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                            We believe the system shouldn't just do the work for you. It should make you better at the work.
                        </p>
                    </div>

                    {/* Core Values */}
                    <div className="grid md:grid-cols-2 gap-8 pt-12">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all">
                            <Users className="h-10 w-10 text-red-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">For Everyone</h3>
                            <p className="text-gray-400 leading-relaxed">
                                From the solo founder writing their first email to the CMO managing a global brand. Verblynx democratizes access to elite persuasion psychology.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all">
                            <Zap className="h-10 w-10 text-blue-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Education First</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Every piece of copy comes with a "Why This Works" breakdown. We don't just give you the fish; we teach you the physics of fishing.
                            </p>
                        </div>
                    </div>

                    {/* Manifesto */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-white">The Manifesto</h2>
                        <p>
                            The world doesn't need more noise. It needs clarity.
                        </p>
                        <p>
                            Most AI tools are "content vomit" machines. They produce generic, soulless text that clogs up inboxes and feeds.
                        </p>
                        <p>
                            Verblynx is different. We built a system that respects the human on the other end of the screen. We use psychology, empathy, and strategy to create communication that actually connects.
                        </p>
                        <p>
                            Our mission is to kill generic copy and replace it with meaningful, engineered influence.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="text-center pt-12">
                        <Link href="/signup">
                            <Button size="lg" className="h-16 px-10 rounded-full text-lg font-bold bg-white text-black hover:bg-gray-200">
                                Join the Mission <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
