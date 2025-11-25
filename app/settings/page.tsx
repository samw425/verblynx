"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

export default function SettingsPage() {
    const handleUpgrade = async () => {
        try {
            const response = await fetch("/api/stripe/checkout", {
                method: "POST",
            })
            const data = await response.json()
            if (data.url) {
                window.location.href = data.url
            } else {
                toast.error("Failed to start checkout")
            }
        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-gray-500 dark:text-gray-400">Manage your account and preferences.</p>
            </div>

            <Tabs defaultValue="general">
                <TabsList>
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="voice">Voice & Tone</TabsTrigger>
                    <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-4 mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile</CardTitle>
                            <CardDescription>Update your personal information.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" defaultValue="Sameer Aziz" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" defaultValue="sameer@example.com" disabled />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save Changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="voice" className="space-y-4 mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Default Tone</CardTitle>
                            <CardDescription>Set your preferred starting point for new copy.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <Label>Formal vs Casual</Label>
                                    <span className="text-sm text-gray-500">5/10</span>
                                </div>
                                <Slider defaultValue={[5]} max={10} step={1} />
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <Label>Direct vs Soft</Label>
                                    <span className="text-sm text-gray-500">5/10</span>
                                </div>
                                <Slider defaultValue={[5]} max={10} step={1} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save Defaults</Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Voice Samples (Pro)</CardTitle>
                            <CardDescription>Upload samples of your writing to train Verblynx on your style.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border border-dashed p-8 text-center text-sm text-gray-500">
                                Upgrade to Pro to unlock Voice Cloning.
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" onClick={handleUpgrade}>Upgrade to Pro</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="billing" className="space-y-4 mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Current Plan</CardTitle>
                            <CardDescription>You are currently on the Free plan.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between rounded-lg border p-4">
                                <div className="space-y-0.5">
                                    <div className="font-medium">Free Tier</div>
                                    <div className="text-sm text-gray-500">20 generations / month</div>
                                </div>
                                <Badge>Active</Badge>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Usage</span>
                                    <span>5 / 20</span>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[25%]" />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" onClick={handleUpgrade}>Upgrade to Pro ($20/mo)</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
