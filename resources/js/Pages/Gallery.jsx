import SiteLayout from '@/Layouts/SiteLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const galleryCategories = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'Food' },
    { id: 'interior', name: 'Interior' },
    { id: 'events', name: 'Events' },
];

const galleryImages = [
    { id: 1, category: 'food', title: 'BigBite Special Burger', emoji: '🍔', color: 'from-red-900 to-orange-900' },
    { id: 2, category: 'food', title: 'Doner Wrap', emoji: '🌮', color: 'from-amber-900 to-yellow-900' },
    { id: 3, category: 'food', title: 'Falafel Hummus Plate', emoji: '🧆', color: 'from-green-900 to-emerald-900' },
    { id: 4, category: 'interior', title: 'Restaurant Entrance', emoji: '🏪', color: 'from-bb-dark to-gray-800' },
    { id: 5, category: 'food', title: 'Mezze Plate', emoji: '🥗', color: 'from-lime-900 to-green-900' },
    { id: 6, category: 'interior', title: 'Cozy Seating Area', emoji: '🪑', color: 'from-stone-800 to-stone-900' },
    { id: 7, category: 'food', title: 'Chicken Burger', emoji: '🍔', color: 'from-orange-900 to-red-900' },
    { id: 8, category: 'events', title: 'Opening Night', emoji: '🎉', color: 'from-purple-900 to-pink-900' },
    { id: 9, category: 'food', title: 'Fresh Ingredients', emoji: '🥬', color: 'from-green-900 to-teal-900' },
    { id: 10, category: 'interior', title: 'Kitchen in Action', emoji: '👨‍🍳', color: 'from-gray-800 to-gray-900' },
    { id: 11, category: 'events', title: 'Weekend Rush', emoji: '🎊', color: 'from-blue-900 to-indigo-900' },
    { id: 12, category: 'food', title: 'Double Cheese Burger', emoji: '🧀', color: 'from-yellow-900 to-amber-900' },
];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [lightboxImage, setLightboxImage] = useState(null);

    const filteredImages = galleryImages.filter(
        (img) => activeCategory === 'all' || img.category === activeCategory
    );

    return (
        <SiteLayout>
            <Head title="Gallery" />
            <section className="bg-bb-dark py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-3">
                        Gallery
                    </h1>
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <span className="h-px w-12 bg-bb-gold"></span>
                        <span className="text-bb-gold text-sm tracking-[0.2em] uppercase">
                            A Taste Through the Lens
                        </span>
                        <span className="h-px w-12 bg-bb-gold"></span>
                    </div>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Take a peek inside Big Bite — our food, our space, our community
                    </p>
                </div>
            </section>

            <section className="py-12 bg-bb-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-2 justify-center mb-10">
                        {galleryCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                                    activeCategory === cat.id
                                        ? 'bg-bb-red text-white shadow-md'
                                        : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredImages.map((img) => (
                            <button
                                key={img.id}
                                onClick={() => setLightboxImage(img)}
                                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3]"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${img.color} flex items-center justify-center`}>
                                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                                        {img.emoji}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                                    <div className="p-4 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-white font-semibold text-sm">{img.title}</p>
                                        <p className="text-white/70 text-xs capitalize">{img.category}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            {lightboxImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl"
                        onClick={() => setLightboxImage(null)}
                    >
                        ✕
                    </button>
                    <div
                        className="max-w-3xl w-full bg-bb-dark rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={`h-80 sm:h-96 bg-gradient-to-br ${lightboxImage.color} flex items-center justify-center`}>
                            <span className="text-8xl">{lightboxImage.emoji}</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-white font-bold font-display text-xl mb-1">
                                {lightboxImage.title}
                            </h3>
                            <p className="text-gray-400 text-sm capitalize">{lightboxImage.category}</p>
                        </div>
                    </div>
                </div>
            )}
        </SiteLayout>
    );
}
