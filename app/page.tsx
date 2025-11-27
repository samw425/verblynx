"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Shield, CheckCircle2, Play, Lock, ChevronRight, Star, Target, Brain, Gauge, BookOpen, GraduationCap, Layers, X, Check, Cpu, Globe, Users, BarChart, Terminal, Code2, Fingerprint } from "lucide-react"
import { NoTalkJustWalkSection } from "@/components/landing/no-talk-just-walk"
import { useState } from "react"
import { motion } from "framer-motion"

export default function LandingPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden font-sans selection:bg-red-500/30">

      {/* Navbar - Sticky Glass */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto bg-black/40 backdrop-blur-2xl border border-white/5 rounded-full px-8 py-4 flex items-center justify-between shadow-2xl shadow-black/50">
          <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <img src="/verblynx-icon.png" alt="Verblynx Icon" className="h-10 w-10 rounded-xl" />
            <span className="text-2xl font-black tracking-tighter text-white">VERBLYNX</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <button onClick={() => scrollToSection('problem')} className="hover:text-white transition-colors">The Problem</button>
            <button onClick={() => scrollToSection('engine')} className="hover:text-white transition-colors">The Engine</button>
            <button onClick={() => scrollToSection('protocol')} className="hover:text-white transition-colors">The Protocol</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Access</button>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-400 hover:text-white hidden sm:block">Login</Link>
            <Link href="/create">
              <Button size="sm" className="rounded-full bg-white text-black hover:bg-gray-200 font-bold">
                Get Access
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION: The Neural Persuasion Engine */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>

        <div className="z-10 max-w-6xl mx-auto text-center relative space-y-10">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-4 animate-slide-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            SYSTEM ONLINE // V3.0.1
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9] animate-slide-up">
            THE WORLD'S FIRST <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-800">NEURAL PERSUASION ENGINE.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Stop writing. Start engineering. Verblynx deconstructs the psychology of your market and reconstructs it into copy that <span className="text-white font-bold">prints money.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/create">
              <Button className="h-16 px-10 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-xl transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Initialize System <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <button onClick={() => scrollToSection('protocol')} className="h-16 px-10 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium text-lg transition-all flex items-center gap-2">
              View The Protocol
            </button>
          </div>

          <div className="pt-12 flex items-center justify-center gap-8 text-sm text-gray-500 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-red-500" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-red-500" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-red-500" />
              <span>Elite Models Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE PROBLEM (YOU ARE GUESSING) */}
      <section id="problem" className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                YOU ARE <br />
                <span className="text-gray-700">GUESSING.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed border-l-2 border-red-900/50 pl-6">
                <p>
                  Most copywriters throw spaghetti at the wall. They rely on "creativity", "vibes", and "inspiration".
                </p>
                <p>
                  That is not a strategy. <strong className="text-white">That is gambling.</strong>
                </p>
                <p>
                  In a data-driven world, relying on gut instinct is a death sentence. Your competitors are using algorithms. You are using a typewriter.
                </p>
              </div>
            </div>

            {/* Visual: Chaos vs Order */}
            <div className="relative h-[500px] bg-gray-900/50 rounded-3xl border border-white/10 overflow-hidden p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

              {/* Chaos Side */}
              <div className="absolute top-10 left-10 p-6 bg-red-900/10 border border-red-500/20 rounded-xl rotate-[-6deg] w-64 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2 text-red-400 text-xs font-mono">
                  <X className="h-4 w-4" /> HUMAN_ERROR
                </div>
                <div className="text-gray-400 text-sm line-through decoration-red-500/50">
                  "Maybe we should try something funny? Idk, just write whatever sounds cool."
                </div>
              </div>

              {/* Order Side */}
              <div className="absolute bottom-10 right-10 p-6 bg-green-900/10 border border-green-500/20 rounded-xl rotate-[3deg] w-64 backdrop-blur-sm shadow-2xl shadow-green-900/20">
                <div className="flex items-center gap-2 mb-2 text-green-400 text-xs font-mono">
                  <Check className="h-4 w-4" /> SYSTEM_OPTIMIZED
                </div>
                <div className="text-white text-sm font-medium">
                  "Framework: PAS. Tone: Authoritative. Outcome: Validated."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE SOLUTION (WE CALCULATE) */}
      <section id="engine" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
              WE DON'T GUESS. <br />
              <span className="text-red-600">WE CALCULATE.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Verblynx treats persuasion as a science. It uses a 3-stage neural architecture to ensure every word earns its keep.
            </p>
          </div>

          {/* The Architecture Visualization */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

            {/* Node 1 */}
            <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-6 text-red-500">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Inference Node</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We don't just ask for a prompt. We scrape the "mental data" of your avatar. We determine their Awareness Level, Sophistication, and Core Desires before writing a single word.
                </p>
              </div>
            </div>

            {/* Node 2 */}
            <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-500">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Generative Matrix</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The engine selects the optimal psychological framework (PAS, AIDA, SLAP) based on the inference data. It constructs the copy block by block, optimizing for rhythm and impact.
                </p>
              </div>
            </div>

            {/* Node 3 */}
            <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-6 text-green-500">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Critique Loop</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Most AI stops at the draft. Verblynx doesn't. It self-audits against 50+ "Elite Standards" (Specificity, Visceral Language, Formatting) and rewrites the copy until it's perfect.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THE PROTOCOL (DEEP DIVE) */}
      <section id="protocol" className="py-32 bg-black/50 border-t border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] bg-gray-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md space-y-4 p-8">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md">
                    <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-xs font-bold">1</div>
                    <div className="text-sm text-gray-300">Analyzing Audience: <span className="text-white font-bold">SaaS Founders</span></div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md ml-8">
                    <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-xs font-bold">2</div>
                    <div className="text-sm text-gray-300">Detected Pain: <span className="text-white font-bold">Churn Rate</span></div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md ml-16">
                    <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-xs font-bold">3</div>
                    <div className="text-sm text-gray-300">Framework Selected: <span className="text-white font-bold">PAS (Problem-Agitation-Solution)</span></div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-green-900/20 border border-green-500/30 backdrop-blur-md ml-24">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold"><Check className="h-4 w-4" /></div>
                    <div className="text-sm text-green-300">Output Generated.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-red-400 text-sm font-mono">
                <Target className="h-4 w-4" />
                <span>OPERATIONAL DOCTRINE</span>
              </div>
              <h2 className="text-5xl font-black tracking-tighter text-white">
                PRECISION IS <br />
                NOT OPTIONAL.
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                The Verblynx Protocol is a rigid, 4-step methodology designed to eliminate variance. We don't rely on "good days". We rely on a system that works every single time.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Deep Reconnaissance</h4>
                    <p className="text-gray-500 text-sm">We map the entire psychological landscape of your prospect before writing.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Strategic Assembly</h4>
                    <p className="text-gray-500 text-sm">We assemble the copy using proven, high-converting blocks.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">The Masterclass Breakdown</h4>
                    <p className="text-gray-500 text-sm">We explain exactly WHY the copy works, training you to become a master.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPARISON (BEFORE VS AFTER) */}
      <section className="py-32 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">See The Difference.</h2>
            <p className="text-xl text-gray-400">Don't settle for "ChatGPT generic". Demand elite.</p>
          </div>

          <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl border border-white/10 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* The Old Way */}
              <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 bg-black/50">
                <div className="flex items-center gap-3 mb-6 opacity-50">
                  <X className="h-6 w-6 text-red-500" />
                  <h3 className="text-xl font-bold text-gray-400">Standard AI</h3>
                </div>
                <div className="space-y-4 text-gray-500 font-mono text-sm leading-relaxed">
                  <p>"Unlock your potential with our new software. It is very good and helps you save time. We have many features that are great for business. Try it today and see the results for yourself."</p>
                  <p className="text-xs italic opacity-50">- Vague, boring, feature-focused.</p>
                </div>
              </div>

              {/* The Verblynx Way */}
              <div className="p-10 bg-gradient-to-br from-red-900/10 to-black relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 bg-red-600 text-white text-xs font-bold uppercase">
                  Verblynx Optimized
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <Check className="h-6 w-6 text-green-500" />
                  <h3 className="text-xl font-bold text-white">The Engine</h3>
                </div>
                <div className="space-y-4 text-gray-200 font-mono text-sm leading-relaxed">
                  <p>"Stop burning cash on ads that don't convert. Our software isn't just a tool; it's a revenue engine. We automate the grunt work so you can focus on what actually matters: Closing deals."</p>
                  <p className="text-xs text-red-400 font-bold">- Visceral, benefit-driven, authoritative.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MISSION */}
      <section className="py-32 bg-black/50 border-t border-white/5">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <Globe className="h-12 w-12 text-gray-700 mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">
            DEMOCRATIZING <br />
            <span className="text-white">ELITE INFLUENCE.</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-12">
            We believe that world-class persuasion shouldn't be locked behind $50k/month agencies. We are putting the power of a master strategist in your pocket. Whether you are a solo founder or a Fortune 500 executive, Verblynx gives you the unfair advantage.
          </p>
        </div>
      </section>

      {/* SECTION 6: PRICING */}
      <section id="pricing" className="py-32 relative overflow-hidden bg-black border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Weapon.</h2>
            <p className="text-xl text-gray-400">Start for free. Scale when you're ready to dominate.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="glass-card p-10 rounded-3xl relative overflow-hidden border border-white/10 hover:border-white/30 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">Initiate</h3>
              <div className="text-4xl font-black text-white mb-6">$0 <span className="text-sm font-medium text-gray-500">/ forever</span></div>
              <p className="text-gray-400 mb-8">For the curious. Validate your ideas without risk.</p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-gray-500" />
                  <span>3 Daily Generations</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-gray-500" />
                  <span>Basic "Why It Works" Analysis</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-gray-500" />
                  <span>Standard Processing Speed</span>
                </li>
              </ul>

              <Link href="/signup">
                <Button variant="outline" className="w-full h-14 rounded-full border-white/10 hover:bg-white hover:text-black transition-all font-bold">
                  Start Free Mission
                </Button>
              </Link>
            </div>

            {/* Pro Tier (Beta) */}
            <div className="glass-card p-10 rounded-3xl relative overflow-hidden border-red-500/50 bg-red-900/5 hover:bg-red-900/10 transition-colors">
              <div className="absolute top-0 right-0 px-6 py-2 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-bl-2xl">
                Most Popular
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Dominion</h3>
              <div className="text-4xl font-black text-white mb-6">$0 <span className="text-lg font-medium text-gray-500 line-through">$49</span> <span className="text-sm font-medium text-red-400">/ beta access</span></div>
              <p className="text-gray-400 mb-8">For the conquerors. Unlimited power and precision.</p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-5 w-5 text-red-500" />
                  <span><strong>Unlimited</strong> Generations</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-5 w-5 text-red-500" />
                  <span><strong>Deep Dive</strong> Psychological Breakdowns</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-5 w-5 text-red-500" />
                  <span><strong>Priority</strong> Inference Engine (Gemini Pro)</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-5 w-5 text-red-500" />
                  <span>Advanced Tone Control</span>
                </li>
              </ul>

              <Link href="/signup">
                <Button className="w-full h-14 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold shadow-[0_0_30px_-5px_rgba(220,38,38,0.4)] transition-all hover:scale-105">
                  Get Full Access
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Operational FAQs</h2>
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-2">Is this just a wrapper for ChatGPT?</h3>
              <p className="text-gray-400">No. While we use advanced LLMs for token generation, Verblynx utilizes a proprietary "Inference-First" architecture. We force the model through a rigid strategic framework before it generates a single word of copy.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-2">Can I use this for cold email?</h3>
              <p className="text-gray-400">Yes. The engine is specifically tuned for direct response scenarios, including cold email, landing pages, and ad creatives. It understands the nuances of "pattern interrupts" and "hooks".</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-2">What if I don't like the result?</h3>
              <p className="text-gray-400">The engine includes a "Regenerate" function that allows you to tweak the temperature and angle. You can also use the built-in editor to manually refine the output with AI assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-xl text-center">
        <div className="container mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="/verblynx-icon.png" alt="Verblynx Icon" className="h-8 w-8 rounded-lg" />
            <span className="text-xl font-black tracking-tighter text-white">VERBLYNX</span>
          </div>

          <div className="flex items-center justify-center gap-2 opacity-50">
            <Lock className="h-4 w-4" />
            <span className="text-sm font-mono">SECURE SYSTEM // ENCRYPTED</span>
          </div>
          <p className="text-xs text-gray-600">© 2026 Verblynx Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
