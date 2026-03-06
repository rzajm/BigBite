import SiteLayout from '@/Layouts/SiteLayout';
import { Head, Link } from '@inertiajs/react';

const featuredItems = [
    {
        id: 1,
        name: 'BigBite Special Burger',
        description: 'Double beef patty, truffle mayo, iceberg, tomato, pickled cucumber, caramelized onion, BigBite special burger sauce',
        price: 3290,
        image: null,
        allergens: ['Gluten'],
    },
    {
        id: 2,
        name: 'Doner Burger',
        description: 'Special doner chicken, garlic mayo, tomato, onion, iceberg',
        price: 2790,
        image: null,
        allergens: ['Gluten'],
    },
    {
        id: 3,
        name: 'BAR.BQ Burger',
        description: 'Beef patty, tomato, onion, iceberg, BBQ sauce',
        price: 2690,
        image: null,
        allergens: ['Gluten', 'Milk'],
    },
    {
        id: 4,
        name: 'Falafel Wrap',
        description: 'Falafel, arugula, tahini sauce, hummus',
        price: 2290,
        image: null,
        allergens: ['Gluten'],
    },
];

function HeroSection() {
    return (
        <section className="relative bg-bb-dark overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 43, 43, 0.3) 0%, transparent 50%),
                                          radial-gradient(circle at 75% 75%, rgba(232, 132, 42, 0.3) 0%, transparent 50%)`,
                    }}
                ></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
                <div className="text-center">
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-display mb-4">
                        <span className="text-bb-red">Big</span>
                        <span className="text-white"> Bite</span>
                    </h1>
                    <div className="flex items-center justify-center space-x-3 mb-6">
                        <span className="h-px w-12 bg-bb-gold"></span>
                        <p className="text-bb-gold text-sm sm:text-base tracking-[0.3em] uppercase">
                            Burgers • Wraps • Doner
                        </p>
                        <span className="h-px w-12 bg-bb-gold"></span>
                    </div>
                    <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl italic max-w-2xl mx-auto mb-10">
                        "Restaurant-quality taste, street-food soul"
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/menu"
                            className="bg-bb-red hover:bg-bb-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-bb-red/25"
                        >
                            View Our Menu
                        </Link>
                        <a
                            href="https://wolt.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#009DE0] hover:bg-[#0087C0] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-[#009DE0]/25"
                        >
                            🛵 Order on Wolt
                        </a>
                        <a
                            href="https://www.foodora.hu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#D70F64] hover:bg-[#B80D55] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-[#D70F64]/25"
                        >
                            🛵 Order on Foodora
                        </a>
                        <Link
                            href="/reservations/create"
                            className="border-2 border-bb-gold text-bb-gold hover:bg-bb-gold hover:text-bb-dark px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                        >
                            Reserve a Table
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 60L1440 60L1440 30C1440 30 1320 0 1200 0C1080 0 960 30 840 30C720 30 600 0 480 0C360 0 240 30 120 30C60 30 0 15 0 15L0 60Z" fill="#FAF8F5" />
                </svg>
            </div>
        </section>
    );
}

function FeaturedMenuSection() {
    return (
        <section className="py-16 sm:py-20 bg-bb-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold font-display text-bb-dark mb-3">
                        Our Favourites
                    </h2>
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <span className="h-px w-8 bg-bb-orange"></span>
                        <span className="text-bb-orange text-sm">★</span>
                        <span className="h-px w-8 bg-bb-orange"></span>
                    </div>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Handcrafted with premium ingredients by our hotel-trained kitchen team
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                        >
                            <div className="h-48 bg-gradient-to-br from-bb-dark to-bb-dark-50 flex items-center justify-center relative overflow-hidden">
                                <span className="text-6xl">🍔</span>
                                <div className="absolute inset-0 bg-bb-red/0 group-hover:bg-bb-red/10 transition-colors duration-300"></div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-bb-dark text-lg mb-1 font-display">
                                    {item.name}
                                </h3>
                                <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                                    {item.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-bb-red font-bold text-xl">
                                        {item.price.toLocaleString()} Ft
                                    </span>
                                    <div className="flex gap-1">
                                        {item.allergens.map((a) => (
                                            <span
                                                key={a}
                                                className="text-xs bg-bb-cream px-2 py-0.5 rounded-full text-gray-500"
                                            >
                                                {a}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link
                        href="/menu"
                        className="inline-flex items-center space-x-2 text-bb-red hover:text-bb-red-600 font-semibold transition-colors group"
                    >
                        <span>View Full Menu</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function OpeningHoursSection() {
    const hours = [
        { day: 'Monday – Friday', time: '11:00 – 22:00' },
        { day: 'Saturday', time: '11:00 – 23:00' },
        { day: 'Sunday', time: '12:00 – 21:00' },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-bb-dark rounded-2xl p-8 sm:p-10 shadow-xl">
                        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                            Opening Hours
                        </h2>
                        <div className="h-1 w-16 bg-bb-orange rounded-full mb-6"></div>

                        <div className="space-y-4">
                            {hours.map((h, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
                                >
                                    <span className="text-gray-400 text-sm sm:text-base">{h.day}</span>
                                    <span className="text-bb-gold font-semibold text-sm sm:text-base">{h.time}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <Link
                                href="/reservations/create"
                                className="inline-block bg-bb-red hover:bg-bb-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                Reserve a Table
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold font-display text-bb-dark">
                            Visit us in Budapest
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Located in the heart of Budapest's District VI, Big Bite brings you
                            restaurant-quality burgers, wraps, and doner — prepared by chefs
                            trained in some of the finest hotel kitchens in the city.
                        </p>
                        <div className="bg-bb-cream rounded-xl p-6">
                            <div className="flex items-start space-x-3">
                                <span className="text-bb-red text-xl mt-0.5">📍</span>
                                <div>
                                    <p className="font-semibold text-bb-dark">1064 Budapest</p>
                                    <p className="text-gray-600">Podmaniczky u. 57.</p>
                                    <p className="text-gray-500 text-sm mt-1">District VI, near Nyugati Railway Station</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 italic">
                            🌾 Gluten-free options also available on special request
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MapSection() {
    return (
        <section className="py-16 bg-bb-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold font-display text-bb-dark mb-3">
                        Find Us
                    </h2>
                    <p className="text-gray-600">1064 Budapest, Podmaniczky u. 57.</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                    <div className="bg-gray-200 h-80 sm:h-96 flex items-center justify-center relative">
                        <iframe
                            title="Big Bite Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.338!2d19.0565!3d47.5125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc4a18a7a8b9%3A0x0!2sPodmaniczky%20u.%2057%2C%20Budapest%201064!5e0!3m2!1sen!2shu!4v1"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ReviewsSection() {
    const reviews = [
        {
            id: 1,
            author: 'Anna K.',
            rating: 5,
            text: 'Best burgers in Budapest! The BigBite Special is absolutely amazing. You can really taste the quality of the ingredients.',
            time: '2 weeks ago',
        },
        {
            id: 2,
            author: 'Márk T.',
            rating: 5,
            text: 'The doner wrap is incredible — perfectly seasoned chicken with fresh vegetables. Will definitely come back!',
            time: '1 month ago',
        },
        {
            id: 3,
            author: 'Sophie L.',
            rating: 4,
            text: 'Great falafel options for vegetarians. The hummus plate is very generous. Nice atmosphere too.',
            time: '1 month ago',
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold font-display text-bb-dark mb-3">
                        What Our Guests Say
                    </h2>
                    <div className="flex items-center justify-center space-x-1 text-bb-orange text-xl mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <span key={s}>★</span>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm">Based on Google Reviews</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-bb-cream rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center space-x-1 text-bb-orange mb-3">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <span key={s} className={s <= review.rating ? '' : 'opacity-30'}>
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                                "{review.text}"
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-bb-dark text-sm">{review.author}</span>
                                <span className="text-gray-400 text-xs">{review.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <SiteLayout>
            <Head title="Home" />

            <HeroSection />
            <FeaturedMenuSection />
            <ReviewsSection />
            <OpeningHoursSection />
            <MapSection />
        </SiteLayout>
    );
}
