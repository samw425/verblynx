import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, LayoutDashboard, PlusCircle, Library, Settings, LogOut } from "lucide-react"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            <aside className="w-full md:w-64 border-r bg-gray-50/40 dark:bg-gray-800/40 hidden md:block">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Sparkles className="h-6 w-6 text-primary" />
                        <span className="">Verblynx</span>
                    </Link>
                </div>
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4 py-4 gap-2">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                    </Link>
                    <Link
                        href="/create"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary bg-primary/10 transition-all hover:text-primary hover:bg-primary/20"
                    >
                        <PlusCircle className="h-4 w-4" />
                        New Copy
                    </Link>
                    <Link
                        href="/library"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <Library className="h-4 w-4" />
                        Library
                    </Link>
                    <Link
                        href="/settings"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <Settings className="h-4 w-4" />
                        Settings
                    </Link>
                </nav>
                <div className="mt-auto p-4">
                    <Button variant="outline" className="w-full justify-start gap-2" size="sm">
                        <LogOut className="h-4 w-4" />
                        Sign Out
                    </Button>
                </div>
            </aside>
            <main className="flex-1 flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-gray-50/40 px-6 dark:bg-gray-800/40 md:hidden">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Sparkles className="h-6 w-6 text-primary" />
                        <span className="">Verblynx</span>
                    </Link>
                </header>
                <div className="flex-1 p-4 md:p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
