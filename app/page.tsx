"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Shield, CheckCircle2, Play, Lock, ChevronRight, Star, Target, Brain, Gauge, BookOpen, GraduationCap, Layers } from "lucide-react"
import { NoTalkJustWalkSection } from "@/components/landing/no-talk-just-walk"

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
            <Link href="/engine" className="hover:text-white transition-colors">The Engine</Link>
            <Link href="/protocol" className="hover:text-white transition-colors">The Protocol</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Access</Link>
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="z-10 max-w-5xl mx-auto text-center relative space-y-10">

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] animate-slide-up">
            The System for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-800">Elite Influence.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Amateurs write. Professionals engineer. Deploy a persuasion protocol that converts cold traffic into obsessed customers.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/create">
              <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
                Initialize System <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <button onClick={() => scrollToSection('engine')} className="text-gray-400 hover:text-white font-medium transition-colors flex items-center gap-2 group">
              <span className="border-b border-transparent group-hover:border-white transition-all">See The Engine</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: THE ENGINE (The End of Guesswork) */}
      <section id="engine" className="py-32 relative border-t border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-[0.9]">
                THE END OF <br />
                <span className="text-red-600">GUESSWORK.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Most tools are "black boxes". You input a prompt, you get text out. You learn nothing. You remain dependent.
                </p>
                <p>
                  Verblynx is a <strong className="text-white">Glass Box</strong>.
                </p>
                <p>
                  We show you the mechanics of persuasion. We reveal the hidden triggers. We turn you into a master strategist, with our Engine as your exoskeleton.
                </p>
              </div>
              <div className="flex gap-8 pt-4">
                <div className="space-y-1">
                  <div className="text-3xl font-black text-white">10x</div>
                  <div className="text-xs font-bold text-gray-500 tracking-widest uppercase">Speed to Market</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-black text-white">100%</div>
                  <div className="text-xs font-bold text-gray-500 tracking-widest uppercase">Strategic Alignment</div>
                </div>
              </div>
            </div>

            {/* Right: Engine Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full" />
              <div className="relative bg-black/80 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl font-mono text-sm">
                <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-auto text-xs text-gray-600">VERBLYNX_CORE_V3</span>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-red-900/10 border border-red-500/20 text-red-200 animate-pulse">
                    {">"} Analyzing Audience Psychology...
                  </div>
                  <div className="p-4 rounded-lg bg-blue-900/10 border border-blue-500/20 text-blue-200 opacity-80">
                    {">"} Identifying Pain Points...
                  </div>
                  <div className="p-4 rounded-lg bg-green-900/10 border border-green-500/20 text-green-200 opacity-60">
                    {">"} Optimizing for Maximum Impact...
                  </div>
                </div>
                <div className="mt-6 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-purple-500 w-[80%]" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>SYSTEM ACTIVE</span>
                  <span>READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE PROTOCOL (How It Works) */}
      <section id="protocol" className="py-32 relative border-t border-white/5 bg-black/50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-red-900/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-mono mb-6">
              <Target className="h-4 w-4 text-red-500" />
              <span>OPERATIONAL DOCTRINE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
              THE <span className="text-red-600">PROTOCOL</span>.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Three steps to total market dominance. We don't just write; we engineer outcome-driven assets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 z-0" />

            {/* Step 1 */}
            <div className="glass-card p-8 rounded-3xl relative z-10 bg-black border border-white/10 group hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center mb-8 border border-white/10 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-red-900/20">
                <Target className="h-8 w-8 text-white group-hover:text-red-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">1. Define Mission</h3>
              <p className="text-gray-400 leading-relaxed text-center text-sm">
                Input your objective, target audience, and desired tone. The System calibrates its neural pathways to your specific strategic needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-card p-8 rounded-3xl relative z-10 bg-black border border-white/10 group hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center mb-8 border border-white/10 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-red-900/20">
                <Brain className="h-8 w-8 text-white group-hover:text-red-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">2. Execute Generation</h3>
              <p className="text-gray-400 leading-relaxed text-center text-sm">
                Our Engine processes your inputs through 50+ psychological frameworks (PAS, AIDA, SLAP) to engineer the perfect persuasive asset.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-card p-8 rounded-3xl relative z-10 bg-black border border-white/10 group hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center mb-8 border border-white/10 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-red-900/20">
                <GraduationCap className="h-8 w-8 text-white group-hover:text-red-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">3. Masterclass Review</h3>
              <p className="text-gray-400 leading-relaxed text-center text-sm">
                Receive not just copy, but a deep psychological breakdown of <em>why</em> it works. Learn the triggers. Master the craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE END OF GUESSWORK (New Section) */}
      <section className="py-32 relative border-t border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                THE END OF <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">GUESSWORK.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Amateurs write until they think it sounds good. <strong className="text-white">Professionals engineer until it converts.</strong>
                </p>
                <p>
                  Most tools are "black boxes". You put a prompt in, you get text out. You learn nothing. You remain dependent.
                </p>
                <p>
                  Verblynx is a <strong>Glass Box</strong>. We show you the mechanics of persuasion. We reveal the hidden triggers. We turn you into a master copywriter, with the System as your exoskeleton.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors">
                  <div className="text-4xl font-black text-white mb-2">10x</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Speed to Market</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors">
                  <div className="text-4xl font-black text-white mb-2">100%</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Strategic Alignment</div>
                </div>
              </div>
            </div>

            {/* Visual Representation */}
            <div className="relative h-[700px] bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl p-10 flex flex-col justify-between group hover:border-red-500/30 transition-colors duration-500">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

              {/* Floating Cards Animation */}
              <div className="space-y-6 relative z-10 mt-10">
                <div className="p-6 rounded-2xl bg-gray-900/80 backdrop-blur-md border border-white/10 shadow-xl transform translate-x-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-mono text-red-400">INFERENCE_ENGINE</span>
                  </div>
                  <div className="text-sm text-gray-300 font-mono">
                    &gt; Analyzing Audience Psychology...<br />
                    &gt; Detected: "Status-Driven" Avatar
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gray-900/80 backdrop-blur-md border border-white/10 shadow-xl transform -translate-x-4 delay-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs font-mono text-blue-400">GENERATIVE_MATRIX</span>
                  </div>
                  <div className="text-sm text-gray-300 font-mono">
                    &gt; Identifying Pain Points...<br />
                    &gt; Selecting Framework: PAS (Problem-Agitation-Solution)
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gray-900/80 backdrop-blur-md border border-white/10 shadow-xl transform translate-x-4 delay-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-green-400">CRITIQUE_LOOP</span>
                  </div>
                  <div className="text-sm text-gray-300 font-mono">
                    &gt; Optimizing for Maximum Impact...<br />
                    &gt; Refining Rhythm and Specificity...
                  </div>
                </div>
              </div>

              <div className="mt-auto relative z-10">
                <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 w-full animate-[shimmer_2s_infinite]" />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500 font-mono">SYSTEM ACTIVE // V.3.0.1</p>
                  <div className="flex gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF SECTION */}
      <div id="proof">
        <NoTalkJustWalkSection />
      </div>

      {/* SECTION: WHAT WE OFFER */}
      <section id="what-we-offer" className="py-32 relative overflow-hidden bg-black/50 border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Verblynx Ecosystem</h2>
            <p className="text-xl text-gray-400">More than a tool. A complete operating system for growth.</p>
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
                  <span>Basic "Why It Works" Analysis</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-gray-500" />
                  <span>Standard Processing</span>
                </li>
              </ul>

              <Link href="/signup">
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
                  <span><strong>Deep Dive</strong> Psychological Breakdowns</span>
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
