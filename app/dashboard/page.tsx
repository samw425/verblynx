import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, FileText, PenTool, GraduationCap, Briefcase, ArrowRight, Clock } from "lucide-react"

export default function DashboardPage() {
    const quickActions = [
        { label: "Email", icon: Mail, href: "/create?type=email", color: "text-blue-500" },
        { label: "Social Post", icon: MessageSquare, href: "/create?type=social", color: "text-pink-500" },
        { label: "Website Copy", icon: FileText, href: "/create?type=website", color: "text-purple-500" },
        { label: "Ad Copy", icon: PenTool, href: "/create?type=ad", color: "text-orange-500" },
        { label: "Essay", icon: GraduationCap, href: "/create?type=essay", color: "text-green-500" },
        { label: "Resume", icon: Briefcase, href: "/create?type=resume", color: "text-slate-500" },
    ]

    const recentProjects = [
        { id: 1, title: "Cold Email to Investors", type: "Email", date: "2 hours ago", status: "Draft" },
        { id: 2, title: "Landing Page Hero", type: "Website", date: "Yesterday", status: "Completed" },
        { id: 3, title: "LinkedIn About Section", type: "Social", date: "2 days ago", status: "Completed" },
    ]

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Welcome back, Writer.</h1>
                <p className="text-gray-500 dark:text-gray-400">What are we writing today?</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {quickActions.map((action) => (
                    <Link key={action.label} href={action.href}>
                        <Card className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer h-full">
                            <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                                <action.icon className={`h-8 w-8 ${action.color}`} />
                                <span className="font-medium text-sm">{action.label}</span>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold tracking-tight">Recent Projects</h2>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/library">
                            View all <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {recentProjects.map((project) => (
                        <Link key={project.id} href={`/editor/${project.id}`}>
                            <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-base">{project.title}</CardTitle>
                                    <CardDescription className="flex items-center gap-2 text-xs">
                                        <Clock className="h-3 w-3" /> {project.date}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2">
                                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                            {project.type}
                                        </span>
                                        {project.status === "Draft" && (
                                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-100">
                                                Draft
                                            </span>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
