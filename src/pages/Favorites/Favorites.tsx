import { useState, useEffect } from "react"
import MovieCard from "../../components/MovieCard/MovieCard";
import type {Movie} from "../../types/Movie"
import './Favorites.scss'

export default function Favorites(){
    const[favorites, setFavorites] = useState<(Movie & { category?: string})[]>([]);

    useEffect(() => {
        function loadFavorites(){
            const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
            setFavorites(favs);
        }

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
                            onClick={() => {
                                const updated=favorites.filter((m) => m.id !== movie.id);
                                setFavorites(updated);
                                localStorage.setItem("favorites", JSON.stringify(updated));
                            }}
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