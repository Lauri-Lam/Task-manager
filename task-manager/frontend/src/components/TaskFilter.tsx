export type FilterType = "all" | "active" | "completed";

type TaskFilterProps = {
    onFilterChange: (filter: FilterType) => void;
    filter: FilterType
}

const TaskFilter = ({ onFilterChange, filter }: TaskFilterProps) => {
    return (
        <>
            <button
                onClick={() => onFilterChange("all")}
                className={filter === "all" ?
                    "btn btn-secondary" :
                    "btn btn-outline-secondary"
                }>
                All
            </button>
            <button
                onClick={() => onFilterChange("active")}
                className={filter === "active" ?
                    "btn btn-secondary" :
                    "btn btn-outline-secondary"
                }
                >
                Active
            </button>
            <button
                onClick={() => onFilterChange("completed")}
                className={filter === "completed" ?
                    "btn btn-secondary" :
                    "btn btn-outline-secondary"
                }>
                Completed
            </button>
        </>
    );
};

export default TaskFilter;