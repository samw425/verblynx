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

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Free Tier */}
                    <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
                        <h3 className="text-2xl font-bold text-white mb-2">Initiate</h3>
                        <div className="text-4xl font-black text-white mb-6">$0</div>
                        <p className="text-gray-400 mb-8 h-12">Perfect for testing the waters and understanding the power of strategic engineering.</p>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="h-5 w-5 text-gray-500" />
                                <span>3 Strategy Generations / Day</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="h-5 w-5 text-gray-500" />
                                <span>Basic Framework Access</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="h-5 w-5 text-gray-500" />
                                <span>Community Support</span>
                            </li>
                        </ul>

                        <Link href="/create">
                            <Button variant="outline" className="w-full h-14 rounded-full border-white/20 hover:bg-white hover:text-black transition-all">
                                Start Free
                            </Button>
                        </Link>
                    </div>

                    {/* Pro Tier */}
                    <div className="relative p-10 rounded-3xl bg-gradient-to-b from-red-950/30 to-black border border-red-500/30 hover:border-red-500/50 transition-all shadow-[0_0_50px_-20px_rgba(220,38,38,0.3)] group">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                            Most Popular
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">Dominion</h3>
                        <div className="text-4xl font-black text-white mb-6">$0<span className="text-lg font-medium text-gray-500"> (Beta Access)</span></div>
                        <p className="text-gray-400 mb-8 h-12">Uncapped access to the world's most powerful copywriting engine.</p>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle2 className="h-5 w-5 text-red-500" />
                                <span><strong>Unlimited</strong> Generations</span>
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle2 className="h-5 w-5 text-red-500" />
                                <span><strong>Masterclass</strong> Access (The "Why")</span>
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle2 className="h-5 w-5 text-red-500" />
                                <span>Priority Processing Speed</span>
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle2 className="h-5 w-5 text-red-500" />
                                <span>Early Access to New Models</span>
                            </li>
                        </ul>

                        {/* <StripeButton priceId={process.env.NEXT_PUBLIC_STRIPE_PRICE_ID!} className="w-full h-14 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg shadow-red-900/20 transition-all hover:scale-[1.02]">
                            Upgrade to Pro
                        </StripeButton> */}
                        <Link href="/create">
                            <Button className="w-full h-14 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg shadow-red-900/20 transition-all hover:scale-[1.02]">
                                Get Beta Access
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
