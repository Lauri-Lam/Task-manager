export type Reservation = {
    id: number,
    name: string,
    email: string,
    date: string,
    time: string,
    partySize: number,
    status: "confirmed" | "cancelled"
};

export type AddReservationData = {
    name: string,
    email: string,
    date: string,
    time: string,
    partySize: number
};