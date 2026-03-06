<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReservationController extends Controller
{
    public function index(Request $request)
    {
        $reservations = $request->user()
            ->reservations()
            ->orderByDesc('date')
            ->orderByDesc('time')
            ->get();

        return Inertia::render('Reservations/Index', [
            'reservations' => $reservations,
        ]);
    }

    public function create()
    {
        return Inertia::render('Reservations/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'guest_name' => 'required|string|max:255',
            'guest_email' => 'required|email|max:255',
            'guest_phone' => 'nullable|string|max:50',
            'date' => 'required|date|after:today',
            'time' => 'required|string',
            'party_size' => 'required|integer|min:1|max:8',
            'special_requests' => 'nullable|string|max:1000',
        ]);

        $request->user()->reservations()->create($validated);

        return redirect()->route('reservations.index')
            ->with('success', 'Reservation created successfully!');
    }

    public function edit(Request $request, Reservation $reservation)
    {
        if ($reservation->user_id !== $request->user()->id) {
            abort(403);
        }

        return Inertia::render('Reservations/Edit', [
            'reservation' => $reservation,
        ]);
    }

    public function update(Request $request, Reservation $reservation)
    {
        if ($reservation->user_id !== $request->user()->id) {
            abort(403);
        }

        $validated = $request->validate([
            'guest_name' => 'required|string|max:255',
            'guest_email' => 'required|email|max:255',
            'guest_phone' => 'nullable|string|max:50',
            'date' => 'required|date|after:today',
            'time' => 'required|string',
            'party_size' => 'required|integer|min:1|max:8',
            'special_requests' => 'nullable|string|max:1000',
        ]);

        $reservation->update($validated);

        return redirect()->route('reservations.index')
            ->with('success', 'Reservation updated successfully!');
    }

    public function destroy(Request $request, Reservation $reservation)
    {
        if ($reservation->user_id !== $request->user()->id) {
            abort(403);
        }

        $reservation->update(['status' => 'cancelled']);

        return redirect()->route('reservations.index')
            ->with('success', 'Reservation cancelled.');
    }
}
