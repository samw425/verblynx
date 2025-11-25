"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, Settings, Sparkles, LogOut, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const sidebarItems = [
    {
        title: "Command Center",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "My Copy",
        href: "/dashboard/projects",
        icon: FileText,
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
]

export function DashboardSidebar() {
    const pathname = usePathname()
    const router = useRouter()
    const supabase = createClient()

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        toast.success("Signed out")
        router.push("/login")
    }

    return (
        <div className="flex h-full w-64 flex-col border-r border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="flex h-16 items-center border-b border-white/10 px-6">
                <Link href="/dashboard" className="flex items-center gap-2 font-bold text-white">
                    <Sparkles className="h-5 w-5 text-red-600" />
                    <span>Verblynx</span>
                </Link>
            </div>
            <div className="flex-1 overflow-y-auto py-6 px-4">
                <nav className="space-y-2">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                pathname === item.href
                                    ? "bg-red-600/10 text-red-500"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.title}
                        </Link>
                    ))}
                </nav>
                <div className="mt-8 px-2">
                    <div className="rounded-xl border border-red-900/20 bg-gradient-to-br from-red-900/10 to-transparent p-4">
                        <h4 className="mb-2 text-xs font-semibold uppercase text-red-400">Pro Status</h4>
                        <p className="mb-3 text-xs text-gray-400">Unlock the full strategy engine.</p>
                        <Button size="sm" className="w-full bg-red-600 hover:bg-red-700 text-white border-0">
                            Upgrade
                        </Button>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 p-4">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5"
                    onClick={handleSignOut}
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                </Button>
            </div>
        </div>
    )
}
