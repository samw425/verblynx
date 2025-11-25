"use client"

import Link from "next/link"
import StripeButton from "@/components/ui/StripeButton";
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Shield, CheckCircle2, ArrowUpRight, Settings } from "lucide-react"
import { NoTalkJustWalkSection } from "@/components/landing/no-talk-just-walk"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden font-sans">
      {/* Hero Section - ELEVATED DEEP RED THEME */}
      <section className="relative flex min-h-screen items-center justify-center px-6 py-24 overflow-hidden bg-black">

        {/* Deep Red Spotlight Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-900/50 via-black to-black pointer-events-none" />

        {/* Ambient Grain/Texture (Optional for elevation) */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

        <div className="z-10 space-y-10 max-w-5xl mx-auto text-center relative">

          {/* Partnership Pill Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium backdrop-blur-md shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)] animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="text-white">Verblynx</span>
            <span className="text-gray-600">×</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent font-bold">Gemini 3</span>
            </div>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">Official Partner</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 drop-shadow-2xl">
            <span className="text-white block">Stop Guessing.</span>
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent block mt-2">Start Engineering Influence.</span>
          </h1>

          <div className="space-y-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 font-light leading-relaxed">
            <p>
              Amateurs guess. <strong className="text-white font-medium">Verblynx engineers.</strong> Built on the psychological frameworks that drive real influence.
            </p>
          </div>

          {/* CTAs - Centered Below Tagline */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            {/* Primary CTA - Dark with Red Glow */}
            <Link href="/signup">
              <Button size="lg" className="h-14 px-8 rounded-full text-lg font-medium bg-black/50 border border-red-600/50 text-white shadow-[0_0_30px_-5px_rgba(220,38,38,0.4)] hover:bg-red-950/30 hover:border-red-500 hover:shadow-[0_0_50px_-10px_rgba(220,38,38,0.6)] transition-all duration-300">
                Start Writing Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            {/* Secondary CTA - Light/White */}
            <Link href="/login">
              <Button size="lg" variant="secondary" className="h-14 px-8 rounded-full text-lg font-medium bg-white text-black hover:bg-gray-200 transition-all duration-300">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF SECTION: No Talk. Just Walk. */}
      <NoTalkJustWalkSection />

      {/* Educational Section - REDESIGNED FOR IMPACT */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              What is <span className="text-red-600">great copy?</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium">
              It's not creative writing. It's <span className="text-white">conversion engineering.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Purpose */}
            <div className="group relative p-8 rounded-2xl bg-gray-900/50 border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(220,38,38,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center border border-red-600/20 group-hover:border-red-600/50 transition-colors">
                  <ArrowUpRight className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">The Purpose</h3>
                <p className="text-gray-400 leading-relaxed">
                  To move someone from <strong className="text-white">indifference to action</strong>. Every word exists to close the gap between where they are and where you need them to be.
                </p>
              </div>
            </div>

            {/* Card 2: Mechanics */}
            <div className="group relative p-8 rounded-2xl bg-gray-900/50 border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(220,38,38,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center border border-red-600/20 group-hover:border-red-600/50 transition-colors">
                  <Settings className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">The Mechanics</h3>
                <p className="text-gray-400 leading-relaxed">
                  Psychology. Structure. Timing. Great copy isn't magic—it's <strong className="text-white">pattern recognition</strong> applied to human behavior. AIDA. PAS. Hook-Story-Offer.
                </p>
              </div>
            </div>

            {/* Card 3: Mastery */}
            <div className="group relative p-8 rounded-2xl bg-gray-900/50 border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(220,38,38,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center border border-red-600/20 group-hover:border-red-600/50 transition-colors">
                  <Zap className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">The Mastery</h3>
                <p className="text-gray-400 leading-relaxed">
                  We don't just write for you. We <strong className="text-white">teach you to fish.</strong> Use Verblynx to master the psychology, so eventually, you won't even need us.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6 pt-12">
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              This isn't a shortcut. It's a <strong className="text-white">masterclass disguised as a tool</strong>. Use Verblynx once, and you'll start seeing persuasion patterns everywhere.
            </p>
            <Link href="/signup">
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-red-600/30 text-white hover:bg-red-600/10 hover:text-red-500 hover:border-red-600/50 transition-all">
                Start Learning Free
              </Button>
            </Link>
          </div>
        </div>
      </section >

      {/* How It Works (The Protocol) */}
      <section className="py-24 bg-black border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The Protocol</h2>
            <p className="text-gray-400 text-lg">From raw intent to deployed asset in three steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-900/20 to-red-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative space-y-4 text-center p-6 bg-black/50 rounded-2xl border border-white/10 shadow-sm group-hover:border-red-500/30 transition-colors">
                <div className="w-16 h-16 mx-auto bg-black rounded-2xl shadow-sm border border-white/10 flex items-center justify-center text-2xl font-bold text-red-500 group-hover:text-red-400 group-hover:border-red-500/50 transition-all">1</div>
                <h3 className="text-xl font-bold text-white">Command Center</h3>
                <p className="text-gray-400">One input, infinite possibilities. "Write a VSL hook for a high-ticket offer targeting skeptics."</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-900/20 to-red-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative space-y-4 text-center p-6 bg-black/50 rounded-2xl border border-white/10 shadow-sm group-hover:border-red-500/30 transition-colors">
                <div className="w-16 h-16 mx-auto bg-black rounded-2xl shadow-sm border border-white/10 flex items-center justify-center text-2xl font-bold text-red-500 group-hover:text-red-400 group-hover:border-red-500/50 transition-all">2</div>
                <h3 className="text-xl font-bold text-white">Strategic Inference</h3>
                <p className="text-gray-400">Verblynx analyzes intent, audience, and goal. You confirm, we write. No guessing.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-900/20 to-red-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative space-y-4 text-center p-6 bg-black/50 rounded-2xl border border-white/10 shadow-sm group-hover:border-red-500/30 transition-colors">
                <div className="w-16 h-16 mx-auto bg-black rounded-2xl shadow-sm border border-white/10 flex items-center justify-center text-2xl font-bold text-red-500 group-hover:text-red-400 group-hover:border-red-500/50 transition-all">3</div>
                <h3 className="text-xl font-bold text-white">Refine & Export</h3>
                <p className="text-gray-400">Get multiple variations. Tweak with one click ("Make it shorter"). Done.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-black text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Why Pros Choose Verblynx</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit"><Zap className="h-5 w-5 text-primary" /></div>
                <div>
                  <h3 className="font-semibold text-lg">Strategic Inference</h3>
                  <p className="text-muted-foreground">It doesn't guess. It reverse-engineers your goal, then writes to win.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit"><Shield className="h-5 w-5 text-primary" /></div>
                <div>
                  <h3 className="font-semibold text-lg">Built for Winners</h3>
                  <p className="text-muted-foreground">CEOs, Founders, Marketers, and Sales Leaders who refuse to settle for generic copy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit"><CheckCircle2 className="h-5 w-5 text-primary" /></div>
                <div>
                  <h3 className="font-semibold text-lg">Psychological Mastery</h3>
                  <p className="text-muted-foreground">Understand the <em>why</em>. We reveal the persuasion mechanics behind every line.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] bg-gray-900/50 rounded-2xl border border-white/10 overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent" />
            {/* Abstract UI Mockup */}
            <div className="absolute top-10 left-10 right-10 bottom-0 bg-black rounded-t-xl shadow-2xl border border-white/10 p-6 space-y-4 opacity-90 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
              </div>
              <div className="h-4 w-1/3 bg-gray-800 rounded animate-pulse" />
              <div className="h-32 bg-gray-900/50 rounded border border-white/5 p-4">
                <div className="space-y-2">
                  <div className="h-2 w-3/4 bg-gray-800 rounded" />
                  <div className="h-2 w-1/2 bg-gray-800 rounded" />
                </div>
              </div>
              <div className="space-y-2 pt-4">
                <div className="h-2 w-full bg-gray-800 rounded" />
                <div className="h-2 w-5/6 bg-gray-800 rounded" />
                <div className="h-2 w-4/6 bg-gray-800 rounded" />
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* Pricing Section */}
      <section className="py-24 bg-black border-t border-white/10 text-white">
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</Link>
          <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
          <Link href="/proof" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Proof</Link>
          <Link href="/login" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Login</Link>
          <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-red-900/20" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </nav>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg">Start for free, upgrade for power.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="relative p-8 bg-gray-900/50 rounded-3xl border border-white/10 shadow-sm flex flex-col hover:border-red-600/30 transition-colors">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Starter</h3>
                <div className="mt-2 text-3xl font-bold text-white">$0</div>
                <p className="text-gray-400 mt-2">Perfect for trying out the strategy engine.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-red-500" />
                  <span>3 Generations per Day</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-red-500" />
                  <span>Standard Inference Speed</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-red-500" />
                  <span>Access to All Frameworks</span>
                </li>
              </ul>
              <Button size="lg" variant="outline" className="w-full rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="/signup">Start Writing Free</Link>
              </Button>
            </div>

            {/* Pro Tier */}
            <div className="relative p-8 bg-red-950/30 text-white rounded-3xl border border-red-600/50 shadow-xl flex flex-col shadow-red-900/20">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                MOST POPULAR
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Pro</h3>
                <div className="mt-2 text-3xl font-bold">$19<span className="text-lg font-normal opacity-80">/mo</span></div>
                <p className="opacity-80 mt-2">For professionals who need unlimited power.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-red-400" />
                  <span><strong>Unlimited</strong> Generations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-red-400" />
                  <span>Elite Strategy & <strong>Masterclass</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-red-400" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-red-400" />
                  <span>Early Access to New Features</span>
                </li>
              </ul>
              <StripeButton priceId={process.env.NEXT_PUBLIC_STRIPE_PRICE_ID!} className="w-full rounded-full font-bold shadow-lg bg-red-600 hover:bg-red-700 text-white" >Upgrade to Pro</StripeButton>
            </div>
          </div>
        </div>
      </section >

      {/* Footer with Partnership Badge */}
      <footer className="py-12 border-t border-white/10 bg-black text-center">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-4">
          <div className="inline-flex flex-col items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">In Partnership With</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-sm font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Gemini 3</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 font-medium">The only AI that <span className="text-gray-300">reasons</span> before it writes.</p>
          </div>
          <p className="text-xs text-gray-600 mt-4">© 2026 Verblynx Inc. All rights reserved.</p>
        </div>
      </footer>
    </div >
  )
}
