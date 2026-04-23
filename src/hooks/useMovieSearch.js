import { useEffect, useState } from "react"
const KEY = "4e14fe17";


export default function useMovieSearch(query) {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        // reset state on every new search
        setError(null)
        setResults([])

        if (!query.trim()) return

        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(
                    `https://www.omdbapi.com/?s=${query}&apikey=${KEY}`
                )
                const data = await response.json()

                if (data.Response === "False") {
                    setError(data.Error)
                    return
                }

                const movies = data.Search.map(movie => ({
                    id: movie.imdbID,
                    title: movie.Title,
                    poster: movie.Poster,
                    year: movie.Year,
                }))

                setResults(movies)
            } catch {
                setError("Something went wrong. Please try again.")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [query])

    return { results, loading, error }
}