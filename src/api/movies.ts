const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getMoviesByCategory(category: string) {
    const url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=ru-RU`;    
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map((movie: any)=> ({
        ...movie,
        category
    }));
}   

export async function getMovieDetails(id:string) {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ru-RU`;
    const response = await fetch(url);
    const data = await response.json();
    return data;    
}