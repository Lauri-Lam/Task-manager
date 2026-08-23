import React, { useState } from "react";
import type { AddReservationData } from "../types/reservation";

type ReservationFormProps = {
    onAdd: (data: AddReservationData) => void;
}

const ReservationForm = ({ onAdd }: ReservationFormProps) => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ date, setDate] = useState("");
    const [ time, setTime] = useState("");
    const [ partySize, setPartySize ] = useState(1);

    const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const reservationData: AddReservationData = {
            name,
            email,
            date,
            time,
            partySize
        };
        onAdd(reservationData);

        setName("");
        setEmail("");
        setDate("");
        setTime("");
        setPartySize(1);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="d-flex flex-column">
                Name:
                <input
                    required
                    type="text"
                    style={{ maxWidth: "300px" }}
                    className="mb-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
            </label>
            <label className="d-flex flex-column">
                Email:
                <input
                    required
                    type="email"
                    style={{ maxWidth: "300px" }}
                    className="mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
            </label>
            <label className="d-flex flex-column">
                Date:
                <input
                    required
                    type="date"
                    style={{ maxWidth: "300px" }}
                    className="mb-2"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    />
            </label>
            <label className="d-flex flex-column">
                Time:
                <input
                    required
                    type="time"
                    style={{ maxWidth: "300px" }}
                    className="mb-2"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    />
            </label>
            <label className="d-flex flex-column">
                Size of the party:
                <input
                    required
                    min={1}
                    type="number"
                    style={{ maxWidth: "300px" }}
                    className="mb-2"
                    value={partySize}
                    onChange={(e) => setPartySize(Number(e.target.value))}
                    />
            </label>
            <button className="btn btn-primary" type="submit">Reserve</button>
        </form>
    );
};

export default ReservationForm;