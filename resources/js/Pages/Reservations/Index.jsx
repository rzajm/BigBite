import SiteLayout from '@/Layouts/SiteLayout';
import { Head, Link } from '@inertiajs/react';

const reservations = [
    {
        id: 1,
        date: '2026-03-05',
        time: '19:00',
        party_size: 4,
        status: 'confirmed',
        special_requests: 'Birthday celebration',
    },
    {
        id: 2,
        date: '2026-03-10',
        time: '12:30',
        party_size: 2,
        status: 'pending',
        special_requests: '',
    },
];

const statusStyles = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
};

const statusIcons = {
    pending: '⏳',
    confirmed: '✅',
    cancelled: '❌',
};

export default function Index() {
    return (
        <SiteLayout>
            <Head title="My Reservations" />
            <section className="bg-bb-dark py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-3">
                        My Reservations
                    </h1>
                    <div className="flex items-center justify-center space-x-3">
                        <span className="h-px w-12 bg-bb-gold"></span>
                        <span className="text-bb-gold text-sm tracking-[0.2em] uppercase">
                            Your upcoming visits
                        </span>
                        <span className="h-px w-12 bg-bb-gold"></span>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-bb-cream">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-end mb-6">
                        <Link
                            href="/reservations/create"
                            className="bg-bb-red hover:bg-bb-red-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md"
                        >
                            + New Reservation
                        </Link>
                    </div>

                    {reservations.length === 0 ? (
                        <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                            <span className="text-5xl block mb-4">📅</span>
                            <h2 className="text-xl font-bold text-bb-dark font-display mb-2">
                                No Reservations Yet
                            </h2>
                            <p className="text-gray-500 mb-6">
                                Book your first table at Big Bite!
                            </p>
                            <Link
                                href="/reservations/create"
                                className="inline-block bg-bb-red hover:bg-bb-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                            >
                                Reserve a Table
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {reservations.map((res) => (
                                <div
                                    key={res.id}
                                    className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-bb-cream rounded-xl p-3 text-center min-w-[60px]">
                                                <p className="text-bb-red font-bold text-lg leading-none">
                                                    {new Date(res.date).getDate()}
                                                </p>
                                                <p className="text-gray-500 text-xs uppercase mt-0.5">
                                                    {new Date(res.date).toLocaleDateString('en', { month: 'short' })}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-semibold text-bb-dark">{res.time}</span>
                                                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusStyles[res.status]}`}>
                                                        {statusIcons[res.status]} {res.status.charAt(0).toUpperCase() + res.status.slice(1)}
                                                    </span>
                                                </div>
                                                <p className="text-gray-500 text-sm">
                                                    {res.party_size} {res.party_size === 1 ? 'person' : 'people'}
                                                </p>
                                                {res.special_requests && (
                                                    <p className="text-gray-400 text-xs mt-1 italic">
                                                        "{res.special_requests}"
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {res.status !== 'cancelled' && (
                                            <button className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors self-start sm:self-center">
                                                Cancel
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </SiteLayout>
    );
}
