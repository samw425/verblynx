import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MoreHorizontal } from "lucide-react"

export default function LibraryPage() {
    const projects = [
        { id: 1, title: "Cold Email to Investors", type: "Email", date: "2 hours ago", status: "Draft", preview: "Hi [Name], I'm writing to..." },
        { id: 2, title: "Landing Page Hero", type: "Website", date: "Yesterday", status: "Completed", preview: "The copy partner that asks first." },
        { id: 3, title: "LinkedIn About Section", type: "Social", date: "2 days ago", status: "Completed", preview: "Marketing leader with 10+ years..." },
        { id: 4, title: "Product Description: Eco Bottle", type: "Product", date: "3 days ago", status: "Draft", preview: "Stay hydrated sustainably..." },
        { id: 5, title: "Apology Text", type: "Text", date: "Last week", status: "Completed", preview: "Hey, I'm really sorry about..." },
    ]

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Library</h1>
                    <p className="text-gray-500 dark:text-gray-400">Manage your saved copy and drafts.</p>
                </div>
                <div className="flex gap-2">
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <Input type="search" placeholder="Search projects..." className="pl-8" />
                    </div>
                    <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Link key={project.id} href={`/editor/${project.id}`}>
                        <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full flex flex-col">
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                    <Badge variant="outline" className="mb-2">{project.type}</Badge>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 -mt-2">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </div>
                                <CardTitle className="text-base line-clamp-1">{project.title}</CardTitle>
                                <CardDescription className="text-xs">{project.date}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-sm text-gray-500 line-clamp-3 bg-gray-50 p-3 rounded-md dark:bg-gray-800/50 italic">
                                    "{project.preview}"
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
