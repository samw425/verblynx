import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Cpu, Zap, Network, Lock, Layers } from "lucide-react"

export default function EnginePage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30 pt-24">

            {/* Hero */}
            <section className="relative px-6 py-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] animate-pulse" />
                </div>
                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/20 border border-red-500/30 text-red-400 text-sm font-mono mb-8">
                        <Cpu className="h-4 w-4" />
                        <span>SYSTEM ARCHITECTURE v3.0</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
                        NOT A WRITER.<br />
                        A <span className="text-red-600">NEURAL ARCHITECT.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Verblynx isn't a chatbot. It's a multi-layered cognitive engine designed to deconstruct persuasion into a science. Here is how the machine thinks.
                    </p>
                </div>
            </section>

            {/* The Architecture */}
            <section className="py-20 border-t border-white/5 bg-black/50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            {/* Node 1 */}
                            <div className="relative pl-8 border-l-2 border-red-900/30 hover:border-red-500 transition-colors group">
                                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-black border-2 border-red-900 group-hover:border-red-500 transition-colors" />
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                    <Brain className="h-6 w-6 text-red-500" />
                                    Inference Node
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Before writing a single word, the engine analyzes your inputs to construct a <strong>Strategic Profile</strong>. It determines the Awareness Level (Unaware to Most Aware) and Market Sophistication of your audience.
                                </p>
                            </div>

                            {/* Node 2 */}
                            <div className="relative pl-8 border-l-2 border-red-900/30 hover:border-red-500 transition-colors group">
                                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-black border-2 border-red-900 group-hover:border-red-500 transition-colors" />
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                    <Network className="h-6 w-6 text-red-500" />
                                    Generative Matrix
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    The core processing unit. It selects the optimal framework (PAS, AIDA, SLAP) based on the inference data. It doesn't just "guess"; it follows a rigid psychological protocol to ensure every sentence earns its keep.
                                </p>
                            </div>

                            {/* Node 3 */}
                            <div className="relative pl-8 border-l-2 border-red-900/30 hover:border-red-500 transition-colors group">
                                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-black border-2 border-red-900 group-hover:border-red-500 transition-colors" />
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                    <Zap className="h-6 w-6 text-red-500" />
                                    Critique Loop
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Most AI stops at the first draft. Verblynx doesn't. The <strong>Critique Loop</strong> self-audits the generated copy against 50+ "Elite Standards" (Rhythm, Specificity, Visceral Language) and rewrites it before you ever see it.
                                </p>
                            </div>
                        </div>

                        {/* Visual */}
                        <div className="relative h-[600px] bg-gray-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-64 h-64">
                                    <div className="absolute inset-0 border-4 border-red-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute inset-4 border-4 border-red-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                    <div className="absolute inset-8 border-4 border-red-500/60 rounded-full animate-[spin_20s_linear_infinite]" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Cpu className="h-16 w-16 text-red-500 animate-pulse" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/80 backdrop-blur-xl border-t border-white/10">
                                <div className="font-mono text-xs text-green-400 mb-2">
                            > SYSTEM STATUS: OPTIMAL<br />
                            > MODEL: GEMINI 1.5 PRO (ELITE)<br />
                            > LATENCY: 42ms
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 border-t border-white/5">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Ready to deploy the machine?</h2>
                    <Link href="/create">
                        <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg">
                            Initialize Engine <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
