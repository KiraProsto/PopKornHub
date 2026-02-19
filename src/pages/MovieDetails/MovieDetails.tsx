import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import type { Movie } from "../../types/Movie";
import { getMovieDetails } from "../../api/movies";
import './MovieDetails.scss'

interface IMovieLocationState {
  category: string;
}

export default function MovieDetails() {
    const {id} = useParams();
    const location = useLocation() as ReturnType<typeof useLocation> & {state: IMovieLocationState};
    const category = location.state?.category;

    const [movie, setMovie] = useState<Movie | null>(null);
    const [favorite, setFavorite] = useState(false)

    useEffect(()=>{
        async function load(){
            if (!id) return;
            const data = await getMovieDetails(id);
            setMovie(data);

            const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
            setFavorite(favs.some((f: Movie) => f.id === data.id));
        }
        load();
    }, [id]);

    function toggleFavorite() {
        if(!movie) return;

        const favs = JSON.parse(localStorage.getItem('favorites') || '[]');

        if(favorite) {
            const updated = favs.filter((f: Movie) => f.id !== movie.id);
            localStorage.setItem('favorites', JSON.stringify(updated));
            setFavorite(false);
        } else {
            const updated = [...favs, {...movie, category}];
            localStorage.setItem('favorites', JSON.stringify(updated));
            setFavorite(true);
        }
    }

    if(!movie){
        return <div className="movie-details__loading">
            Загрузка...
        </div>;
    }


    return(
        <div className={`movie-details movie-details--${category}`}>
            <div className="movie-details__content">

                <h1 className="movie-details__title">{movie.title.toUpperCase()}</h1>
                <p className="movie-details__overview">{movie.overview}</p>
                <div className='movie-details__tag'>
                    {category}
                </div>

                <button className={`movie-details__button movie-details__button--${category}`} onClick={toggleFavorite} >
                    {favorite ? "Убрать из избранного" : "Добавить в избранное"}
                </button>
            </div>

            <div className="movie-details__image-wrapper">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-details__poster" />
                <div className="movie-details__gradient"></div>
            </div>
        </div>
    ) 
}