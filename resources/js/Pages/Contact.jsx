import SiteLayout from '@/Layouts/SiteLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

const subjects = [
    'General Inquiry',
    'Reservation Question',
    'Feedback & Suggestions',
    'Catering & Events',
    'Business Partnership',
    'Complaint',
    'Other',
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            reset();
        }, 3000);
    };

    return (
        <SiteLayout>
            <Head title="Contact" />
            <section className="bg-bb-dark py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-3">
                        Contact Us
                    </h1>
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <span className="h-px w-12 bg-bb-gold"></span>
                        <span className="text-bb-gold text-sm tracking-[0.2em] uppercase">
                            We'd love to hear from you
                        </span>
                        <span className="h-px w-12 bg-bb-gold"></span>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-bb-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white rounded-2xl shadow-md p-8">
                            <h2 className="text-2xl font-bold font-display text-bb-dark mb-6">
                                Send us a Message
                            </h2>

                            {submitted ? (
                                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                                    <span className="text-4xl block mb-3">✅</span>
                                    <h3 className="text-green-800 font-semibold text-lg mb-1">
                                        Message Sent!
                                    </h3>
                                    <p className="text-green-600 text-sm">
                                        Thank you for reaching out. We'll get back to you as soon as possible.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            required
                                            className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-3"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                            className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-3"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Subject *
                                        </label>
                                        <select
                                            value={data.subject}
                                            onChange={(e) => setData('subject', e.target.value)}
                                            required
                                            className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-3"
                                        >
                                            <option value="">Select a subject...</option>
                                            {subjects.map((s) => (
                                                <option key={s} value={s}>
                                                    {s}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Message *
                                        </label>
                                        <textarea
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            required
                                            rows={5}
                                            className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20"
                                            placeholder="Tell us how we can help..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-bb-red hover:bg-bb-red-600 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {processing ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <span className="text-2xl block mb-2">📍</span>
                                    <h3 className="font-semibold text-bb-dark mb-1">Address</h3>
                                    <p className="text-gray-600 text-sm">
                                        1064 Budapest
                                        <br />
                                        Podmaniczky u. 57.
                                    </p>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <span className="text-2xl block mb-2">📞</span>
                                    <h3 className="font-semibold text-bb-dark mb-1">Phone</h3>
                                    <p className="text-gray-600 text-sm">
                                        <a href="tel:+36XXXXXXXX" className="hover:text-bb-red transition-colors">
                                            +36 XX XXX XXXX
                                        </a>
                                    </p>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <span className="text-2xl block mb-2">✉️</span>
                                    <h3 className="font-semibold text-bb-dark mb-1">Email</h3>
                                    <p className="text-gray-600 text-sm">
                                        <a href="mailto:info@bigbite.hu" className="hover:text-bb-red transition-colors">
                                            info@bigbite.hu
                                        </a>
                                    </p>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <span className="text-2xl block mb-2">🕐</span>
                                    <h3 className="font-semibold text-bb-dark mb-1">Hours</h3>
                                    <p className="text-gray-600 text-sm">
                                        Mon–Fri: 11:00–22:00
                                        <br />
                                        Sat: 11:00–23:00
                                        <br />
                                        Sun: 12:00–21:00
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-md">
                                <iframe
                                    title="Big Bite Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.338!2d19.0565!3d47.5125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc4a18a7a8b9%3A0x0!2sPodmaniczky%20u.%2057%2C%20Budapest%201064!5e0!3m2!1sen!2shu!4v1"
                                    className="w-full h-64 border-0"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className="bg-bb-dark rounded-2xl p-6 text-center">
                                <p className="text-white font-display text-lg mb-3">
                                    Prefer to order online?
                                </p>
                                <a
                                    href="https://wolt.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-bb-orange hover:bg-bb-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                                >
                                    🛵 Order on Wolt
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
