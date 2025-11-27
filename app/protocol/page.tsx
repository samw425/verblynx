import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Search, PenTool, BarChart3, CheckCircle2 } from "lucide-react"

export default function ProtocolPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30 pt-24">

            {/* Hero */}
            <section className="relative px-6 py-20 overflow-hidden">
                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-mono mb-8">
                        <Target className="h-4 w-4" />
                        <span>OPERATIONAL DOCTRINE</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
                        THE DEMAND-FIRST <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">PROTOCOL.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Amateurs guess. Professionals validate. The Verblynx Protocol is a 4-step methodology to ensure your copy doesn't just sound good—it converts.
                    </p>
                </div>
            </section>

            {/* The Steps */}
            <section className="py-20 border-t border-white/5 bg-black">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="space-y-24">

                        {/* Step 1 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="text-6xl font-black text-white/10 mb-4">01</div>
                                <h3 className="text-3xl font-bold text-white mb-4">Deep Reconnaissance</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    We don't start writing. We start by listening. The Protocol begins by scraping the "mental data" of your market. What keeps them up at night? What have they already tried? Who do they hate?
                                </p>
                                <ul className="space-y-2 text-gray-500">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-500" /> Identify Core Desire</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-500" /> Map Awareness Level</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-500" /> Isolate "Silent Killer" Objections</li>
                                </ul>
                            </div>
                            <div className="order-1 md:order-2 bg-gray-900 rounded-2xl p-8 border border-white/10 h-[300px] flex items-center justify-center">
                                <Search className="h-24 w-24 text-gray-700" />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="bg-gray-900 rounded-2xl p-8 border border-white/10 h-[300px] flex items-center justify-center">
                                <PenTool className="h-24 w-24 text-gray-700" />
                            </div>
                            <div>
                                <div className="text-6xl font-black text-white/10 mb-4">02</div>
                                <h3 className="text-3xl font-bold text-white mb-4">Strategic Assembly</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    Once the target is locked, we assemble the weapon. We select the specific psychological framework (PAS, AIDA, BAB) that matches the audience's sophistication level.
                                </p>
                                <ul className="space-y-2 text-gray-500">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-500" /> Framework Selection</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-500" /> Tone Calibration</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-500" /> Mechanism Definition</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="text-6xl font-black text-white/10 mb-4">03</div>
                                <h3 className="text-3xl font-bold text-white mb-4">The Critique Loop</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    Writing is rewriting. The Engine generates a draft, then immediately switches personas to become a ruthless editor. It hunts for clichés, weak verbs, and passive voice, eliminating them with extreme prejudice.
                                </p>
                                <ul className="space-y-2 text-gray-500">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-500" /> Jargon Elimination</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-500" /> Rhythm Optimization</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-500" /> "You" Focus Check</li>
                                </ul>
                            </div>
                            <div className="order-1 md:order-2 bg-gray-900 rounded-2xl p-8 border border-white/10 h-[300px] flex items-center justify-center">
                                <BarChart3 className="h-24 w-24 text-gray-700" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 border-t border-white/5">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Execute the Protocol.</h2>
                    <Link href="/create">
                        <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg">
                            Start Mission <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
