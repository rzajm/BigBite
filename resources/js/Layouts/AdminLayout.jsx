import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

const navItems = [
    { label: 'Dashboard', route: 'admin.dashboard', icon: '📊' },
    { label: 'Menu Items', route: 'admin.menu-items.index', icon: '🍔' },
    { label: 'Categories', route: 'admin.categories.index', icon: '📂' },
    { label: 'Reservations', route: 'admin.reservations.index', icon: '📅' },
    { label: 'Reviews', route: 'admin.reviews.index', icon: '⭐' },
    { label: 'Gallery', route: 'admin.gallery.index', icon: '🖼️' },
    { label: 'Messages', route: 'admin.messages.index', icon: '✉️' },
    { label: 'Users', route: 'admin.users.index', icon: '👥' },
];

export default function AdminLayout({ children, title }) {
    const { url } = usePage();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isActive = (routeName) => {
        try {
            return url.startsWith(route(routeName).replace(window.location.origin, ''));
        } catch {
            return false;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-bb-dark shadow-lg fixed top-0 left-0 right-0 z-30">
                <div className="max-w-full mx-auto px-4 sm:px-6">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="lg:hidden text-white mr-3 p-2"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            <Link href={route('admin.dashboard')} className="flex items-center space-x-2">
                                <span className="text-bb-red font-bold text-xl font-display">Big</span>
                                <span className="text-white font-bold text-xl font-display">Bite</span>
                                <span className="bg-bb-orange text-white text-xs px-2 py-0.5 rounded-full font-semibold ml-2">
                                    Admin
                                </span>
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/"
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                View Site
                            </Link>
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex pt-16">
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-20 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                <aside className={`fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-md z-20 transition-transform duration-200 overflow-y-auto ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                }`}>
                    <div className="p-4 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.route}
                                href={route(item.route)}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                                    isActive(item.route)
                                        ? 'bg-bb-red text-white shadow-md'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </aside>

                <main className="flex-1 p-6 lg:p-8 min-h-[calc(100vh-4rem)]">
                    {title && (
                        <h1 className="text-2xl font-bold font-display text-bb-dark mb-6">{title}</h1>
                    )}
                    {children}
                </main>
            </div>
        </div>
    );
}
