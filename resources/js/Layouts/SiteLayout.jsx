import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Footer from '@/Components/Footer';

export default function SiteLayout({ children }) {
    const { auth } = usePage().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/', routeName: 'home' },
        { name: 'Menu', href: '/menu', routeName: 'menu.index' },
        { name: 'About', href: '/about', routeName: 'about' },
        { name: 'Gallery', href: '/gallery', routeName: 'gallery' },
        { name: 'Contact', href: '/contact', routeName: 'contact' },
    ];

    const currentUrl = usePage().url;

    return (
        <div className="min-h-screen flex flex-col bg-bb-cream">            <nav className="bg-bb-dark sticky top-0 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">                        <Link href="/" className="flex-shrink-0">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold">
                                    <span className="text-bb-red font-display">Big</span>
                                    <span className="text-white font-display"> Bite</span>
                                </span>
                                <span className="hidden sm:inline text-bb-gold text-xs tracking-widest uppercase">
                                    Burgers • Wraps • Doner
                                </span>
                            </div>
                        </Link>                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                        currentUrl === link.href
                                            ? 'text-bb-red bg-white/10'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>                        <div className="hidden md:flex items-center space-x-3">
                            <a
                                href="https://wolt.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-bb-orange hover:bg-bb-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-md"
                            >
                                🛵 Order on Wolt
                            </a>

                            {auth?.user ? (
                                <div className="flex items-center space-x-2">
                                    <Link
                                        href="/dashboard"
                                        className="text-gray-300 hover:text-white text-sm font-medium px-3 py-2 transition-colors"
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        href="/profile"
                                        className="text-gray-300 hover:text-white text-sm font-medium px-3 py-2 transition-colors"
                                    >
                                        {auth.user.name}
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-2">
                                    <Link
                                        href="/login"
                                        className="text-gray-300 hover:text-white text-sm font-medium px-3 py-2 transition-colors"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="bg-bb-red hover:bg-bb-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-gray-300 hover:text-white p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>                {mobileMenuOpen && (
                    <div className="md:hidden bg-bb-dark-100 border-t border-white/10 pb-4">
                        <div className="px-4 pt-2 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                                        currentUrl === link.href
                                            ? 'text-bb-red bg-white/10'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="px-4 mt-4 space-y-2">
                            <a
                                href="https://wolt.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-bb-orange text-white px-4 py-3 rounded-full text-sm font-semibold"
                            >
                                🛵 Order on Wolt
                            </a>
                            {auth?.user ? (
                                <>
                                    <Link
                                        href="/dashboard"
                                        className="block w-full text-center text-gray-300 hover:text-white px-4 py-3"
                                    >
                                        Dashboard
                                    </Link>
                                </>
                            ) : (
                                <div className="flex space-x-2">
                                    <Link
                                        href="/login"
                                        className="flex-1 text-center text-gray-300 hover:text-white px-4 py-3 border border-white/20 rounded-full"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="flex-1 text-center bg-bb-red text-white px-4 py-3 rounded-full font-semibold"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>            <main className="flex-1">
                {children}
            </main>            <Footer />
        </div>
    );
}
