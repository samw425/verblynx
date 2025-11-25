"use client"

import { DashboardHeader } from "@/components/dashboard/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, CreditCard, Key, Shield } from "lucide-react"
import * as motion from "framer-motion/client"
import { toast } from "sonner"

export default function SettingsPage() {
    return (
        <div className="min-h-full flex flex-col">
            <DashboardHeader />

            <div className="flex-1 p-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl font-bold text-white tracking-tight">Settings</h1>
                    <p className="text-gray-400 mt-1">Manage your account and preferences.</p>
                </motion.div>

                <Tabs defaultValue="account" className="space-y-6">
                    <TabsList className="bg-black/40 border border-white/10 p-1">
                        <TabsTrigger value="account" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                            <User className="mr-2 h-4 w-4" /> Account
                        </TabsTrigger>
                        <TabsTrigger value="billing" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                            <CreditCard className="mr-2 h-4 w-4" /> Billing
                        </TabsTrigger>
                        <TabsTrigger value="api" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                            <Key className="mr-2 h-4 w-4" /> API Keys
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="account">
                        <Card className="bg-black/40 border-white/10">
                            <CardHeader>
                                <CardTitle className="text-white">Profile Information</CardTitle>
                                <CardDescription>Update your personal details.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label className="text-gray-300">Full Name</Label>
                                    <Input defaultValue="John Doe" className="bg-gray-900/50 border-white/10 text-white" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-gray-300">Email</Label>
                                    <Input defaultValue="john@example.com" className="bg-gray-900/50 border-white/10 text-white" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="bg-white text-black hover:bg-gray-200" onClick={() => toast.success("Profile updated")}>Save Changes</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="billing">
                        <Card className="bg-black/40 border-white/10">
                            <CardHeader>
                                <CardTitle className="text-white">Subscription Plan</CardTitle>
                                <CardDescription>Manage your billing and plan.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/5">
                                    <div>
                                        <div className="font-bold text-white">Free Plan</div>
                                        <div className="text-sm text-gray-400">Limited to 3 generations/day</div>
                                    </div>
                                    <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-950">Current Plan</Button>
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-lg border border-red-500/30 bg-red-900/10">
                                    <div>
                                        <div className="font-bold text-white flex items-center gap-2">
                                            Pro Plan <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full">RECOMMENDED</span>
                                        </div>
                                        <div className="text-sm text-gray-400">Unlimited generations, priority support</div>
                                    </div>
                                    <form action="/api/stripe/checkout" method="POST">
                                        <Button className="bg-red-600 hover:bg-red-700 text-white shadow-[0_0_15px_-3px_rgba(220,38,38,0.5)]">Upgrade - $19/mo</Button>
                                    </form>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="api">
                        <Card className="bg-black/40 border-white/10">
                            <CardHeader>
                                <CardTitle className="text-white">API Configuration</CardTitle>
                                <CardDescription>Manage your external API keys.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label className="text-gray-300">Google Gemini API Key</Label>
                                    <div className="flex gap-2">
                                        <Input type="password" value="************************" disabled className="bg-gray-900/50 border-white/10 text-white flex-1" />
                                        <Button variant="outline" className="border-white/10 text-gray-300">Change</Button>
                                    </div>
                                    <p className="text-xs text-gray-500">Used for the strategy engine generation.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
