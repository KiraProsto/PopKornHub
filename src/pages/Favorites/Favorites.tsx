import { useEffect } from "react";
import { useFavoritesStore } from "../../store/favorites";
import MovieCard from "../../components/MovieCard/MovieCard";
import './Favorites.scss';

export default function Favorites(){
    const favorites = useFavoritesStore((state) => state.favorites);
    const loadFavorites = useFavoritesStore((state) => state.loadFavorites);
    const removeFavorites = useFavoritesStore((state) => state.removeFavorites);

    useEffect(() => {
        loadFavorites();
    }, []);

    if(!favorites.length){
        return(
            <div className="favorites favorites--empty">
                <h1 className="favorites__title"> Избранное </h1>
                <p className="favorites__empty-text">Вы еще не добавили ни одного фильма</p>
            </div>
        );
    }

    return(
        <div className="favorites">
            <h1 className="favorites__title">Избранное</h1>

            <div className="favorites__grid">
                {favorites.map((movie)=>(
                    <div className="favorites__item" key={movie.id} >
                        <button
                            type="button"
                            className="favorites__remove"
                            aria-label={`Удалить фильм ${movie.title} из избранного`}
                            onClick={() => removeFavorites(movie.id)}
                        >
                            ✕
                        </button>
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    )
}