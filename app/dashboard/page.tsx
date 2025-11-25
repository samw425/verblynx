import { DashboardHeader } from "@/components/dashboard/header"
import { Button } from "@/components/ui/button"
import { Plus, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import * as motion from "framer-motion/client"

export default function DashboardPage() {
    // Mock data for now - eventually fetch from Supabase
    const projects = [
        { id: 1, name: "Q4 Email Sequence", date: "2 days ago", status: "Draft" },
        { id: 2, name: "SaaS Landing Page V2", date: "5 days ago", status: "Completed" },
        { id: 3, name: "LinkedIn Authority Posts", date: "1 week ago", status: "In Progress" },
    ]

    return (
        <div className="min-h-full flex flex-col">
            <DashboardHeader />

            <div className="flex-1 p-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between mb-8"
                >
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Command Center</h1>
                        <p className="text-gray-400 mt-1">Manage your strategic assets.</p>
                    </div>
                    {projects.length > 0 && (
                        <Link href="/create">
                            <Button className="bg-red-600 hover:bg-red-700 text-white shadow-[0_0_20px_-5px_rgba(220,38,38,0.4)]">
                                <Plus className="mr-2 h-4 w-4" /> New Project
                            </Button>
                        </Link>
                    )}
                </motion.div>

                {projects.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="h-[60vh] flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5"
                    >
                        <div className="h-20 w-20 rounded-full bg-red-900/20 flex items-center justify-center mb-6 border border-red-500/20 shadow-[0_0_30px_-5px_rgba(220,38,38,0.2)]">
                            <Sparkles className="h-10 w-10 text-red-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Ready to Master the Art?</h2>
                        <p className="text-gray-400 max-w-md text-center mb-8">
                            You haven't created any campaigns yet. Initialize the strategy engine to start generating high-converting copy.
                        </p>
                        <Link href="/create">
                            <Button size="lg" className="h-12 px-8 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-[0_0_30px_-5px_rgba(220,38,38,0.4)] transition-all hover:scale-105">
                                Initialize Project <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                className="group relative bg-black/40 border border-white/10 rounded-xl p-6 hover:border-red-500/30 hover:bg-red-900/5 transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="h-10 w-10 rounded-lg bg-gray-900 flex items-center justify-center border border-white/5 group-hover:border-red-500/20 group-hover:bg-red-900/20 transition-colors">
                                        <Sparkles className="h-5 w-5 text-gray-400 group-hover:text-red-400" />
                                    </div>
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${project.status === "Completed" ? "bg-green-900/20 text-green-400" :
                                        project.status === "In Progress" ? "bg-blue-900/20 text-blue-400" :
                                            "bg-gray-800 text-gray-400"
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                                    <Link href={`/editor/${project.id}`} className="hover:underline">
                                        {project.name}
                                    </Link>
                                </h3>
                                <p className="text-sm text-gray-500 mb-4">Last edited {project.date}</p>

                                <Link href={`/editor/${project.id}`}>
                                    <Button variant="ghost" size="sm" className="w-full border border-white/5 hover:bg-white/10 hover:text-white">
                                        Open Project
                                    </Button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
