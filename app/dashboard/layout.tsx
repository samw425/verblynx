
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { AnimatedBackground } from "@/components/ui/animated-background"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-black text-foreground relative">
            <AnimatedBackground />
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none" />

            <DashboardSidebar />
            <main className="flex-1 overflow-y-auto relative z-10">
                {children}
            </main>
        </div>
    )
}
