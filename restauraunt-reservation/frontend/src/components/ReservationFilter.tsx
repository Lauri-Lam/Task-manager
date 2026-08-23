import type { FilterType } from "./RestaurantReservationSystem";

type ReservationFilterProps = {
    onFilterChange: (filter: FilterType) => void;
    filter: FilterType;
}

const ReservationFilter = ({ onFilterChange, filter }: ReservationFilterProps) => {
    return (
        <div>
            <button
                onClick={() => onFilterChange("all")}
                className={filter === "all" ? "btn btn-secondary" : "btn btn-outline-secondary"}
                >All</button>
            <button
                onClick={() => onFilterChange("confirmed")}
                className={filter === "confirmed" ? "btn btn-secondary" : "btn btn-outline-secondary"}
                > Confirmed</button>
            <button
                onClick={() => onFilterChange("cancelled")}
                className={filter === "cancelled" ? "btn btn-secondary" : "btn btn-outline-secondary"}
                >Cancelled</button>
        </div>
    );
};

export default ReservationFilter;