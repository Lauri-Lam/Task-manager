import { useState, useEffect } from "react";
import ReservationForm from "./ReservationForm";
import type { AddReservationData, Reservation } from "../types/reservation";
import ReservationList from "./ReservationList";
import ReservationFilter from "./ReservationFilter";

export type FilterType = "all" | "confirmed" | "cancelled";


const RestaurantReservationSystem = () => {
    const [filter, setFilter] = useState<FilterType>("all");
    const [ reservations, setReservations] = useState<Reservation[]>([
        {
            id: 1,
            name: "Lauri Lam",
            email: "laurilam360@gmail.com",
            date: "2026-08-12",
            time: "20:35",
            partySize: 15,
            status: "confirmed"
        }
    ]);

    let filteredReservations: Reservation[] = reservations;

    if (filter === "confirmed") {
        filteredReservations = filteredReservations.filter(
            reservation => reservation.status === "confirmed"
        );
    };

    if (filter === "cancelled") {
        filteredReservations = filteredReservations.filter(
            reservation => reservation.status === "cancelled"
        );
    };

    const handleAddReservation = (data: AddReservationData) => {
        const nextId = reservations.length === 0 ? 1 : Math.max(...reservations.map(r => r.id)) + 1;

        const reservation: Reservation = {
            ...data,
            id: nextId,
            status: "confirmed"
        }

        setReservations(currentReservations => [...currentReservations, reservation]);
    };

    const handleCancelReservation = (id: number) => {
        const reservation: Reservation|undefined = reservations.find(r => r.id === id);

        if (!reservation) return;

        const cancelledReservation: Reservation = {
            ...reservation,
            status: "cancelled"
        }
        setReservations(currentReservasions => currentReservasions.map(res => {
            if (res.id === cancelledReservation.id) {
                return cancelledReservation
            }
            return res
        }))
    };

    useEffect(() => {}, [])

    return (
        <div className="container mt-4">
            <div className="card shadow-sm rounded-3">
                <div className="d-flex flex-column align-items-center card-body">
                    <h1>Restaurant reservation form</h1>
                    <ReservationFilter onFilterChange={setFilter} filter={filter}/>
                    <ReservationForm onAdd={handleAddReservation}/>
                    <ReservationList reservations={filteredReservations} onCancel={handleCancelReservation} />
                </div>
            </div>
        </div>
    );
};

export default RestaurantReservationSystem;