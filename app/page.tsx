"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, ChevronRight, Target, Brain, Zap, Lock, BarChart3, Search, PenTool, GraduationCap, BookOpen, Users, Trophy, Play, X, Check, Gauge, Layers, Sparkles, AlertTriangle, TrendingUp, Shield, Code2, Lightbulb, FileText, Eye } from "lucide-react"
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
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-white transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('teaching')} className="hover:text-white transition-colors">Learning</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Pricing</button>
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
            THEY LAUGHED WHEN I SAID <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-800">AI COULD TEACH COPYWRITING...</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white max-w-4xl mx-auto leading-tight"
          >
            Until They Saw My Conversion Rates.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed pt-4"
          >
            The only AI that doesn't just write copy—it <span className="text-white font-bold">turns you into a master copywriter</span>. Every word. Every trigger. Every framework. Explained.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Link href="/create">
              <Button className="h-16 px-10 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-xl transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Start Creating & Learning <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <button onClick={() => scrollToSection('how-it-works')} className="h-16 px-10 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium text-lg transition-all flex items-center gap-2">
              <Play className="h-5 w-5" /> See It In Action
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500"
          >
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
              <span>Learn While You Write</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: THE PROBLEM */}
      <section id="problem" className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-900/20 border border-yellow-500/20 text-yellow-400 text-sm font-mono mb-6">
              <AlertTriangle className="h-4 w-4" />
              <span>THE CRISIS</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.95] mb-8">
              THE "PROMPT & PRAY" <br />
              <span className="text-gray-700">ERA IS OVER.</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Most people treat AI like a slot machine. They type a vague prompt, hit enter, and hope for a miracle. The result? Generic, soulless copy that screams "I used ChatGPT."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="h-16 w-16 rounded-full bg-red-900/20 flex items-center justify-center mx-auto mb-4">
                <X className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Zero Understanding</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                You get copy. But you have no idea <em>why</em> it was written that way. You're still just guessing.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="h-16 w-16 rounded-full bg-red-900/20 flex items-center justify-center mx-auto mb-4">
                <X className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Generic Output</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                It's lifeless. No urgency. No emotional hooks. Just safe, boring words that convert nothing.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="h-16 w-16 rounded-full bg-red-900/20 flex items-center justify-center mx-auto mb-4">
                <X className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">No Growth</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                You're not learning. You're dependent. Every new project is back to square one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE SOLUTION - HOW IT WORKS */}
      <section id="how-it-works" className="py-32 bg-black/50 border-t border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/10 border border-red-500/20 text-red-500 text-xs font-mono mb-6 animate-pulse">
              <Gauge className="h-4 w-4" />
              <span>ENGINE STATUS: ONLINE</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
              HOW VERBLYNX <br />
              <span className="text-red-600">ACTUALLY WORKS.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We execute a 3-phase military-grade operation for every piece of copy. Here's the full breakdown.
            </p>
          </div>

          <div className="space-y-32 max-w-6xl mx-auto">

            {/* Phase 1: Strategic Inference */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/20 text-red-400 text-xs font-bold border border-red-500/20">
                  <Brain className="h-3 w-3" /> PHASE 01
                </div>
                <h3 className="text-4xl font-bold text-white">Strategic Inference</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Before writing a single word, our engine analyzes your input to construct a complete <strong>Psychological Profile</strong> of your target market.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                      <Search className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">Awareness Mapping</div>
                      <div className="text-sm text-gray-400">We determine if your audience is Unaware, Problem-Aware, Solution-Aware, Product-Aware, or Most Aware. This dictates everything.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Target className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">Desire Isolation</div>
                      <div className="text-sm text-gray-400">We pinpoint the core emotional driver (Status, Safety, Freedom, Greed) that will move them to action.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                      <Shield className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">Objection Detection</div>
                      <div className="text-sm text-gray-400">We identify the #1 reason they WON'T buy, then strategically disarm it in the copy.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 bg-gray-900 rounded-3xl border border-white/10 p-8 h-[500px] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="relative z-10 space-y-4">
                  <div className="p-4 bg-black/80 border border-white/10 rounded-xl backdrop-blur-md">
                    <div className="text-xs text-gray-500 mb-2 font-mono">&gt; YOUR INPUT</div>
                    <div className="text-white font-mono text-sm">"Sell CRM software to small marketing agencies"</div>
                  </div>
                  <div className="flex justify-center"><ArrowRight className="rotate-90 text-red-500" /></div>
                  <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-xl backdrop-blur-md">
                    <div className="text-xs text-red-400 mb-2 font-mono">&gt; ENGINE INFERENCE</div>
                    <div className="text-white font-mono text-xs space-y-1">
                      <div>• Pain: Chaos / Too many tools</div>
                      <div>• Desire: Scale / Freedom</div>
                      <div>• Objection: "Yet another software?"</div>
                      <div>• Framework: PAS (Problem-Agitate-Solution)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2: Generative Assembly */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-gray-900 rounded-3xl border border-white/10 p-8 h-[500px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="relative z-10 w-full max-w-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-900/30 border-2 border-blue-500 rounded-xl text-center shadow-lg shadow-blue-900/20">
                      <div className="text-2xl font-black text-white">PAS</div>
                      <div className="text-xs text-blue-300 mt-1">SELECTED</div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center opacity-30">
                      <div className="text-2xl font-black text-gray-400">AIDA</div>
                      <div className="text-xs text-gray-500 mt-1">Alternative</div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center opacity-30">
                      <div className="text-2xl font-black text-gray-400">BAB</div>
                      <div className="text-xs text-gray-500 mt-1">Alternative</div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center opacity-30">
                      <div className="text-2xl font-black text-gray-400">SLAP</div>
                      <div className="text-xs text-gray-500 mt-1">Alternative</div>
                    </div>
                  </div>
                  <div className="mt-6 p-3 bg-green-900/20 border border-green-500/30 rounded-xl text-center">
                    <div className="text-xs text-green-400 font-mono">✓ Framework Optimized</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 text-blue-400 text-xs font-bold border border-blue-500/20">
                  <Code2 className="h-3 w-3" /> PHASE 02
                </div>
                <h3 className="text-4xl font-bold text-white">Generative Assembly</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We don't guess the structure. The engine selects the optimal <strong>Copywriting Framework</strong> based on the psychological profile from Phase 1.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Layers className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">Framework Selection</div>
                      <div className="text-sm text-gray-400">PAS for problem-aware. AIDA for unaware. BAB for transformation stories. The engine knows.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                      <PenTool className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">Tone Calibration</div>
                      <div className="text-sm text-gray-400">Adjusts voice from Authoritative to Empathetic based on your brand and audience needs.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="h-10 w-10 rounded-lg bg-yellow-500/20 flex items-center justify-center shrink-0">
                      <Lightbulb className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">Mechanism Highlighting</div>
                      <div className="text-sm text-gray-400">We identify and emphasize your product's "Unique Mechanism"—the secret sauce that makes it different.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3: Critique Loop */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/20 text-green-400 text-xs font-bold border border-green-500/20">
                  <Zap className="h-3 w-3" /> PHASE 03
                </div>
                <h3 className="text-4xl font-bold text-white">The Critique Loop</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Most AI stops at the first draft. Verblynx doesn't. The <strong>Critique Loop</strong> self-audits the copy against 50+ elite writing standards before you ever see it.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">The "So What?" Test</div>
                      <div className="text-sm text-gray-400">Every sentence must earn its keep. If it doesn't add value, it gets cut. No filler.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">The "Bar Stool" Test</div>
                      <div className="text-sm text-gray-400">Does it sound likeone human talking to another? Or corporate jargon? We rewrite until it's human.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">The "Specifics" Check</div>
                      <div className="text-sm text-gray-400">Replace vague claims ("save time") with concrete numbers ("save 20 hours/week"). Specificity sells.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 bg-gray-900 rounded-3xl border border-white/10 p-8 h-[500px] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="relative z-10 space-y-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl opacity-50 line-through decoration-red-500/50">
                    <div className="text-xs text-gray-500 mb-2 font-mono">&gt; DRAFT 1</div>
                    <div className="text-gray-400 font-mono text-sm">"Our CRM helps you save time and be more efficient with your workflow."</div>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <ArrowRight className="rotate-90 text-yellow-500" />
                    <span className="text-xs text-yellow-500 font-mono">CRITIQUE ACTIVE</span>
                  </div>
                  <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-xl shadow-lg shadow-green-900/20">
                    <div className="text-xs text-green-400 mb-2 font-mono">&gt; FINAL OUTPUT</div>
                    <div className="text-white font-mono text-sm">"Stop drowning in spreadsheets. Automate your client management and reclaim 20 hours every week."</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: THE TEACHING (GLASS BOX) */}
      <section id="teaching" className="py-32 bg-black border-t border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-mono">
                <GraduationCap className="h-4 w-4" />
                <span>THE GLASS BOX PHILOSOPHY</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-tight">
                DON'T JUST GET COPY. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">BECOME A MASTER.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Most AI tools are "Black Boxes." You put a prompt in, text comes out. You learn <strong className="text-white">nothing</strong>.
                </p>
                <p>
                  Verblynx is a <strong className="text-white">Glass Box</strong>. Every time it generates copy, it gives you a complete <strong className="text-white">Masterclass Breakdown</strong> explaining exactly <em>why</em> it wrote what it wrote.
                </p>
                <p>
                  This isn't just convenient. It's <strong className="text-white">transformative</strong>. You're not just getting copy—you're building a strategic mental library that makes you a better marketer forever.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-purple-900/10 border border-purple-500/20 text-center">
                  <Brain className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-sm font-bold text-white">Psychology</div>
                  <div className="text-xs text-gray-400 mt-1">Learn the triggers</div>
                </div>
                <div className="p-4 rounded-2xl bg-blue-900/10 border border-blue-500/20 text-center">
                  <Layers className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-sm font-bold text-white">Structure</div>
                  <div className="text-xs text-gray-400 mt-1">See the framework</div>
                </div>
                <div className="p-4 rounded-2xl bg-yellow-900/10 border border-yellow-500/20 text-center">
                  <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-sm font-bold text-white">Power Words</div>
                  <div className="text-xs text-gray-400 mt-1">Decode language</div>
                </div>
              </div>
            </div>

            <div className="relative h-[700px] bg-gray-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

              {/* Terminal-style header */}
              <div className="relative z-10 border-b border-white/10 bg-black/80 backdrop-blur-xl px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/50" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                    <div className="h-3 w-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="ml-3 text-xs font-mono text-gray-400">MASTERCLASS_ANALYSIS.log</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 space-y-4 overflow-y-auto max-h-[600px]">
                <div className="p-4 rounded-xl bg-purple-900/10 border border-purple-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="h-4 w-4 text-purple-400" />
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Psychology Breakdown</span>
                  </div>
                  <p className="text-sm text-purple-100 leading-relaxed">
                    <strong>Loss Aversion Trigger:</strong> We used the phrase "Stop drowning" instead of "Save time." Why? Menschen fight 2x harder to avoid loss than to gain something. "Drowning" creates urgency.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-900/10 border border-blue-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="h-4 w-4 text-blue-400" />
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Structural Analysis</span>
                  </div>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    <strong>PAS Framework:</strong> Sentence 1 identifies the Problem (drowning). Sentence 2 presents the Solution (automate). The structure creates a natural "before/after" narrative in the reader's mind.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-yellow-900/10 border border-yellow-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Power Word Analysis</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-yellow-100"><strong>"Drowning"</strong> - Visceral, creates mental image of struggle</p>
                    <p className="text-sm text-yellow-100"><strong>"Reclaim"</strong> - Implies ownership was stolen, adding emotion</p>
                    <p className="text-sm text-yellow-100"><strong>"20 hours"</strong> - Specific number beats vague "save time"</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-green-900/10 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Eye className="h-4 w-4 text-green-400" />
                    <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Critique Notes</span>
                  </div>
                  <p className="text-sm text-green-100 leading-relaxed">
                    Original draft said "be more efficient"—too vague. Replaced with concrete "20 hours/week." This passes the "Specifics Check" and makes the benefit tangible and believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: COMPARISON (BEFORE/AFTER) */}
      <section className="py-32 bg-black/50 border-t border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">The Difference Is Brutal.</h2>
            <p className="text-xl text-gray-400">Don't settle for "ChatGPT generic." Demand elite.</p>
          </div>

          <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl border border-white/10 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Standard AI */}
              <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 bg-black/50">
                <div className="flex items-center gap-3 mb-6 opacity-50">
                  <X className="h-6 w-6 text-red-500" />
                  <h3 className="text-xl font-bold text-gray-400">Standard AI</h3>
                </div>
                <div className="space-y-4 text-gray-500 font-mono text-sm leading-relaxed p-4 bg-white/5 rounded-xl">
                  <p>"Unlock your potential with our new software solution. It is very good and helps you save time and increase productivity. We have many features that are great for modern businesses. Try it today and see amazing results for yourself."</p>
                  <p className="text-xs italic opacity-50">— Vague. Boring. Generic. Converts nobody.</p>
                </div>
              </div>

              {/* Verblynx */}
              <div className="p-10 bg-gradient-to-br from-red-900/10 to-black relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase rounded-bl-2xl">
                  Verblynx Output
                </div>
                <div className="flex items-center gap-3 mb-6 mt-8">
                  <Check className="h-6 w-6 text-green-500" />
                  <h3 className="text-xl font-bold text-white">The Engine</h3>
                </div>
                <div className="space-y-4 text-gray-200 font-mono text-sm leading-relaxed p-4 bg-white/5 rounded-xl border border-red-500/20">
                  <p>"Stop bleeding revenue to inefficiency. Your team is drowning in chaos—missed deadlines, lost leads, burned-out employees. Our system doesn't just 'manage' tasks. It automates the grunt work completely, giving you back 30 hours a week to focus on what actually prints money: Closing deals."</p>
                  <p className="text-xs text-red-400 font-bold">— Visceral. Specific. Problem-focused. Built to sell.</p>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Choose Your Path.</h2>
            <p className="text-xl text-gray-400">Start learning for free. Unlock unlimited power when you're ready.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="p-10 rounded-3xl relative overflow-hidden border border-white/10 hover:border-white/30 transition-colors bg-white/5">
              <h3 className="text-2xl font-bold text-white mb-2">Initiate</h3>
              <div className="text-5xl font-black text-white mb-2">$0</div>
              <div className="text-sm text-gray-500 mb-8">Forever free. No credit card required.</div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Perfect for testing the system and learning the fundamentals of strategic copywriting.
              </p>

              <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">What's Included:</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                    <span><strong className="text-white">3 Copy Generations Per Day</strong> — Test the engine risk-free</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Basic Masterclass Breakdowns</strong> — Learn psychology & structure</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Access to Core Frameworks</strong> — PAS, AIDA, BAB</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                    <span>Standard processing speed</span>
                  </li>
                </ul>
              </div>

              <Link href="/signup">
                <Button variant="outline" className="w-full h-14 rounded-full border-white/20 hover:bg-white hover:text-black transition-all font-bold text-lg">
                  Start Learning Free
                </Button>
              </Link>
            </div>

            {/* Pro Tier */}
            <div className="p-10 rounded-3xl relative overflow-hidden border-2 border-red-500/50 bg-gradient-to-br from-red-900/10 to-black shadow-2xl shadow-red-900/20">
              <div className="absolute top-0 right-0 px-6 py-3 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-bl-3xl">
                Most Popular
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 mt-8">Dominion</h3>
              <div className="flex items-baseline gap-3 mb-2">
                <div className="text-5xl font-black text-white">$0</div>
                <div className="text-2xl font-medium text-gray-500 line-through">$49</div>
              </div>
              <div className="text-sm text-red-400 mb-8 font-bold">Limited Beta Access • Locking in $0/mo forever</div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                For professionals who demand unlimited power, deep psychological insights, and mastery-level education.
              </p>

              <div className="mb-8 p-4 rounded-xl bg-red-900/10 border border-red-500/30">
                <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-3">Everything in Initiate, plus:</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Unlimited Generations</strong> — No daily limits. Ever.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Deep Dive Psychological Breakdowns</strong> — Learn sophist tactics</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Priority Inference Engine</strong> — Powered by Gemini 1.5 Pro</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Advanced Framework Access</strong> — QUEST, 4Ps, SLAP, and more</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Live Editor with AI Chat</strong> — Refine copy in real-time</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>

              <Link href="/signup">
                <Button className="w-full h-14 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg shadow-[0_0_40px_-5px_rgba(220,38,38,0.5)] transition-all hover:scale-105">
                  Lock In Beta Access
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section className="py-32 bg-black/50 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Questions. Answered.</h2>
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Is this just another ChatGPT wrapper?</h3>
              <p className="text-gray-400 leading-relaxed">
                No. While we use advanced LLMs (Gemini 1.5 Pro), Verblynx has a proprietary 3-phase "Inference-First" architecture. We force the AI through a rigid strategic protocol (Awareness Mapping, Framework Selection, Critique Loop) before generating a single word. This isn't prompt engineering—it's copywriting engineering.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">What makes the "teaching" part different?</h3>
              <p className="text-gray-400 leading-relaxed">
                Every piece of copy comes with a complete Masterclass Breakdown explaining the psychology (why it works), structure (what framework was used), and power words (the specific language choices). You're not just getting output—you're getting an education that compounds over time.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Can I use this for [cold email / landing pages / ads]?</h3>
              <p className="text-gray-400 leading-relaxed">
                Yes. The engine is specifically tuned for direct response scenarios including cold email, landing pages, ad creatives, sales pages, and email sequences. It understands pattern interrupts, hooks, and objection handling across all these formats.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">What if I don't like the generated copy?</h3>
              <p className="text-gray-400 leading-relaxed">
                You have multiple options: (1) Use the "Regenerate" function to try a different angle, (2) Open the Live Editor and chat with the AI to refine specific sections, or (3) Use the breakdown to understand what to tweak manually. The teaching aspect ensures you're never stuck.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Is my data safe?</h3>
              <p className="text-gray-400 leading-relaxed">
                Yes. All data is encrypted in transit and at rest. We do not train our models on your proprietary information, and you retain full ownership of everything you create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gradient-to-b from-black to-red-950/10 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">
              READY TO MASTER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">PERSUASION?</span>
            </h2>
            <p className="text-2xl text-gray-400">
              Join thousands learning to write copy that actually converts while mastering the psychology behind every word.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Link href="/create">
                <Button className="h-16 px-12 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-xl transition-all hover:scale-105 shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)]">
                  Start Creating Now <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500 pt-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-red-500" />
                <span>Free Forever Tier</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-red-500" />
                <span>No Credit Card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-red-500" />
                <span>Start Learning in 60 Seconds</span>
              </div>
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
