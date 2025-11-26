"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Terminal, Cpu, FileText } from "lucide-react"

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24">
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto space-y-12">

                    <div className="text-center space-y-6">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                            THE <span className="text-red-600">PROTOCOL</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                            Three steps. Zero guessing. From raw intent to deployed asset in seconds.
                        </p>
                    </div>

                    <div className="space-y-24 pt-12">
                        {/* Step 1 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="text-red-600 font-mono text-xl mb-4">01 // INPUT</div>
                                <h3 className="text-3xl font-bold mb-4">Command Center</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    You don't need to be a prompt engineer. Just tell Verblynx what you want, who it's for, and the tone.
                                </p>
                                <div className="p-4 bg-gray-900 rounded-lg border border-white/10 font-mono text-sm text-gray-300">
                                    &gt; Goal: Get beta signups<br />
                                    &gt; Audience: SaaS Founders<br />
                                    &gt; Tone: Authoritative
                                </div>
                            </div>
                            <div className="order-1 md:order-2 flex justify-center">
                                <div className="w-32 h-32 bg-gray-900 rounded-2xl flex items-center justify-center border border-white/10">
                                    <Terminal className="h-12 w-12 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="flex justify-center">
                                <div className="w-32 h-32 bg-gray-900 rounded-2xl flex items-center justify-center border border-white/10">
                                    <Cpu className="h-12 w-12 text-red-500" />
                                </div>
                            </div>
                            <div>
                                <div className="text-red-600 font-mono text-xl mb-4">02 // PROCESS</div>
                                <h3 className="text-3xl font-bold mb-4">Strategic Inference</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    This is where the magic happens. Verblynx doesn't just write; it analyzes. It references a database of high-converting frameworks (AIDA, PAS, StoryBrand) to select the perfect structure for your specific goal.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="text-red-600 font-mono text-xl mb-4">03 // OUTPUT</div>
                                <h3 className="text-3xl font-bold mb-4">Asset Generation</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    You get production-ready copy AND a strategic breakdown of why it works. We explain the psychology so you learn as you create.
                                </p>
                            </div>
                            <div className="order-1 md:order-2 flex justify-center">
                                <div className="w-32 h-32 bg-gray-900 rounded-2xl flex items-center justify-center border border-white/10">
                                    <FileText className="h-12 w-12 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-12">
                        <Link href="/create">
                            <Button size="lg" className="h-16 px-10 rounded-full text-lg font-bold bg-white text-black hover:bg-gray-200">
                                Start the Protocol <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
