import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, usePage, router } from '@inertiajs/react';

export default function Show({ message }) {
    const { flash } = usePage().props;

    const { data, setData, put, processing } = useForm({
        admin_reply: message.admin_reply || '',
        is_read: true,
    });

    const handleReply = (e) => {
        e.preventDefault();
        put(route('admin.messages.update', message.id));
    };

    const handleDelete = () => {
        if (confirm('Biztosan törölni szeretnéd ezt az üzenetet?')) {
            router.delete(route('admin.messages.destroy', message.id));
        }
    };

    return (
        <AdminLayout title="Message Details">
            <Head title="Admin - Message" />

            <div className="max-w-3xl space-y-6">
                {flash?.success && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">{flash.success}</div>
                )}

                {/* Message Details Card */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">{message.subject}</h2>
                            <p className="text-sm text-gray-400 mt-1">
                                {new Date(message.created_at).toLocaleString('hu-HU')}
                            </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${message.is_read ? 'bg-gray-100 text-gray-500' : 'bg-bb-red/10 text-bb-red'}`}>
                            {message.is_read ? 'Olvasott' : 'Új'}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-wider">Név</p>
                            <p className="font-medium text-gray-900">{message.name}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                            <a href={`mailto:${message.email}`} className="font-medium text-bb-red hover:underline">{message.email}</a>
                        </div>
                        {message.phone && (
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Telefon</p>
                                <a href={`tel:${message.phone}`} className="font-medium text-bb-red hover:underline">{message.phone}</a>
                            </div>
                        )}
                    </div>

                    <div className="prose prose-gray max-w-none">
                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{message.message}</p>
                    </div>
                </div>

                {/* Admin Reply */}
                <form onSubmit={handleReply} className="bg-white rounded-2xl shadow-sm p-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Admin válasz</h3>
                    <textarea
                        value={data.admin_reply}
                        onChange={(e) => setData('admin_reply', e.target.value)}
                        rows={5}
                        placeholder="Írj választ az üzenetre..."
                        className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 mb-4"
                    />
                    <div className="flex items-center space-x-4">
                        <button type="submit" disabled={processing} className="bg-bb-red hover:bg-bb-red-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all disabled:opacity-50">
                            {processing ? 'Mentés...' : message.admin_reply ? 'Válasz frissítése' : 'Válasz küldése'}
                        </button>
                    </div>
                </form>

                {/* Actions */}
                <div className="flex items-center justify-between">
                    <Link href={route('admin.messages.index')} className="text-gray-500 hover:text-gray-700 font-medium text-sm">
                        ← Vissza az üzenetekhez
                    </Link>
                    <button onClick={handleDelete} className="text-red-500 hover:text-red-700 text-sm font-medium">
                        Üzenet törlése
                    </button>
                </div>
            </div>
        </AdminLayout>
    );
}
