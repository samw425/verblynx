"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Brain, Target, Zap } from "lucide-react"

export default function WhyPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24">
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto space-y-12">

                    <div className="text-center space-y-6">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                            WHY <span className="text-red-600">VERBLYNX?</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                            Because "good enough" copy is expensive. Bad copy is fatal.
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <p>
                            The internet is flooded with automated noise. Generic, bland, "safe" copy that doesn't offend anyone—but doesn't convert anyone either.
                        </p>
                        <p>
                            We built Verblynx to solve the <strong>"Blank Page Problem"</strong> and the <strong>"Generic Output Problem"</strong> simultaneously.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 pt-8">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <Brain className="h-8 w-8 text-purple-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Psychology First</h3>
                            <p className="text-sm text-gray-400">We don't just predict the next word. We predict the next emotion.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <Target className="h-8 w-8 text-red-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Conversion Focused</h3>
                            <p className="text-sm text-gray-400">Every output is engineered to drive a specific action. No fluff.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <Zap className="h-8 w-8 text-yellow-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Instant Speed</h3>
                            <p className="text-sm text-gray-400">What used to take 4 hours now takes 4 seconds.</p>
                        </div>
                    </div>

                    <div className="text-center pt-12">
                        <Link href="/create">
                            <Button size="lg" className="h-16 px-10 rounded-full text-lg font-bold bg-white text-black hover:bg-gray-200">
                                Experience the Difference <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
