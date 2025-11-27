"use client"

import { Button } from "@/components/ui/button"
import StripeButton from "@/components/ui/StripeButton"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24">
            <div className="container mx-auto px-6 py-12">

                <div className="text-center space-y-6 mb-16">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                        SIMPLE <span className="text-red-600">PRICING.</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        Invest in your conversion rate. It pays for itself.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Free Tier */}
                    <div className="glass-card p-10 rounded-3xl relative overflow-hidden">
                        <h3 className="text-2xl font-bold text-white mb-2">Initiate</h3>
                        <div className="text-4xl font-black text-white mb-6">$0</div>
                        <p className="text-gray-400 mb-8 h-12">Essential tools for early-stage validation.</p>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="h-5 w-5 text-gray-500" />
                                <span>3 Daily Generations</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="h-5 w-5 text-gray-500" />
                                <span>Standard Processing</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="h-5 w-5 text-gray-500" />
                                <span>Community Support</span>
                            </li>
                        </ul>

                        <Link href="/create">
                            <Button variant="outline" className="w-full h-14 rounded-full border-white/10 hover:bg-white hover:text-black transition-all">
                                Start Free
                            </Button>
                        </Link>
                    </div>

                    {/* Pro Tier */}
                    <div className="glass-card p-10 rounded-3xl relative overflow-hidden border-red-500/30 bg-red-900/5">
                        <div className="absolute top-0 right-0 px-6 py-2 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-bl-2xl">
                            Beta Access
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">Dominion</h3>
                        <div className="text-4xl font-black text-white mb-6">$0<span className="text-lg font-medium text-gray-500"> (Beta)</span></div>
                        <p className="text-gray-400 mb-8 h-12">Unrestricted access for power users.</p>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle2 className="h-5 w-5 text-red-500" />
                                <span><strong>Unlimited</strong> Generations</span>
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle2 className="h-5 w-5 text-red-500" />
                                <span><strong>Priority</strong> Inference Engine</span>
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle2 className="h-5 w-5 text-red-500" />
                                <span>Advanced Tone Control</span>
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle2 className="h-5 w-5 text-red-500" />
                                <span>Early Access to New Models</span>
                            </li>
                        </ul>

                        <Link href="/create">
                            <Button className="w-full h-14 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold shadow-[0_0_30px_-5px_rgba(220,38,38,0.4)] transition-all hover:scale-105">
                                Get Beta Access
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
