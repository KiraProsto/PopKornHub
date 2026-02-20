import styles from './MovieCard.module.scss'
import type { Movie } from '../../types/Movie';

export default function MovieCard({ movie }: { movie: Movie}){
    const imageURL = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/favicon.png";

    return(
        <div className={styles.card}>
            <img src={imageURL} alt={movie.title} className={styles.image}/>
            <div className={styles.title}>
                {movie.title}
            </div>
        </div>
    )
}