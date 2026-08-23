import { useState, useEffect } from "react";
import ReservationForm from "./ReservationForm";
import type { AddReservationData, Reservation } from "../types/reservation";

const RestaurantReservationSystem = () => {

    const [ reservations, setReservations] = useState<Reservation[]>([]);

    const handleAddReservation = (data: AddReservationData) => {
        const nextId = reservations.length === 0 ? 1 : Math.max(...reservations.map(r => r.id)) + 1;

        const reservation: Reservation = {
            ...data,
            id: nextId,
            status: "confirmed"
        }

        setReservations(currentReservations => [...currentReservations, reservation]);

        console.log(reservations)
    };

    return (
        <div className="container mt-4">
            <div className="card shadow-sm rounded-3">
                <div className="d-flex flex-column align-items-center card-body">
                    <h1>Restaurant reservation form</h1>
                    <ReservationForm onAdd={handleAddReservation}/>
                </div>
            </div>
        </div>
    );
};

export default RestaurantReservationSystem;