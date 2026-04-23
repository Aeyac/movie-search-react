import { useState } from "react"

export default function SearchBar({ onSearch }) {
    const [value, setValue] = useState("")

    const handleSearch = () => {
        const query = value.trim()
        if (!query) return
        onSearch(query)
        setValue("")
    }

    return (
        <div>
            <label htmlFor="movie-search">Search movie title</label>
            <input
                id="movie-search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search for a movie..."
            />
            <button disabled={!value.trim()} onClick={handleSearch}>
                Search
            </button>
        </div>
    )

}