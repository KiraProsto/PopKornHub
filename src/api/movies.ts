const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export async function getMoviesByCategory(category: string) {
    const url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=ru-RU`;    
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}   

export async function getMovieDetails(id:string) {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ru-RU`;
    const response = await fetch(url);
    const data = await response.json();
    return data;    
}