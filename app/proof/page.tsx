import { NoTalkJustWalkSection } from "@/components/landing/no-talk-just-walk"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProofPage() {
    return (
        <div className="min-h-screen bg-black text-foreground overflow-hidden font-sans flex flex-col">
            {/* Minimal Header */}
            <header className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center">
                <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" /> Back to Home
                </Link>
                <div className="text-sm font-bold text-white tracking-widest uppercase">
                    Verblynx <span className="text-red-600">Proof</span>
                </div>
            </header>

            {/* Main Content - Centered Campaign */}
            <main className="flex-1 flex flex-col justify-center relative">
                <NoTalkJustWalkSection />

                <div className="text-center pb-24 relative z-10">
                    <Link href="/create">
                        <Button size="lg" className="h-14 px-8 rounded-full text-lg font-medium bg-red-600 text-white hover:bg-red-700 shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)] transition-all duration-300">
                            Walk It Like You Talk It
                        </Button>
                    </Link>
                </div>
            </main>
        </div>
    )
}
