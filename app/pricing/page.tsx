"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Lock, Zap } from "lucide-react"

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24">
            <div className="container mx-auto px-6 py-12">

                <div className="text-center space-y-6 mb-16">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                        SIMPLE <span className="text-red-600">PRICING.</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        Free beta access while we build. Pricing TBD after launch.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Beta Access Tier */}
                    <div className="glass-card p-10 rounded-3xl relative overflow-hidden border-2 border-red-500/50 bg-gradient-to-br from-red-900/10 to-black shadow-2xl shadow-red-900/20">
                        <div className="absolute top-0 right-0 px-6 py-3 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-bl-3xl">
                            BETA EXCLUSIVE
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-2 mt-8">Elite</h3>
                        <div className="flex items-baseline gap-3 mb-2">
                            <div className="text-6xl font-black text-white">$0</div>
                            <div className="text-2xl font-medium text-gray-500 line-through">$49</div>
                        </div>
                        <div className="text-sm text-red-400 mb-8 font-bold">Limited Beta • Free during development • Improving daily</div>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Full unrestricted access to The Engine. All features. No limits. Forever.
                        </p>

                        <div className="mb-8 p-4 rounded-xl bg-red-900/10 border border-red-500/30">
                            <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-3">What You Get:</div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-white">
                                    <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                    <span><strong>Unlimited Generations</strong> — No daily caps. Ever.</span>
                                </li>
                                <li className="flex items-start gap-3 text-white">
                                    <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                    <span><strong>Deep Psychological Breakdowns</strong> — Learn expert tactics</span>
                                </li>
                                <li className="flex items-start gap-3 text-white">
                                    <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                    <span><strong>Priority Inference Engine</strong> — Production-grade speed</span>
                                </li>
                                <li className="flex items-start gap-3 text-white">
                                    <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                    <span><strong>All Frameworks</strong> — PAS, AIDA, BAB, SLAP, QUEST, 4Ps</span>
                                </li>
                                <li className="flex items-start gap-3 text-white">
                                    <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                    <span><strong>Live Editor with Real-Time Refinement</strong></span>
                                </li>
                                <li className="flex items-start gap-3 text-white">
                                    <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                    <span><strong>Priority Support</strong></span>
                                </li>
                                <li className="flex items-start gap-3 text-white">
                                    <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                    <span><strong>Lifetime Beta Pricing Guarantee</strong></span>
                                </li>
                            </ul>
                        </div>

                        <Link href="/signup">
                            <Button className="w-full h-14 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg shadow-[0_0_40px_-5px_rgba(220,38,38,0.5)] transition-all hover:scale-105">
                                Claim Beta Access Now
                            </Button>
                        </Link>

                        <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                            <p className="text-xs text-gray-400">
                                <Lock className="h-3 w-3 inline mr-1" />
                                Your rate is locked forever. No surprises.
                            </p>
                        </div>
                    </div>

                    {/* Future Standard Tier (Coming Soon) */}
                    <div className="glass-card p-10 rounded-3xl relative overflow-hidden opacity-60">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                        <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
                        <div className="text-4xl font-black text-white mb-2">$49</div>
                        <div className="text-sm text-gray-500 mb-8">/month after beta</div>
                        <p className="text-gray-400 mb-8 h-12">For those who join after the beta period closes.</p>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-gray-400">
                                <CheckCircle2 className="h-5 w-5 text-gray-600" />
                                <span>Same features as Beta Elite</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <CheckCircle2 className="h-5 w-5 text-gray-600" />
                                <span>Standard monthly pricing</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <CheckCircle2 className="h-5 w-5 text-gray-600" />
                                <span>No lifetime lock-in</span>
                            </li>
                        </ul>

                        <Button disabled className="w-full h-14 rounded-full bg-gray-800 text-gray-500 font-bold cursor-not-allowed">
                            Available After Beta
                        </Button>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-900/20 border border-yellow-500/30 text-yellow-400 text-sm font-bold">
                        <Zap className="h-4 w-4" />
                        <span>Limited Beta Slots • Free access while we build & iterate</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
