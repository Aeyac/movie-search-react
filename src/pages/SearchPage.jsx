import { useState } from "react"
import { useWatchlist } from "../hooks/useWatchlist"
import { useMovieSearch } from "../hooks/useMovieSearch"
import SearchBar from "../components/SearchBar"
import MovieCard from "../components/MovieCard"

export default function SearchPage() {
    const [query, setQuery] = useState("")
    const { results, loading, error } = useMovieSearch(query)
    const { addMovie } = useWatchlist()

    return (
        <div>
            <SearchBar onSearch={setQuery} />

            {loading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}

            {!loading && !error && results.length === 0 && (
                <h3>No results yet</h3>
            )}

            {results.length > 0 && (
                <div>
                    {results.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onAdd={addMovie}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}