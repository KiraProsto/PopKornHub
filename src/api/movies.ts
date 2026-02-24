import type { TMDBMovie } from "../types/TMDBMovie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
if (!API_KEY) { 
    throw new Error( 
        "TMDB API key is missing. Please set VITE_TMDB_API_KEY in your .env file." 
    ); 
}
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export async function getMoviesByCategory(category: string) {
    const url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=ru-RU`;    
    const response = await fetch(url);

    if (!response.ok) { 
        throw new Error( 
            `Failed to fetch movies for category "${category}": ${response.status} ${response.statusText}` 
        ); 
    }

    const data = await response.json() as { results?: TMDBMovie[] };
    const results = Array.isArray(data.results) ? data.results : [];

    return results.map((movie)=> ({
        ...movie,
        category
    }));
}   

export async function getMovieDetails(id:string) {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ru-RU`;
    const response = await fetch(url);
    
    if (!response.ok) { 
        throw new Error( 
            `Failed to fetch movie details id "${id}": ${response.status} ${response.statusText}` 
        ); 
    }

    const data = await response.json();
    return data;    
}