export default function MovieCard({ movie, onAdd }) {
    return (
        <div>
            <img
                src={movie.poster}
                alt={movie.title}
                onError={(e) => e.target.src = "/no-poster.png"}
            />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <button onClick={() => onAdd(movie)}>
                Add to Watchlist
            </button>
        </div>
    )
}