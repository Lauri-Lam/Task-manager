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
                    className="mb-2 form-control"
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
                    className="mb-2 form-control"
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
                    className="mb-2 form-control"
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
                    className="mb-2 form-control"
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
                    className="mb-2 form-control"
                    value={partySize}
                    onChange={(e) => setPartySize(Number(e.target.value))}
                    />
            </label>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary mb-3" type="submit">Reserve</button>
            </div>
        </form>
    );
};

export default ReservationForm;