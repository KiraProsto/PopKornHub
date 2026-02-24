import './MovieCard.scss'
import type { Movie } from '../../types/Movie';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }: { movie: Movie}){
    const imageURL = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/no-image.png";

    return(
        <Link 
            to = {`/movie/${movie.id}`} 
            state = {{category: movie.category}} 
            className="movie-card"
            aria-label={`Открыть страницу фильма ${movie.title}`}
        > 
            <img src={imageURL} alt={`Постер фильма ${movie.title}`} className="movie-card__image"/>
            <div className="movie-card__title">
                {movie.title}
            </div>
        </Link>
            
    )
}