import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Movie } from "../../types/Movie";
import { getMovieDetails } from "../../api/movies";


export default function MovieDetails() {
    const {id} = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(()=>{
        async function load(){
            if (!id) return;
            const data = await getMovieDetails(id);
            setMovie(data);
        }
        load();
    }, [id]);

    if(!movie){
        return <div className="movie-details__loading">
            Загрузка...
        </div>;
    }

    return(
        <div className={`movie-details movie-details--${movie.category}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
            className="movie-details__poster" />
        </div>
    ) 
}