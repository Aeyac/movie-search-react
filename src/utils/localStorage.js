// https://www.omdbapi.com/?t=spiderman&apikey=4e14fe17 API KEY


export const load = (key, fallback) => {
    try {
        const data = localStorage.getItem("key");
        return data ? JSON.parse(data) : fallback;
    }
    catch {
        return fallback;
    }
}

export const save = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    }
    catch {
        console.error("Failed to save changes"); // or change this to alert()
        alert("Faield to save changes")
    }
}

