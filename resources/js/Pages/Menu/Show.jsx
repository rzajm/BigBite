import SiteLayout from '@/Layouts/SiteLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ menuItem, relatedItems }) {
    return (
        <SiteLayout>
            <Head title={`${menuItem.name} - Big Bite`} />

            {/* Breadcrumb */}
            <div className="bg-bb-cream border-b border-bb-gold/30">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <nav className="flex items-center space-x-2 text-sm text-gray-500">
                        <Link href={route('home')} className="hover:text-bb-red transition-colors">Home</Link>
                        <span>/</span>
                        <Link href={route('menu.index')} className="hover:text-bb-red transition-colors">Menu</Link>
                        <span>/</span>
                        <span className="text-bb-dark font-medium">{menuItem.name}</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-bb-cream to-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image / Emoji Placeholder */}
                        <div className="relative">
                            {menuItem.image ? (
                                <img
                                    src={`/storage/${menuItem.image}`}
                                    alt={menuItem.name}
                                    className="w-full aspect-square object-cover rounded-3xl shadow-2xl"
                                />
                            ) : (
                                <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-bb-red/10 to-bb-orange/10 flex items-center justify-center shadow-2xl">
                                    <span className="text-[120px]">{menuItem.emoji || '🍔'}</span>
                                </div>
                            )}
                            {menuItem.is_featured && (
                                <div className="absolute top-4 right-4 bg-bb-orange text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                                    ⭐ Kiemelt
                                </div>
                            )}
                        </div>

                        {/* Details */}
                        <div className="space-y-6">
                            {menuItem.category && (
                                <span className="inline-block bg-bb-red/10 text-bb-red px-4 py-1.5 rounded-full text-sm font-semibold">
                                    {menuItem.category.emoji} {menuItem.category.name}
                                </span>
                            )}

                            <h1 className="text-4xl lg:text-5xl font-bold text-bb-dark font-[Playfair_Display]">
                                {menuItem.emoji} {menuItem.name}
                            </h1>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                {menuItem.description}
                            </p>

                            <div className="text-4xl font-bold text-bb-red">
                                {menuItem.price} Ft
                            </div>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-4">
                                {menuItem.calories && (
                                    <div className="flex items-center space-x-2 bg-gray-50 rounded-xl px-4 py-2.5">
                                        <span className="text-lg">🔥</span>
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-wider">Kalória</p>
                                            <p className="font-bold text-bb-dark">{menuItem.calories} kcal</p>
                                        </div>
                                    </div>
                                )}
                                {menuItem.preparation_time && (
                                    <div className="flex items-center space-x-2 bg-gray-50 rounded-xl px-4 py-2.5">
                                        <span className="text-lg">⏱️</span>
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-wider">Elkészítés</p>
                                            <p className="font-bold text-bb-dark">{menuItem.preparation_time} perc</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Allergens */}
                            {menuItem.allergens?.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Allergének</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {menuItem.allergens.map((allergen) => (
                                            <span
                                                key={allergen.id}
                                                className="inline-flex items-center space-x-1.5 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1.5 rounded-full text-sm"
                                            >
                                                <span className="w-5 h-5 bg-amber-200 text-amber-800 rounded-full text-xs flex items-center justify-center font-bold">
                                                    {allergen.number}
                                                </span>
                                                <span>{allergen.name}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Order buttons */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="https://wolt.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 bg-[#009DE0] hover:bg-[#0088c2] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                                >
                                    <span>Rendelés Wolt-on</span>
                                </a>
                                <a
                                    href="https://www.foodora.hu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 bg-[#D70F64] hover:bg-[#c00d59] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                                >
                                    <span>Rendelés Foodora-n</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Items */}
            {relatedItems.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-bb-dark font-[Playfair_Display] mb-8">
                            További {menuItem.category?.name} ételek
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={route('menu.show', item.slug)}
                                    className="group bg-bb-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="aspect-square bg-gradient-to-br from-bb-red/5 to-bb-orange/5 flex items-center justify-center">
                                        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                                            {item.emoji || '🍔'}
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-bb-dark group-hover:text-bb-red transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-bb-red font-bold mt-1">{item.price} Ft</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Back to Menu */}
            <section className="py-8 bg-gray-50 text-center">
                <Link
                    href={route('menu.index')}
                    className="inline-flex items-center space-x-2 text-bb-red hover:text-bb-red-600 font-semibold transition-colors"
                >
                    <span>←</span>
                    <span>Vissza a teljes menühöz</span>
                </Link>
            </section>
        </SiteLayout>
    );
}
