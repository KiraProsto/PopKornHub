import './MovieCard.scss'
import type { Movie } from '../../types/Movie';

export default function MovieCard({ movie }: { movie: Movie}){
    const imageURL = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/no-image.png";

    return(
        <div className="movie-card">
            <img src={imageURL} alt={movie.title} className="movie-card__image"/>
            <div className="movie-card__title">
                {movie.title}
            </div>
        </div>
    )
}