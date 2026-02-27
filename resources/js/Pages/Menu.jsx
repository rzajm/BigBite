import SiteLayout from '@/Layouts/SiteLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const categories = [
    { id: 'all', name: 'All' },
    { id: 'doner', name: 'Doner Variety' },
    { id: 'burgers', name: 'Burgers' },
    { id: 'kids', name: 'Kids Special' },
    { id: 'vegetarian', name: 'Vegetarian' },
];

const allergenMap = {
    1: 'Gluten',
    2: 'Crustacean',
    3: 'Egg',
    4: 'Fish',
    5: 'Peanuts',
    6: 'Soybean',
    7: 'Milk',
    8: 'Nuts',
    9: 'Celery',
    10: 'Mustard',
    11: 'Sesame',
    12: 'Sulphites',
    13: 'Lupin',
    14: 'Molluscs',
};

const menuItems = [
    {
        id: 1,
        category: 'doner',
        name: 'Push Doner',
        description: 'Chicken, cucumber, tomato, onion, parsley & garlic mayo',
        price: 2490,
        allergens: [8, 2],
        emoji: '🌯',
    },
    {
        id: 2,
        category: 'doner',
        name: 'Tonton Doner',
        description: 'Chicken, onion, tomato, iceberg, parsley & garlic mayo',
        price: 2590,
        allergens: [8, 1],
        emoji: '🌯',
    },
    {
        id: 3,
        category: 'doner',
        name: 'Doner Wrap',
        description: 'Chicken, cucumber, onion, tomato, parsley & garlic mayo',
        price: 2590,
        allergens: [8, 1],
        emoji: '🌮',
    },
    {
        id: 4,
        category: 'burgers',
        name: 'BigBite Special Burger',
        description: 'Double beef patty, truffle mayo, iceberg, tomato, pickled cucumber, caramelized onion, BigBite special burger sauce',
        price: 3290,
        allergens: [2],
        isFeatured: true,
        emoji: '🍔',
    },
    {
        id: 5,
        category: 'burgers',
        name: 'Doner Burger',
        description: 'Special doner chicken, garlic mayo, tomato, onion, iceberg',
        price: 2790,
        allergens: [1],
        emoji: '🍔',
    },
    {
        id: 6,
        category: 'burgers',
        name: 'BAR.BQ Burger',
        description: 'Beef patty, tomato, onion, iceberg, BBQ sauce',
        price: 2690,
        allergens: [1],
        emoji: '🍔',
    },
    {
        id: 7,
        category: 'burgers',
        name: 'Double Cheese Burger',
        description: 'Beef patty, tomato, onion, iceberg, BBQ sauce',
        price: 3190,
        allergens: [7, 8, 1],
        emoji: '🍔',
    },
    {
        id: 8,
        category: 'burgers',
        name: 'Chicken Burger',
        description: 'Chicken patty, fresh tomato, onion, iceberg, mayonnaise',
        price: 2690,
        allergens: [2],
        emoji: '🍔',
    },
    {
        id: 9,
        category: 'burgers',
        name: 'BigBite Special Burger',
        nameNote: '(Right Menu)',
        description: 'Double beef patty, truffle mayo, iceberg, tomato, pickled cucumber, caramelized onion, BigBite special burger sauce',
        price: 3290,
        allergens: [2],
        hidden: true, // duplicate
    },
    {
        id: 10,
        category: 'burgers',
        name: 'Beef Burger',
        description: 'Beef patty, fresh tomato, onion, iceberg, pickled cucumber, cheese & classic burger sauce',
        price: 2490,
        allergens: [10],
        emoji: '🍔',
    },
    {
        id: 11,
        category: 'burgers',
        name: 'Doner Burger',
        nameNote: '(Combo)',
        description: 'Special doner chicken, garlic mayo, tomato, onion, iceberg',
        price: 2790,
        allergens: [8, 1],
        hidden: true, // duplicate
    },
    {
        id: 12,
        category: 'burgers',
        name: 'BAR.BQ Burger',
        nameNote: '(Combo)',
        description: 'Beef patty, tomato, onion, iceberg, BBQ sauce',
        price: 2690,
        allergens: [8, 7],
        hidden: true, // duplicate
    },
    {
        id: 13,
        category: 'burgers',
        name: 'Chicken Burger',
        nameNote: '(Combo)',
        description: 'Chicken patty, fresh tomato, onion, iceberg, mayonnaise',
        price: 2690,
        allergens: [8, 2, 10, 1],
        hidden: true,
    },
    {
        id: 14,
        category: 'kids',
        name: 'Chicken Nuggets & Fries',
        description: 'Crispy chicken nuggets served with golden fries',
        price: 1990,
        allergens: [10],
        emoji: '🍗',
    },
    {
        id: 15,
        category: 'vegetarian',
        name: 'Falafel Wrap',
        description: 'Falafel, arugula, tahini sauce, hummus',
        price: 2290,
        allergens: [8, 1],
        emoji: '🧆',
    },
    {
        id: 16,
        category: 'vegetarian',
        name: 'Falafel Hummus Plate',
        description: 'Homemade hummus, falafel, fresh vegetables, homemade bread',
        price: 2650,
        allergens: [2, 1, 10],
        emoji: '🥙',
    },
    {
        id: 17,
        category: 'vegetarian',
        name: 'Mezze Plate',
        description: 'Haydari, hummus, paprika hummus, falafel served with fresh vegetables & pita',
        price: 2990,
        allergens: [8, 6, 7],
        emoji: '🥗',
    },
];

const visibleItems = menuItems.filter((item) => !item.hidden);

function AllergenBadge({ number }) {
    const name = allergenMap[number] || `#${number}`;
    return (
        <span className="inline-flex items-center text-xs bg-bb-cream-dark px-2 py-0.5 rounded-full text-gray-600">
            <span className="w-4 h-4 bg-bb-orange/20 text-bb-orange text-[10px] font-bold rounded-full flex items-center justify-center mr-1">
                {number}
            </span>
            {name}
        </span>
    );
}

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedAllergens, setSelectedAllergens] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredItems = visibleItems.filter((item) => {
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        const matchesSearch =
            searchQuery === '' ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesAllergens =
            selectedAllergens.length === 0 ||
            !item.allergens.some((a) => selectedAllergens.includes(a));
        return matchesCategory && matchesSearch && matchesAllergens;
    });

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
                            {categories.map((cat) => (
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
                                    <span className="text-5xl">{item.emoji}</span>
                                    {item.isFeatured && (
                                        <span className="absolute top-3 right-3 bg-bb-orange text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
                                            ⭐ Featured
                                        </span>
                                    )}
                                    <span className="absolute top-3 left-3 bg-bb-dark/80 text-white text-xs px-3 py-1 rounded-full capitalize">
                                        {item.category}
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
                                        {item.allergens.map((a) => (
                                            <AllergenBadge key={a} number={a} />
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
