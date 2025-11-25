"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Shield, CheckCircle2 } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden font-sans">
      {/* Hero Section - RED/BLACK BRAND */}
      <section className="relative flex min-h-screen items-center justify-center px-6 py-24 overflow-hidden bg-black">

        {/* Red Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="z-10 space-y-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2.5 text-sm font-semibold text-red-400 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Sparkles className="h-4 w-4" />
            <span>VERBLYNX</span>
            <span className="text-red-600">•</span>
            <span className="text-gray-400">Strategic Copywriting Engine</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              <span className="text-white">Not another</span>
              <br />
              <span className="text-white">AI wrapper.</span>
              <br />
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent text-5xl md:text-7xl mt-2 inline-block">A copywriting system.</span>
            </h1>

            <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-8" />

            <div className="space-y-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              <p className="text-white font-semibold">ChatGPT can't build campaigns. It doesn't understand conversion psychology.</p>
              <p className="text-gray-400">Verblynx <span className="text-red-500 font-bold">reverse-engineers strategy first</span>, then applies proven frameworks—AIDA, PAS, Hook-Story-Offer—to craft copy that actually converts.</p>
            </div>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto pt-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Not a prompt box. <strong className="text-white">A strategic inference engine</strong> that teaches you the mechanics while you work.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            <Link href="/create">
              <Button size="lg" className="rounded-full px-10 py-7 text-lg font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all border-0">
                Start Writing Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button size="lg" variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-red-500/30 text-white hover:bg-red-500/10">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Educational Section - What is Great Copy? */}
      <section className="py-32 px-6 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground/60">What is</span> great copy<span className="text-foreground/60">?</span>
            </h2>
            <p className="text-2xl md:text-3xl font-medium text-primary">
              It's not creative writing. It's conversion engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary">↗</div>
              <h3 className="text-xl font-semibold">The Purpose</h3>
              <p className="text-muted-foreground leading-relaxed">
                To move someone from <strong>indifference to action</strong>. Every word exists to close the gap between where they are and where you need them to be.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary">⚙</div>
              <h3 className="text-xl font-semibold">The Mechanics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Psychology. Structure. Timing. Great copy isn't magic—it's <strong>pattern recognition</strong> applied to human behavior. AIDA. PAS. Hook-Story-Offer. These frameworks work because they mirror how decisions are made.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary">🎓</div>
              <h3 className="text-xl font-semibold">The Mastery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Know <em>why</em> every word works. Verblynx doesn't just write for you—it <strong>teaches you to think like a world-class copywriter</strong> by revealing the strategy behind each choice.
              </p>
            </div>
          </div>

          <div className="text-center space-y-4 pt-8">
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              This isn't a shortcut. It's a <strong>masterclass disguised as a tool</strong>. Use Verblynx once, and you'll start seeing persuasion patterns everywhere. Use it consistently, and you'll become the copywriter agencies fear.
            </p>
            <Link href="/create">
              <Button size="lg" className="rounded-full px-8 text-lg mt-4">
                Start Learning Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works (Onboarding) */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Magic Workflow</h2>
            <p className="text-muted-foreground text-lg">From idea to polished draft in three steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative space-y-4 text-center p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
                <div className="w-16 h-16 mx-auto bg-background rounded-2xl shadow-sm border flex items-center justify-center text-2xl font-bold text-primary">1</div>
                <h3 className="text-xl font-semibold">Command Center</h3>
                <p className="text-muted-foreground">One input, infinite possibilities. "Craft an investor pitch email for a climate tech startup."</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative space-y-4 text-center p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
                <div className="w-16 h-16 mx-auto bg-background rounded-2xl shadow-sm border flex items-center justify-center text-2xl font-bold text-primary">2</div>
                <h3 className="text-xl font-semibold">Strategic Inference</h3>
                <p className="text-muted-foreground">Verblynx analyzes intent, audience, and goal. You confirm, we write.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative space-y-4 text-center p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
                <div className="w-16 h-16 mx-auto bg-background rounded-2xl shadow-sm border flex items-center justify-center text-2xl font-bold text-primary">3</div>
                <h3 className="text-xl font-semibold">Refine & Export</h3>
                <p className="text-muted-foreground">Get multiple variations. Tweak with one click ("Make it shorter"). Done.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
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
                  <p className="text-muted-foreground">CEOs, Founders, Marketers, and Sales Leaders who refuse to settle for generic AI slop.</p>
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
          <div className="relative h-[500px] bg-muted/50 rounded-2xl border border-border/50 overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            {/* Abstract UI Mockup */}
            <div className="absolute top-10 left-10 right-10 bottom-0 bg-background rounded-t-xl shadow-lg border border-border/50 p-6 space-y-4 opacity-90 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="h-4 w-1/3 bg-muted rounded animate-pulse" />
              <div className="h-32 bg-muted/50 rounded animate-pulse delay-75" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-muted/30 rounded animate-pulse delay-150" />
                <div className="h-3 w-5/6 bg-muted/30 rounded animate-pulse delay-200" />
                <div className="h-3 w-4/6 bg-muted/30 rounded animate-pulse delay-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-24 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg">Start for free, upgrade for power.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="relative p-8 bg-card rounded-3xl border border-border shadow-sm flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Starter</h3>
                <div className="mt-2 text-3xl font-bold">$0</div>
                <p className="text-muted-foreground mt-2">Perfect for trying out the strategy engine.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>3 Generations per Day</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Standard Inference Speed</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Access to All Frameworks</span>
                </li>
              </ul>
              <Button size="lg" variant="outline" className="w-full rounded-full" asChild>
                <Link href="/create">Start Writing Free</Link>
              </Button>
            </div>

            {/* Pro Tier */}
            <div className="relative p-8 bg-primary text-primary-foreground rounded-3xl border border-primary shadow-xl flex flex-col">
              <div className="absolute top-0 right-0 bg-background text-foreground text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl border-b border-l border-border">
                MOST POPULAR
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Pro</h3>
                <div className="mt-2 text-3xl font-bold">$19<span className="text-lg font-normal opacity-80">/mo</span></div>
                <p className="opacity-80 mt-2">For professionals who need unlimited power.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5" />
                  <span><strong>Unlimited</strong> Generations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Elite Strategy Engine</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Early Access to New Features</span>
                </li>
              </ul>
              <form action="/api/stripe/checkout" method="POST">
                <Button size="lg" variant="secondary" className="w-full rounded-full font-bold shadow-lg" type="submit">
                  Upgrade to Pro
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Powered by Badge */}
      <footer className="py-8 border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span>Powered by</span>
            <span className="font-semibold text-foreground">Gemini 3</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
