// components/FilterBar.jsx
export default function FilterBar({ filter, onFilterChange }) {
    return (
        <div>
            <button
                onClick={() => onFilterChange("all")}
                style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
            >
                All
            </button>
            <button
                onClick={() => onFilterChange("watched")}
                style={{ fontWeight: filter === "watched" ? "bold" : "normal" }}
            >
                Watched
            </button>
            <button
                onClick={() => onFilterChange("unwatched")}
                style={{ fontWeight: filter === "unwatched" ? "bold" : "normal" }}
            >
                Unwatched
            </button>
        </div>
    )
}