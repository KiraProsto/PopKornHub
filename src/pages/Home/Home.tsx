import  {useEffect, useState } from 'react';
import { getMoviesByCategory } from '../../api/movies';

export default function Home(){
    const [popular, setPopular] =useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() =>{
        async function loadMovies() {
            const popularMovies = await getMoviesByCategory('popular');
            const topRatedMovies = await getMoviesByCategory('top_rated');
            const upcomingMovies = await getMoviesByCategory('upcoming');

            setPopular(popularMovies);
            setTopRated(topRatedMovies);
            setUpcoming(upcomingMovies);
        }

        loadMovies();
    }, []); 

    return(
        <div>
            <h1>Популярные</h1>
            <ul>
                {popular.map((movie: any) => (
                    <li key = {movie.id}>
                        {movie.title}
                    </li>
                ))}
            </ul>

            <h1>Топ рейтинга</h1>
            <ul>
                {topRated.map((movie: any) => (
                    <li key = {movie.id}>
                        {movie.title}
                    </li>
                ))}
            </ul>

            <h1>Скоро в эфире!</h1>
            <ul>
                {upcoming.map((movie: any) => (
                    <li key = {movie.id}>
                        {movie.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}