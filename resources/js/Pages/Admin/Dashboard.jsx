import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ stats = {} }) {
    const cards = [
        { label: 'Total Users', value: stats.totalUsers ?? 0, icon: '👥', route: 'admin.users.index', color: 'bg-blue-500' },
        { label: 'Menu Items', value: stats.totalMenuItems ?? 0, icon: '🍔', route: 'admin.menu-items.index', color: 'bg-green-500' },
        { label: 'Pending Reservations', value: stats.pendingReservations ?? 0, icon: '📅', route: 'admin.reservations.index', color: 'bg-yellow-500' },
        { label: 'Pending Reviews', value: stats.pendingReviews ?? 0, icon: '⭐', route: 'admin.reviews.index', color: 'bg-purple-500' },
        { label: 'Unread Messages', value: stats.unreadMessages ?? 0, icon: '✉️', route: 'admin.messages.index', color: 'bg-red-500' },
        { label: "Today's Reservations", value: stats.todayReservations ?? 0, icon: '🕐', route: 'admin.reservations.index', color: 'bg-bb-orange' },
    ];

    return (
        <AdminLayout title="Dashboard">
            <Head title="Admin Dashboard" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <Link
                        key={card.label}
                        href={route(card.route)}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className={`${card.color} text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl`}>
                                {card.icon}
                            </span>
                            <svg className="w-5 h-5 text-gray-300 group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        <p className="text-3xl font-bold text-bb-dark">{card.value}</p>
                        <p className="text-gray-500 text-sm mt-1">{card.label}</p>
                    </Link>
                ))}
            </div>
        </AdminLayout>
    );
}
