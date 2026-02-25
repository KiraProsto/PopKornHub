import type { TMDBMovie } from "../types/TMDBMovie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
if (!API_KEY) { 
    throw new Error( 
        "TMDB API key is missing. Please set VITE_TMDB_API_KEY in your .env file." 
    ); 
}
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
if (!BASE_URL) { 
    throw new Error(
        "TMDB base URL is missing. Please set VITE_TMDB_BASE_URL in your .env file."
    ); 
}

export async function getMoviesByCategory(category: string) {
    try{
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
    }catch (error) { 
        console.error(
            `Error in getMoviesByCategory(${category}):`, error
        ); 
        throw error;
    }
}   

export async function getMovieDetails(id:string) {
    try{
        const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ru-RU`;
        const response = await fetch(url);
        
        if (!response.ok) { 
            throw new Error( 
                `Failed to fetch movie details id "${id}": ${response.status} ${response.statusText}` 
            ); 
        }

        const data = await response.json();
        return data;    
    }catch(error){
        console.error(
            `Error in getMovieDetails(${id}):`, error
        ); 
        throw error;
    }
}