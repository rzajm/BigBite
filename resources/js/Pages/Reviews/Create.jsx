import SiteLayout from '@/Layouts/SiteLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Create() {
    const [submitted, setSubmitted] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        rating: 0,
        comment: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.rating === 0) return;
        setSubmitted(true);
    };

    return (
        <SiteLayout>
            <Head title="Write a Review" />            <section className="bg-bb-dark py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-3">
                        Write a Review
                    </h1>
                    <div className="flex items-center justify-center space-x-3">
                        <span className="h-px w-12 bg-bb-gold"></span>
                        <span className="text-bb-gold text-sm tracking-[0.2em] uppercase">
                            Tell us about your experience
                        </span>
                        <span className="h-px w-12 bg-bb-gold"></span>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-bb-cream">
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
                    {submitted ? (
                        <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                            <span className="text-5xl block mb-4">🎉</span>
                            <h2 className="text-2xl font-bold font-display text-bb-dark mb-2">
                                Thank You!
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Your review has been submitted and will be published after moderation.
                            </p>
                            <button
                                onClick={() => {
                                    setSubmitted(false);
                                    reset();
                                }}
                                className="bg-bb-red hover:bg-bb-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                            >
                                Write Another Review
                            </button>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl shadow-md p-8">
                            <h2 className="text-2xl font-bold font-display text-bb-dark mb-6">
                                How was your visit?
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Your Rating *
                                    </label>
                                    <div className="flex items-center space-x-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setData('rating', star)}
                                                className={`text-4xl transition-all duration-200 hover:scale-110 ${
                                                    star <= data.rating
                                                        ? 'text-bb-orange'
                                                        : 'text-gray-300 hover:text-bb-orange/50'
                                                }`}
                                            >
                                                ★
                                            </button>
                                        ))}
                                        {data.rating > 0 && (
                                            <span className="text-sm text-gray-500 ml-2">
                                                {data.rating === 1 && 'Poor'}
                                                {data.rating === 2 && 'Fair'}
                                                {data.rating === 3 && 'Good'}
                                                {data.rating === 4 && 'Very Good'}
                                                {data.rating === 5 && 'Excellent!'}
                                            </span>
                                        )}
                                    </div>
                                    {data.rating === 0 && (
                                        <p className="text-xs text-gray-400 mt-1">Click a star to rate</p>
                                    )}
                                </div>                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Review *
                                    </label>
                                    <textarea
                                        value={data.comment}
                                        onChange={(e) => setData('comment', e.target.value)}
                                        required
                                        rows={5}
                                        className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20"
                                        placeholder="Tell us about the food, service, atmosphere..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing || data.rating === 0}
                                    className="w-full bg-bb-red hover:bg-bb-red-600 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {processing ? 'Submitting...' : 'Submit Review'}
                                </button>
                            </form>

                            <p className="text-xs text-gray-400 text-center mt-4">
                                Reviews are moderated before being published. We appreciate your honest feedback!
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </SiteLayout>
    );
}
