import SiteLayout from '@/Layouts/SiteLayout';
import { Head } from '@inertiajs/react';

const team = [
    {
        name: 'The Kitchen Team',
        role: 'Master Chefs',
        description:
            'Our kitchen team brings years of experience from some of Budapest\'s finest hotel restaurants. They bring that same attention to detail and quality to every burger, wrap, and doner we serve.',
        emoji: '👨‍🍳',
    },
    {
        name: 'Quality Ingredients',
        role: 'Always Fresh',
        description:
            'We source our ingredients daily from trusted local suppliers. Fresh vegetables, premium beef, and homemade sauces — that\'s what sets Big Bite apart.',
        emoji: '🥬',
    },
    {
        name: 'The Big Bite Way',
        role: 'Fast & Flavorful',
        description:
            'Street food doesn\'t have to mean compromising on taste. We combine the speed and accessibility of fast food with the flavour and presentation of fine dining.',
        emoji: '⚡',
    },
];

const values = [
    {
        icon: '🏆',
        title: 'Quality First',
        description: 'Hotel-trained chefs, premium ingredients, restaurant-level standards.',
    },
    {
        icon: '❤️',
        title: 'Made with Love',
        description: 'Every burger, every wrap — handcrafted to perfection, every single time.',
    },
    {
        icon: '🌍',
        title: 'Cultural Fusion',
        description: 'Hungarian hospitality meets Mediterranean & Middle Eastern flavours.',
    },
    {
        icon: '🌱',
        title: 'Something for Everyone',
        description: 'Meat lovers, vegetarians, kids — our menu has everyone covered.',
    },
];

export default function About() {
    return (
        <SiteLayout>
            <Head title="About Us" />            <section className="bg-bb-dark py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
                        Our Story
                    </h1>
                    <div className="flex items-center justify-center space-x-3 mb-8">
                        <span className="h-px w-12 bg-bb-gold"></span>
                        <span className="text-bb-gold text-sm tracking-[0.2em] uppercase">
                            Est. Budapest
                        </span>
                        <span className="h-px w-12 bg-bb-gold"></span>
                    </div>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                        Big Bite was born from a simple idea: what if the chefs behind the city's best
                        hotel restaurants brought their skills to the streets? The result is a place where
                        gourmet technique meets street-food soul — and every bite proves it.
                    </p>
                </div>
            </section>            <section className="py-16 bg-bb-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="h-80 sm:h-96 bg-gradient-to-br from-bb-dark via-bb-dark-50 to-bb-dark flex items-center justify-center">
                                <div className="text-center">
                                    <span className="text-7xl block mb-4">🍔</span>
                                    <p className="text-bb-gold font-display text-xl">Big Bite Kitchen</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-display text-bb-dark">
                                Where Gourmet Meets the Street
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Located at Podmaniczky u. 57 in the heart of Budapest's District VI,
                                Big Bite is where you'll find the unexpected: hotel-quality burgers,
                                authentic Mediterranean wraps, and perfectly spiced doner — all served
                                fast with a smile.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our kitchen team spent years working at some of Budapest's finest hotel
                                restaurants, mastering techniques that they now apply to every dish we serve.
                                The truffle mayo on our BigBite Special? That's hotel-quality. The hand-seasoned
                                falafel in our vegetarian wraps? Restaurant-level.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                But we believe great food shouldn't be reserved for white tablecloth restaurants.
                                That's why we created a warm, welcoming space where you can grab an incredible
                                meal — fast, affordable, and always made fresh.
                            </p>
                            <div className="bg-bb-dark rounded-xl p-5 mt-4">
                                <p className="text-bb-gold italic font-display text-lg">
                                    "Restaurant-quality taste, street-food soul"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold font-display text-bb-dark mb-3">
                            What Makes Us Special
                        </h2>
                        <div className="flex items-center justify-center space-x-3">
                            <span className="h-px w-8 bg-bb-orange"></span>
                            <span className="text-bb-orange text-sm">★</span>
                            <span className="h-px w-8 bg-bb-orange"></span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <div
                                key={i}
                                className="bg-bb-cream rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                            >
                                <span className="text-5xl block mb-4">{member.emoji}</span>
                                <h3 className="font-bold text-bb-dark text-xl font-display mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-bb-red text-sm font-medium mb-4">{member.role}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {member.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>            <section className="py-16 bg-bb-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold font-display text-bb-dark mb-3">
                            Our Values
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                            >
                                <span className="text-4xl block mb-3">{value.icon}</span>
                                <h3 className="font-bold text-bb-dark font-display mb-2">{value.title}</h3>
                                <p className="text-gray-500 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>            <section className="py-16 bg-bb-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold font-display text-white mb-4">Come Visit Us</h2>
                    <p className="text-gray-400 text-lg mb-2">
                        1064 Budapest, Podmaniczky u. 57.
                    </p>
                    <p className="text-gray-500 mb-8">
                        District VI — near Nyugati Railway Station
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://maps.google.com/?q=Podmaniczky+u.+57,+Budapest+1064"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-bb-red hover:bg-bb-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            📍 Get Directions
                        </a>
                        <a
                            href="https://wolt.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-bb-orange hover:bg-bb-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            🛵 Order on Wolt
                        </a>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
