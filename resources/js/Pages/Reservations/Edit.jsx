import SiteLayout from '@/Layouts/SiteLayout';
import { Head, useForm } from '@inertiajs/react';
import { useMemo } from 'react';

function generateTimeSlots() {
    const slots = [];
    for (let hour = 11; hour <= 21; hour++) {
        slots.push(`${hour.toString().padStart(2, '0')}:00`);
        if (hour < 21 || hour === 21) {
            slots.push(`${hour.toString().padStart(2, '0')}:30`);
        }
    }
    return slots;
}

const timeSlots = generateTimeSlots();
const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Edit({ reservation }) {
    const { data, setData, put, processing, errors } = useForm({
        guest_name: reservation.guest_name || '',
        guest_email: reservation.guest_email || '',
        guest_phone: reservation.guest_phone || '',
        date: reservation.date || '',
        time: reservation.time || '',
        party_size: String(reservation.party_size || '2'),
        special_requests: reservation.special_requests || '',
    });

    const tomorrow = useMemo(() => {
        const d = new Date();
        d.setDate(d.getDate() + 1);
        return d.toISOString().split('T')[0];
    }, []);

    const maxDate = useMemo(() => {
        const d = new Date();
        d.setDate(d.getDate() + 30);
        return d.toISOString().split('T')[0];
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('reservations.update', reservation.id));
    };

    return (
        <SiteLayout>
            <Head title="Edit Reservation" />
            <section className="bg-bb-dark py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-3">
                        Edit Reservation
                    </h1>
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <span className="h-px w-12 bg-bb-gold"></span>
                        <span className="text-bb-gold text-sm tracking-[0.2em] uppercase">
                            Update your booking
                        </span>
                        <span className="h-px w-12 bg-bb-gold"></span>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-bb-cream">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-md p-8">
                        <h2 className="text-2xl font-bold font-display text-bb-dark mb-6">
                            Your Details
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    value={data.guest_name}
                                    onChange={(e) => setData('guest_name', e.target.value)}
                                    required
                                    className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-3"
                                    placeholder="Your full name"
                                />
                                {errors.guest_name && <p className="text-red-500 text-xs mt-1">{errors.guest_name}</p>}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        value={data.guest_email}
                                        onChange={(e) => setData('guest_email', e.target.value)}
                                        required
                                        className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-3"
                                        placeholder="your@email.com"
                                    />
                                    {errors.guest_email && <p className="text-red-500 text-xs mt-1">{errors.guest_email}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        value={data.guest_phone}
                                        onChange={(e) => setData('guest_phone', e.target.value)}
                                        required
                                        className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-3"
                                        placeholder="+36 XX XXX XXXX"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Date *
                                    </label>
                                    <input
                                        type="date"
                                        value={data.date}
                                        onChange={(e) => setData('date', e.target.value)}
                                        min={tomorrow}
                                        max={maxDate}
                                        required
                                        className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-3"
                                    />
                                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Party Size *
                                    </label>
                                    <select
                                        value={data.party_size}
                                        onChange={(e) => setData('party_size', e.target.value)}
                                        required
                                        className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-3"
                                    >
                                        {partySizes.map((size) => (
                                            <option key={size} value={size}>
                                                {size} {size === 1 ? 'person' : 'people'}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Preferred Time *
                                </label>
                                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                                    {timeSlots.map((slot) => (
                                        <button
                                            key={slot}
                                            type="button"
                                            onClick={() => setData('time', slot)}
                                            className={`py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                                                data.time === slot
                                                    ? 'bg-bb-red text-white shadow-md scale-105'
                                                    : 'bg-bb-cream text-gray-700 hover:bg-bb-cream-dark'
                                            }`}
                                        >
                                            {slot}
                                        </button>
                                    ))}
                                </div>
                                {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Special Requests
                                </label>
                                <textarea
                                    value={data.special_requests}
                                    onChange={(e) => setData('special_requests', e.target.value)}
                                    rows={3}
                                    className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20"
                                    placeholder="Any dietary requirements, celebrations, high chair needed, etc."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={processing || !data.time}
                                className="w-full bg-bb-red hover:bg-bb-red-600 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {processing ? 'Saving...' : 'Update Reservation'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
