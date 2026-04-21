import { useState } from "react"

export default function SearchBar({ onSearch }) {
    const [value, setValue] = useState("")

    const handleSearch = () => {
        if (!value.trim()) return
        onSearch(value)
        setValue("")
    }

    return (
        <div>
            {/* input has no type since movie titles can be numbers */}
            <input
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