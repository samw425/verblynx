"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, ChevronRight, Target, Brain, Zap, Lock, BarChart3, Search, PenTool, GraduationCap, X, Check, Globe } from "lucide-react"
import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function LandingPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

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
            <button onClick={() => scrollToSection('methodology')} className="hover:text-white transition-colors">Methodology</button>
            <button onClick={() => scrollToSection('engine')} className="hover:text-white transition-colors">The Engine</button>
            <button onClick={() => scrollToSection('masterclass')} className="hover:text-white transition-colors">Masterclass</button>
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

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>

        <div className="z-10 max-w-6xl mx-auto text-center relative space-y-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            SYSTEM ONLINE // V3.0.1
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9]"
          >
            ENGINEERING THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-800">PERFECT ARGUMENT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Creativity is a myth. Conversion is a formula. Verblynx uses advanced psychological frameworks to construct sales copy that is <span className="text-white font-bold">mathematically designed to sell.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Link href="/create">
              <Button className="h-16 px-10 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-xl transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Initialize System <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <button onClick={() => scrollToSection('engine')} className="h-16 px-10 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium text-lg transition-all flex items-center gap-2">
              See How It Works
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION: THE PROBLEM */}
      <section id="methodology" className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                THE "PROMPT & PRAY" <br />
                <span className="text-gray-700">ERA IS OVER.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed border-l-2 border-red-900/50 pl-6">
                <p>
                  Most people treat AI like a slot machine. They type a vague prompt and hope for a jackpot.
                </p>
                <p>
                  The result? Generic, soulless "ChatGPT slop" that smells like a robot wrote it. It doesn't convert. It doesn't build trust. It just fills space.
                </p>
                <p>
                  <strong className="text-white">You need a sniper, not a shotgun.</strong> You need a system that understands the nuance of human desire.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] bg-gray-900/50 rounded-3xl border border-white/10 overflow-hidden p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

              {/* Chaos Side */}
              <div className="absolute top-10 left-10 p-6 bg-red-900/10 border border-red-500/20 rounded-xl rotate-[-6deg] w-64 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2 text-red-400 text-xs font-mono">
                  <X className="h-4 w-4" /> STANDARD_OUTPUT
                </div>
                <div className="text-gray-400 text-sm italic">
                  "Unlock your potential with our innovative solution designed to streamline your workflow..."
                </div>
              </div>

              {/* Order Side */}
              <div className="absolute bottom-10 right-10 p-6 bg-green-900/10 border border-green-500/20 rounded-xl rotate-[3deg] w-64 backdrop-blur-sm shadow-2xl shadow-green-900/20">
                <div className="flex items-center gap-2 mb-2 text-green-400 text-xs font-mono">
                  <Check className="h-4 w-4" /> VERBLYNX_OUTPUT
                </div>
                <div className="text-white text-sm font-medium">
                  "Stop bleeding revenue. Our system automates the grunt work so you can focus on closing."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE ENGINE (DETAILED BREAKDOWN) */}
      <section id="engine" className="py-32 bg-black relative overflow-hidden" ref={targetRef}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
              THE 3-PHASE <br />
              <span className="text-red-600">PROTOCOL.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We don't just "write". We execute a military-grade strategic operation for every single asset.
            </p>
          </div>

          <div className="space-y-24">

            {/* Phase 1 */}
            <motion.div style={{ opacity, scale }} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/20 text-red-400 text-xs font-bold mb-4 border border-red-500/20">PHASE 01</div>
                <h3 className="text-4xl font-bold text-white mb-4">Strategic Inference</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Before a single word is generated, the Engine scans your input to construct a <strong>Psychological Profile</strong> of your target.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Search className="h-6 w-6 text-red-500 shrink-0" />
                    <div>
                      <strong className="text-white block">Awareness Mapping</strong>
                      <span className="text-gray-500 text-sm">Are they Problem-Aware? Solution-Aware? Unaware? The copy adapts instantly.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="h-6 w-6 text-red-500 shrink-0" />
                    <div>
                      <strong className="text-white block">Desire Isolation</strong>
                      <span className="text-gray-500 text-sm">We pinpoint the "Core Desire" (e.g., Status, Safety, Freedom) to target.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 bg-gray-900 rounded-3xl border border-white/10 p-8 h-[400px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="relative z-10 w-full max-w-sm space-y-3">
                  <div className="p-4 bg-black/80 border border-white/10 rounded-xl backdrop-blur-md">
                    <div className="text-xs text-gray-500 mb-1">INPUT</div>
                    <div className="text-white font-mono text-sm">"Sell CRM to Agency Owners"</div>
                  </div>
                  <div className="flex justify-center"><ArrowRight className="rotate-90 text-gray-600" /></div>
                  <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-xl backdrop-blur-md">
                    <div className="text-xs text-red-400 mb-1">INFERENCE</div>
                    <div className="text-white font-mono text-sm">
                      &gt; Pain: Chaos/Burnout<br />
                      &gt; Desire: Scale/Freedom<br />
                      &gt; Angle: "The Escape Hatch"
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phase 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-900 rounded-3xl border border-white/10 p-8 h-[400px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="relative z-10 w-full max-w-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl text-center">
                      <div className="text-2xl font-black text-white">PAS</div>
                      <div className="text-xs text-blue-300">Problem-Agitation-Solution</div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center opacity-50">
                      <div className="text-2xl font-black text-gray-400">AIDA</div>
                      <div className="text-xs text-gray-500">Attention-Interest-Desire-Action</div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center opacity-50">
                      <div className="text-2xl font-black text-gray-400">BAB</div>
                      <div className="text-xs text-gray-500">Before-After-Bridge</div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center opacity-50">
                      <div className="text-2xl font-black text-gray-400">SLAP</div>
                      <div className="text-xs text-gray-500">Stop-Look-Act-Purchase</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 text-blue-400 text-xs font-bold mb-4 border border-blue-500/20">PHASE 02</div>
                <h3 className="text-4xl font-bold text-white mb-4">Generative Assembly</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  We don't guess the structure. We select the optimal <strong>Framework</strong> based on the inference data.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <PenTool className="h-6 w-6 text-blue-500 shrink-0" />
                    <div>
                      <strong className="text-white block">Framework Selection</strong>
                      <span className="text-gray-500 text-sm">If the prospect is "Problem-Aware", we use PAS. If they are "Unaware", we use a Story Hook.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="h-6 w-6 text-blue-500 shrink-0" />
                    <div>
                      <strong className="text-white block">Tone Calibration</strong>
                      <span className="text-gray-500 text-sm">Adjusts the voice from "Authoritative" to "Empathetic" instantly.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/20 text-green-400 text-xs font-bold mb-4 border border-green-500/20">PHASE 03</div>
                <h3 className="text-4xl font-bold text-white mb-4">The Critique Loop</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Writing is rewriting. The Engine generates a draft, then immediately switches personas to become a ruthless editor.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                    <div>
                      <strong className="text-white block">Jargon Elimination</strong>
                      <span className="text-gray-500 text-sm">It hunts for weak words ("utilize", "leverage", "synergy") and kills them.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart3 className="h-6 w-6 text-green-500 shrink-0" />
                    <div>
                      <strong className="text-white block">Rhythm Optimization</strong>
                      <span className="text-gray-500 text-sm">Ensures the copy has a "slippery slope" cadence that keeps people reading.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 bg-gray-900 rounded-3xl border border-white/10 p-8 h-[400px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="relative z-10 w-full max-w-sm space-y-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl opacity-50 line-through decoration-red-500">
                    <div className="text-xs text-gray-500 mb-1">DRAFT 1</div>
                    <div className="text-gray-400 font-mono text-sm">"Our CRM helps you save time and be more efficient."</div>
                  </div>
                  <div className="flex justify-center"><ArrowRight className="rotate-90 text-green-500" /></div>
                  <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-xl shadow-lg shadow-green-900/20">
                    <div className="text-xs text-green-400 mb-1">FINAL POLISH</div>
                    <div className="text-white font-mono text-sm">"Stop drowning in spreadsheets. Reclaim 20 hours a week."</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: MASTERCLASS (EDUCATION) */}
      <section id="masterclass" className="py-32 bg-black/50 border-t border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-mono">
                <GraduationCap className="h-4 w-4" />
                <span>THE GLASS BOX PHILOSOPHY</span>
              </div>
              <h2 className="text-5xl font-black tracking-tighter text-white">
                DON'T JUST GET COPY. <br />
                <span className="text-gray-500">GET SMARTER.</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Most AI tools are "Black Boxes". You put a prompt in, you get text out. You learn nothing.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                Verblynx is a <strong>Glass Box</strong>. Every time it generates copy, it gives you a <strong>Masterclass Breakdown</strong> explaining exactly <em>why</em> it wrote what it wrote.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">Psychology</div>
                  <div className="text-sm text-gray-400">Learn the triggers behind the words.</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">Structure</div>
                  <div className="text-sm text-gray-400">Understand the framework used.</div>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] bg-gray-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl p-8">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="text-xs font-mono text-gray-400">MASTERCLASS_ANALYSIS_LOG</span>
                </div>
                <div className="p-4 rounded-xl bg-gray-800/50 border border-white/10">
                  <div className="text-xs text-red-400 font-bold mb-1">WHY THIS WORKS:</div>
                  <p className="text-sm text-gray-300">"We used the word 'Bleeding' to create a visceral reaction. This triggers Loss Aversion, which is 2x more powerful than the desire for gain."</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-800/50 border border-white/10">
                  <div className="text-xs text-blue-400 font-bold mb-1">STRUCTURAL NOTE:</div>
                  <p className="text-sm text-gray-300">"The opening sentence is a 'Pattern Interrupt'. It breaks the reader's scrolling habit by making a bold, challenging statement."</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-800/50 border border-white/10">
                  <div className="text-xs text-green-400 font-bold mb-1">POWER WORD CHECK:</div>
                  <p className="text-sm text-gray-300">"Included: 'Drowning', 'Reclaim', 'System'. These words imply high stakes and a mechanical solution."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PRICING */}
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
