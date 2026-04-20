
export function createWatchlistEntry(omdbMovie) {
  return {
    // normalized from OMDB — their keys → your keys
    id:      omdbMovie.imdbID,
    title:   omdbMovie.Title,
    poster:  omdbMovie.Poster,
    year:    omdbMovie.Year,
    type:    omdbMovie.Type,

    // your app's own data — OMDB doesn't know these exist
    watched:  false,
    addedAt:  Date.now(),
  }
}