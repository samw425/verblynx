import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12 md:py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center shadow-lg shadow-red-900/20 group-hover:shadow-red-600/40 transition-all duration-300">
                                <span className="font-bold text-white text-lg">V</span>
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors">
                                VERBLYNX
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The Elite Copywriting System. <br />
                            No Talk. Just Walk.
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

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </div>
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                            POWERED BY GEMINI 3
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
