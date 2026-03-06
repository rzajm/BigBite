import SiteLayout from '@/Layouts/SiteLayout';
import { Head } from '@inertiajs/react';
import { useState, useMemo } from 'react';

function AllergenBadge({ allergen }) {
    return (
        <span className="inline-flex items-center text-xs bg-bb-cream-dark px-2 py-0.5 rounded-full text-gray-600">
            <span className="w-4 h-4 bg-bb-orange/20 text-bb-orange text-[10px] font-bold rounded-full flex items-center justify-center mr-1">
                {allergen.number}
            </span>
            {allergen.name}
        </span>
    );
}

export default function Menu({ categories = [], menuItems = [], allergens = [] }) {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedAllergens, setSelectedAllergens] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const categoryFilters = useMemo(() => [
        { id: 'all', name: 'All' },
        ...categories.map((c) => ({ id: c.slug, name: c.name })),
    ], [categories]);

    const allergenMap = useMemo(() => {
        const map = {};
        allergens.forEach((a) => { map[a.number] = a.name; });
        return map;
    }, [allergens]);

    const filteredItems = useMemo(() => menuItems.filter((item) => {
        const matchesCategory = activeCategory === 'all' || item.category?.slug === activeCategory;
        const matchesSearch =
            searchQuery === '' ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesAllergens =
            selectedAllergens.length === 0 ||
            !item.allergens?.some((a) => selectedAllergens.includes(a.number));
        return matchesCategory && matchesSearch && matchesAllergens;
    }), [menuItems, activeCategory, searchQuery, selectedAllergens]);

    const toggleAllergen = (id) => {
        setSelectedAllergens((prev) =>
            prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
        );
    };

    return (
        <SiteLayout>
            <Head title="Menu" />
            <section className="bg-bb-dark py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-3">
                        Our Menu
                    </h1>
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <span className="h-px w-12 bg-bb-gold"></span>
                        <span className="text-bb-gold text-sm tracking-[0.2em] uppercase">
                            Burgers • Wraps • Doner
                        </span>
                        <span className="h-px w-12 bg-bb-gold"></span>
                    </div>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        All our dishes are handcrafted with fresh, premium ingredients
                    </p>
                </div>
            </section>

            <section className="py-12 bg-bb-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Search menu items..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-3 px-4"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {categoryFilters.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                        activeCategory === cat.id
                                            ? 'bg-bb-red text-white shadow-md'
                                            : 'bg-bb-cream text-gray-600 hover:bg-bb-cream-dark'
                                    }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">
                                Hide items containing:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {Object.entries(allergenMap).map(([id, name]) => (
                                    <button
                                        key={id}
                                        onClick={() => toggleAllergen(Number(id))}
                                        className={`inline-flex items-center text-xs px-3 py-1.5 rounded-full transition-all ${
                                            selectedAllergens.includes(Number(id))
                                                ? 'bg-bb-red text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        <span className="font-semibold mr-1">{id}</span>
                                        {name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                        Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                            >
                                <div className="h-44 bg-gradient-to-br from-bb-dark to-bb-dark-50 flex items-center justify-center relative">
                                    <span className="text-5xl">{item.emoji || '🍽️'}</span>
                                    {item.is_featured && (
                                        <span className="absolute top-3 right-3 bg-bb-orange text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
                                            ⭐ Featured
                                        </span>
                                    )}
                                    <span className="absolute top-3 left-3 bg-bb-dark/80 text-white text-xs px-3 py-1 rounded-full capitalize">
                                        {item.category?.name || ''}
                                    </span>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="font-bold text-bb-dark text-lg font-display flex-1">
                                            {item.name}
                                        </h3>
                                        <span className="text-bb-red font-bold text-lg ml-3 whitespace-nowrap">
                                            {item.price.toLocaleString()} Ft
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {item.allergens?.map((a) => (
                                            <AllergenBadge key={a.id} allergen={a} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-16">
                            <span className="text-4xl block mb-4">🔍</span>
                            <p className="text-gray-500 text-lg">No items match your filters</p>
                            <button
                                onClick={() => {
                                    setActiveCategory('all');
                                    setSelectedAllergens([]);
                                    setSearchQuery('');
                                }}
                                className="mt-4 text-bb-red hover:text-bb-red-600 font-semibold"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                    <div className="mt-12 bg-white rounded-2xl p-6 shadow-sm">
                        <h3 className="font-semibold text-bb-dark mb-3 text-sm uppercase tracking-wider">
                            Allergen Information
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
                            {Object.entries(allergenMap).map(([id, name]) => (
                                <div key={id} className="flex items-center space-x-2 text-sm text-gray-600">
                                    <span className="w-5 h-5 bg-bb-orange/20 text-bb-orange text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0">
                                        {id}
                                    </span>
                                    <span>{name}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-400 mt-3 italic">
                            🌾 Gluten-free options also available on special request
                        </p>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
