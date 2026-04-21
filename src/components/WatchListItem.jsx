export default function WatchlistItem({ movie, onRemove, onToggleWatched }) {
    return (
        <div>
            <img
                src={movie.poster}
                alt={movie.title}
                onError={(e) => e.target.src = "/no-poster.png"}
            />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <p>{movie.watched ? "Watched" : "Not watched"}</p>
            <button onClick={() => onToggleWatched(movie.id)}>
                {movie.watched ? "Mark as Unwatched" : "Mark as Watched"}
            </button>
            <button onClick={() => onRemove(movie.id)}>
                Remove
            </button>
        </div>
    )
}