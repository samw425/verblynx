"use client"

import Link from "next/link"
import StripeButton from "@/components/ui/StripeButton";
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Shield, CheckCircle2, ArrowUpRight, Settings, Play, Lock } from "lucide-react"
import { NoTalkJustWalkSection } from "@/components/landing/no-talk-just-walk"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden font-sans selection:bg-red-500/30">

      {/* Hero Section - ELITE AESTHETIC */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">

        {/* Dynamic Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-600/20 rounded-full blur-[120px] opacity-50 animate-pulse mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] pointer-events-none mix-blend-overlay" />

        <div className="z-10 max-w-6xl mx-auto text-center relative space-y-12">

          {/* Elite Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium backdrop-blur-xl shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="text-white font-bold tracking-wide">VERBLYNX</span>
            <span className="text-gray-600">×</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent font-bold">GEMINI 3</span>
            </div>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400 uppercase tracking-wider text-xs">System Active</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 drop-shadow-2xl">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">DON'T WRITE.</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-800">COMMAND.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 font-light leading-relaxed">
            Verblynx transforms raw intent into <strong className="text-white font-medium">revenue-generating assets.</strong> No guessing. No drafting. Just pure conversion.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Link
              href="/create"
              className="inline-flex items-center justify-center h-16 px-10 rounded-full text-lg font-bold bg-white text-black hover:bg-gray-200 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105"
            >
              Start Engineering <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="#proof"
              className="inline-flex items-center justify-center h-16 px-10 rounded-full text-lg font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
            >
              <Play className="mr-2 h-4 w-4 fill-current" /> See The Proof
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Trusted by founders at</p>
            {/* Add logos here later */}
          </div>
        </div>
      </section>

      {/* PROOF SECTION */}
      <div id="proof">
        <NoTalkJustWalkSection />
      </div>

      {/* THE PHILOSOPHY */}
      <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                NOT JUST <br />
                <span className="text-red-600">ANOTHER LLM.</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                ChatGPT guesses. <strong className="text-white">Verblynx calculates.</strong>
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                We built a proprietary "Strategic Inference Layer" that sits between you and the AI. It forces a professional workflow—Objective, Audience, Tone—before a single word is generated. The result? Copy that converts, not just copy that reads well.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">10x</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Conversion Lift</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">0%</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Hallucination</div>
                </div>
              </div>
            </div>

            {/* Visual Representation */}
            <div className="relative h-[600px] bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 overflow-hidden shadow-2xl p-8 flex flex-col justify-between group hover:border-red-500/30 transition-colors duration-500">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

              {/* Floating Cards Animation */}
              <div className="space-y-4 relative z-10">
                <div className="p-4 rounded-xl bg-red-900/20 border border-red-500/30 text-red-200 text-sm font-mono animate-pulse">
                  &gt; Analyzing Audience Psychology...
                </div>
                <div className="p-4 rounded-xl bg-blue-900/20 border border-blue-500/30 text-blue-200 text-sm font-mono delay-150">
                  &gt; Identifying Pain Points...
                </div>
                <div className="p-4 rounded-xl bg-green-900/20 border border-green-500/30 text-green-200 text-sm font-mono delay-300">
                  &gt; Optimizing for Conversion...
                </div>
              </div>

              <div className="mt-auto">
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-purple-500 w-full animate-[shimmer_2s_infinite]" />
                </div>
                <p className="text-xs text-gray-500 mt-3 font-mono text-right">SYSTEM ACTIVE // V.3.0.1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-32 bg-black border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">ACCESS THE SYSTEM</h2>
            <p className="text-xl text-gray-400">Professional tools for professional results.</p>
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
              <div className="text-4xl font-black text-white mb-6">$19<span className="text-lg font-medium text-gray-500">/mo</span></div>
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
              </ul>

              <StripeButton priceId={process.env.NEXT_PUBLIC_STRIPE_PRICE_ID!} className="w-full h-14 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg shadow-red-900/20 transition-all hover:scale-[1.02]">
                Upgrade to Pro
              </StripeButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
            <Lock className="h-4 w-4" />
            <span className="text-sm font-mono">SECURE SYSTEM // ENCRYPTED</span>
          </div>
          <p className="text-xs text-gray-600">© 2026 Verblynx Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
