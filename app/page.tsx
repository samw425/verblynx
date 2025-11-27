"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Shield, CheckCircle2, Play, Lock, ChevronRight, Star } from "lucide-react"
import { NoTalkJustWalkSection } from "@/components/landing/no-talk-just-walk"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden font-sans selection:bg-red-500/30">

      {/* Hero Section - Aether Style */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">

        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[100px] animate-blob mix-blend-screen" />
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
        </div>

        <div className="z-10 max-w-5xl mx-auto text-center relative space-y-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300 tracking-wide">SYSTEM V3.0 ONLINE</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
              Architect Your
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-800">
              Revenue Engine.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Verblynx is the elite copywriting system for founders who demand precision.
            Stop guessing. Start commanding.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/create">
              <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
                Initialize System <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#proof">
              <Button variant="ghost" className="h-14 px-8 rounded-full text-gray-400 hover:text-white hover:bg-white/5 border border-white/10 text-lg">
                View Proof
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="pt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Powering Elite Founders</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 text-red-500 fill-red-500" />
              ))}
            </div>
          </div>
        </div>
      </section>

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
                Standard models guess. <strong className="text-white">Verblynx calculates.</strong>
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
            <div className="glass-card p-8 rounded-3xl">
              <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
                <Sparkles className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tone Calibration</h3>
              <p className="text-gray-400 leading-relaxed">
                Dial in the exact emotional resonance. From "Authoritative & Direct" to "Empathetic & Warm", you control the voice of your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF SECTION */}
      <div id="proof">
        <NoTalkJustWalkSection />
      </div>

      {/* Pricing Section - Aether Style */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Select Your Protocol</h2>
            <p className="text-xl text-gray-400">Join the elite. Scale your output.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="glass-card p-10 rounded-3xl relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-2">Initiate</h3>
              <div className="text-4xl font-black text-white mb-6">$0</div>
              <p className="text-gray-400 mb-8">Essential tools for early-stage validation.</p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-gray-500" />
                  <span>3 Daily Generations</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-gray-500" />
                  <span>Standard Processing</span>
                </li>
              </ul>

              <Link href="/create">
                <Button variant="outline" className="w-full h-14 rounded-full border-white/10 hover:bg-white hover:text-black transition-all">
                  Start Free
                </Button>
              </Link>
            </div>

            {/* Pro Tier (Beta) */}
            <div className="glass-card p-10 rounded-3xl relative overflow-hidden border-red-500/30 bg-red-900/5">
              <div className="absolute top-0 right-0 px-6 py-2 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-bl-2xl">
                Beta Access
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Dominion</h3>
              <div className="text-4xl font-black text-white mb-6">$0 <span className="text-lg font-medium text-gray-500 line-through">$49</span></div>
              <p className="text-gray-400 mb-8">Unrestricted access for power users.</p>

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
              </ul>

              <Link href="/create">
                <Button className="w-full h-14 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold shadow-[0_0_30px_-5px_rgba(220,38,38,0.4)] transition-all hover:scale-105">
                  Get Full Access
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-xl text-center">
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
