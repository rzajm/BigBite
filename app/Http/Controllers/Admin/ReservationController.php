<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReservationController extends Controller
{
    public function index()
    {
        $reservations = Reservation::with('user')
            ->orderByDesc('date')
            ->orderByDesc('time')
            ->get();

        return Inertia::render('Admin/Reservations/Index', [
            'reservations' => $reservations,
        ]);
    }

    public function update(Request $request, Reservation $reservation)
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,confirmed,cancelled',
            'admin_notes' => 'nullable|string|max:1000',
        ]);

        $reservation->update($validated);

        return redirect()->route('admin.reservations.index')
            ->with('success', 'Reservation updated!');
    }
}
