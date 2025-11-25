"use client"

import { DashboardHeader } from "@/components/dashboard/header"
import { Button } from "@/components/ui/button"
import { Plus, Search, FileText, MoreVertical, Calendar } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import * as motion from "framer-motion/client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ProjectsPage() {
    // Mock data
    const projects = [
        { id: 1, name: "Q4 Email Sequence", type: "Email", date: "2 days ago", status: "Draft" },
        { id: 2, name: "SaaS Landing Page V2", type: "Website", date: "5 days ago", status: "Completed" },
        { id: 3, name: "LinkedIn Authority Posts", type: "Social", date: "1 week ago", status: "In Progress" },
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
                        <h1 className="text-3xl font-bold text-white tracking-tight">My Copy</h1>
                        <p className="text-gray-400 mt-1">Access your archive of high-converting assets.</p>
                    </div>
                    <Link href="/create">
                        <Button className="bg-red-600 hover:bg-red-700 text-white shadow-[0_0_20px_-5px_rgba(220,38,38,0.4)]">
                            <Plus className="mr-2 h-4 w-4" /> New Project
                        </Button>
                    </Link>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 mb-6"
                >
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <Input
                            type="search"
                            placeholder="Filter projects..."
                            className="w-full bg-gray-900/50 border-white/10 pl-9 text-white placeholder:text-gray-600 focus:border-red-500/50 focus:ring-red-500/20"
                        />
                    </div>
                </motion.div>

                {/* Project Grid */}
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
                                    <FileText className="h-5 w-5 text-gray-400 group-hover:text-red-400" />
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-white">
                                            <MoreVertical className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="bg-black border-white/10 text-white">
                                        <DropdownMenuItem className="focus:bg-white/10 cursor-pointer">Edit</DropdownMenuItem>
                                        <DropdownMenuItem className="focus:bg-white/10 cursor-pointer">Duplicate</DropdownMenuItem>
                                        <DropdownMenuItem className="text-red-400 focus:bg-red-900/20 cursor-pointer">Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                                <Link href={`/editor/${project.id}`} className="hover:underline">
                                    {project.name}
                                </Link>
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
                                    {project.type}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" /> {project.date}
                                </span>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${project.status === "Completed" ? "bg-green-900/20 text-green-400" :
                                        project.status === "In Progress" ? "bg-blue-900/20 text-blue-400" :
                                            "bg-gray-800 text-gray-400"
                                    }`}>
                                    {project.status}
                                </span>
                                <Link href={`/editor/${project.id}`}>
                                    <Button variant="ghost" size="sm" className="text-xs hover:bg-white/10">
                                        Open
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
