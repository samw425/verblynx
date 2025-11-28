"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Loader2, RefreshCw, Shield, Database, Mail, CreditCard } from "lucide-react"

export default function DiagnosticsPage() {
    const [results, setResults] = useState<any>({})
    const [isLoading, setIsLoading] = useState(false)

    const runDiagnostics = async () => {
        setIsLoading(true)
        const newResults: any = {}

        // 1. Test Supabase Connection
        try {
            const supabase = createClient()
            const { data, error } = await supabase.from('projects').select('count').single()
            if (error && error.code !== 'PGRST116') throw error // PGRST116 is "no rows", which is fine
            newResults.database = { status: 'ok', message: 'Connected to Supabase' }
        } catch (e: any) {
            newResults.database = { status: 'error', message: e.message || 'Connection Failed' }
        }

        // 2. Test Auth Configuration
        try {
            const supabase = createClient()
            const { data } = await supabase.auth.getSession()
            newResults.auth = { status: 'ok', message: 'Auth Client Initialized' }
        } catch (e: any) {
            newResults.auth = { status: 'error', message: e.message }
        }

        // 3. Test API Routes (Health Check)
        try {
            // We'll just ping the notify route with a dummy payload to see if it accepts it
            // Note: We won't actually send an email to avoid spamming
            const res = await fetch('/api/notify', {
                method: 'POST',
                body: JSON.stringify({ type: 'ping' })
            })
            if (res.status === 400 || res.ok) {
                newResults.api = { status: 'ok', message: 'API Routes Accessible' }
            } else {
                throw new Error(`API returned ${res.status}`)
            }
        } catch (e: any) {
            newResults.api = { status: 'error', message: e.message }
        }

        setResults(newResults)
        setIsLoading(false)
    }

    useEffect(() => {
        runDiagnostics()
    }, [])

    const StatusIcon = ({ status }: { status: string }) => {
        if (status === 'ok') return <CheckCircle className="h-5 w-5 text-green-500" />
        if (status === 'error') return <XCircle className="h-5 w-5 text-red-500" />
        return <Loader2 className="h-5 w-5 text-gray-500 animate-spin" />
    }

    return (
        <div className="min-h-screen bg-black text-white p-8 font-mono">
            <div className="max-w-2xl mx-auto space-y-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold tracking-tight">SYSTEM DIAGNOSTICS</h1>
                    <Button onClick={runDiagnostics} disabled={isLoading} variant="outline" className="border-white/10 hover:bg-white/5">
                        <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                        Rerun Tests
                    </Button>
                </div>

                <div className="grid gap-4">
                    {/* Database */}
                    <Card className="bg-white/5 border-white/10 text-white">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-400">Database Connection</CardTitle>
                            <Database className="h-4 w-4 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 mt-2">
                                <StatusIcon status={results.database?.status} />
                                <span className="text-lg font-bold">
                                    {results.database?.status === 'ok' ? 'OPERATIONAL' : 'OFFLINE'}
                                </span>
                            </div>
                            {results.database?.message && (
                                <p className="text-xs text-gray-500 mt-1">{results.database.message}</p>
                            )}
                        </CardContent>
                    </Card>

                    {/* Auth */}
                    <Card className="bg-white/5 border-white/10 text-white">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-400">Authentication System</CardTitle>
                            <Shield className="h-4 w-4 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 mt-2">
                                <StatusIcon status={results.auth?.status} />
                                <span className="text-lg font-bold">
                                    {results.auth?.status === 'ok' ? 'CONFIGURED' : 'MISCONFIGURED'}
                                </span>
                            </div>
                            {results.auth?.message && (
                                <p className="text-xs text-gray-500 mt-1">{results.auth.message}</p>
                            )}
                        </CardContent>
                    </Card>

                    {/* API */}
                    <Card className="bg-white/5 border-white/10 text-white">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-400">API Health</CardTitle>
                            <Mail className="h-4 w-4 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 mt-2">
                                <StatusIcon status={results.api?.status} />
                                <span className="text-lg font-bold">
                                    {results.api?.status === 'ok' ? 'RESPONSIVE' : 'UNRESPONSIVE'}
                                </span>
                            </div>
                            {results.api?.message && (
                                <p className="text-xs text-gray-500 mt-1">{results.api.message}</p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
