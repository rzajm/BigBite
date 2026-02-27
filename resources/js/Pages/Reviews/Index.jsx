import SiteLayout from '@/Layouts/SiteLayout';
import { Head, Link } from '@inertiajs/react';

const reviews = [
    {
        id: 1,
        rating: 5,
        comment: 'Absolutely amazing burgers! The BigBite Special is my new favorite. The truffle mayo is incredible.',
        is_approved: true,
        created_at: '2026-02-15',
    },
    {
        id: 2,
        rating: 4,
        comment: 'Great falafel wrap, very fresh ingredients. Would love more vegetarian options.',
        is_approved: false,
        created_at: '2026-02-20',
    },
];

const statusInfo = {
    true: { label: 'Published', style: 'bg-green-100 text-green-800', icon: '✅' },
    false: { label: 'Pending Approval', style: 'bg-yellow-100 text-yellow-800', icon: '⏳' },
};

function StarRating({ rating, interactive = false, onChange }) {
    return (
        <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type={interactive ? 'button' : undefined}
                    onClick={() => interactive && onChange?.(star)}
                    className={`text-xl transition-colors ${
                        star <= rating ? 'text-bb-orange' : 'text-gray-300'
                    } ${interactive ? 'cursor-pointer hover:text-bb-orange' : 'cursor-default'}`}
                    disabled={!interactive}
                >
                    ★
                </button>
            ))}
        </div>
    );
}

export default function Index() {
    return (
        <SiteLayout>
            <Head title="My Reviews" />
            <section className="bg-bb-dark py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-3">
                        My Reviews
                    </h1>
                    <div className="flex items-center justify-center space-x-3">
                        <span className="h-px w-12 bg-bb-gold"></span>
                        <span className="text-bb-gold text-sm tracking-[0.2em] uppercase">
                            Share your Big Bite experience
                        </span>
                        <span className="h-px w-12 bg-bb-gold"></span>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-bb-cream">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-end mb-6">
                        <Link
                            href="/reviews/create"
                            className="bg-bb-red hover:bg-bb-red-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md"
                        >
                            + Write a Review
                        </Link>
                    </div>

                    {reviews.length === 0 ? (
                        <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                            <span className="text-5xl block mb-4">⭐</span>
                            <h2 className="text-xl font-bold text-bb-dark font-display mb-2">
                                No Reviews Yet
                            </h2>
                            <p className="text-gray-500 mb-6">
                                Share your Big Bite experience with the world!
                            </p>
                            <Link
                                href="/reviews/create"
                                className="inline-block bg-bb-red hover:bg-bb-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                            >
                                Write Your First Review
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {reviews.map((review) => {
                                const status = statusInfo[review.is_approved];
                                return (
                                    <div
                                        key={review.id}
                                        className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <StarRating rating={review.rating} />
                                                <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium mt-2 ${status.style}`}>
                                                    {status.icon} {status.label}
                                                </span>
                                            </div>
                                            <span className="text-gray-400 text-xs">
                                                {new Date(review.created_at).toLocaleDateString('en', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                })}
                                            </span>
                                        </div>

                                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                            {review.comment}
                                        </p>

                                        <div className="flex items-center space-x-3">
                                            <button className="text-sm text-bb-red hover:text-bb-red-600 font-medium transition-colors">
                                                Edit
                                            </button>
                                            <button className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
        </SiteLayout>
    );
}
