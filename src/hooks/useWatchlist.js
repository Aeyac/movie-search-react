import { load, save } from "../utils/localStorage"
import { createWatchlistEntry } from "../utils/createWatchlistEntry"

import { useState, useCallback, useEffect } from "react"


export function useWatchList() {
    const [watchlist, setWatchList] = useState(() => load("watchlist", []));

    useEffect(() => {
        save("watchlist", watchlist);
    }, [watchlist])

    const addMovie = useCallback((omdbMovie) => {
        if (omdbMovie === null) return
        setWatchList([...watchlist, createWatchlistEntry(omdbMovie)])
    }, [watchlist])

    const removeMovie = useCallback((id) => {
        setWatchList(watchlist.filter((movie) => movie.id !== id));
    }, [watchlist])

    const toggleWatched = useCallback((id) => {
        setWatchlist(watchlist.map((movie) =>
            movie.id === id ? { ...movie, watched: !movie.watched } : movie
        ))
    }, [watchlist])

    return { watchlist, addMovie, removeMovie, toggleWatched }
}