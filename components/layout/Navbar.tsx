"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Our Mission", href: "/mission" },
        { name: "How it Works", href: "/how-it-works" },
        { name: "Why Verblynx", href: "/why" },
        { name: "Pricing", href: "/pricing" },
    ]

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center shadow-lg shadow-red-900/20 group-hover:shadow-red-600/40 transition-all duration-300">
                            <span className="font-bold text-white text-lg">V</span>
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors">
                            VERBLYNX
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/login">
                            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/5">
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/pricing">
                            <Button size="sm" className="rounded-full bg-white text-black hover:bg-gray-200 font-bold">
                                Get Access
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden animate-in slide-in-from-top-10 duration-200">
                    <nav className="flex flex-col gap-6 text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-bold text-white hover:text-red-500 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="h-px bg-white/10 w-full my-4" />
                        <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="ghost" className="w-full text-lg text-gray-400">
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button className="w-full rounded-full bg-red-600 hover:bg-red-700 text-white text-lg py-6">
                                Start Writing Free
                            </Button>
                        </Link>
                    </nav>
                </div>
            )}
        </>
    )
}
