import type { Reservation } from "../types/reservation";

type ReservationListProps = {
    reservations: Reservation[];
    onCancel: (id: number) => void;
};

const ReservationList = ({ reservations, onCancel }: ReservationListProps) => {
    return (
        <div className="w-100 overflow-auto">
            <ul className="list-group mb-4" style={{ minWidth: "800px"}}>
                <li className="list-group-item">
                    <div className="row w-100">
                        <span className="col-2 text-nowrap">Name</span>
                        <span className="col-3 text-nowrap">Email</span>
                        <span className="col-2 text-nowrap">Date</span>
                        <span className="col-1 text-nowrap">Time</span>
                        <span className="col-1 text-nowrap">Party size</span>
                        <span className="col-1 text-nowrap">Status</span>
                    </div>
                </li>
                {reservations.map(reservation => (
                    <li key={reservation.id} className="list-group-item">
                        <div className="row w-100">
                            <span className="col-2 text-nowrap">{reservation.name}</span>
                            <span className="col-3 text-nowrap">{reservation.email}</span>
                            <span className="col-2 text-nowrap">{reservation.date}</span>
                            <span className="col-1 text-nowrap">{reservation.time}</span>
                            <span className="col-1 text-nowrap">{reservation.partySize}</span>
                            <span className="col-1 text-nowrap">
                                <span className={
                                    reservation.status === "confirmed" ?
                                    "badge text-bg-success" :
                                    "badge text-bg-secondary"}
                                    >{reservation.status}
                                </span>
                            </span>
                            <div className="col-2 d-flex justify-content-end">
                                {reservation.status === "confirmed" && (
                                    <button
                                    onClick={() => onCancel(reservation.id)}
                                    className="btn btn-outline-danger btn-sm"
                                    >Cancel</button>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReservationList;