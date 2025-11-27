import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12 md:py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-3 group">
                            <img src="/verblynx-icon.png" alt="Verblynx" className="h-8 w-8 rounded-lg" />
                            <span className="text-xl font-black tracking-tighter text-white">VERBLYNX</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            The Elite Copywriting System.
                        </p>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Product</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/create" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                                    System
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                            </li>
                            <li>
                                <Link href="/login" className="text-gray-400 hover:text-white transition-colors">Login</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/mission" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                                    Mission
                                </Link>
                            </li>
                            <li>
                                <Link href="/how-it-works" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                                    How it Works
                                </Link>
                            </li>
                            <li>
                                <Link href="/why" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                                    Why Verblynx
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Resources</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="https://ai.google.dev" target="_blank" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                                    API Docs
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:support@verblynx.com" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Verblynx. All rights reserved.
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </div>
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                                POWERED BY GEMINI 3
                            </span>
                        </div>

                        <a href="https://aether-architect.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity">
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                                An Aether Built Product
                            </span>
                            <div className="h-3 w-3 rounded-sm bg-gradient-to-tr from-blue-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
