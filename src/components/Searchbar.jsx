import { useState } from "react";


export default function SearchBar({ onSearch }) {
    const [value, setValue] = useState("");

    return (
        <div>
            // didnt put type=text because there are movies that titles are just numbers
            <input onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => e.key === "Enter" && onSearch(value)} />
            <button disabled={!value.trim() ? true : false} onClick={() => onSearch(value)}> Search</button>
        </div>
    )

}