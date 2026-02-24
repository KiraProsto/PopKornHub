import { useEffect, useState } from 'react';
import { getMoviesByCategory } from '../../api/movies';
import Carousel from '../../components/Carousel/Carousel';
import MovieCard from '../../components/MovieCard/MovieCard';
import type { Movie } from '../../types/Movie';
import './Home.scss'

export default function Home(){
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);

    const [error, setError] = useState<string | null>(null);
    
    useEffect(() =>{
        async function loadMovies() {
            try {
                const popularMovies = await getMoviesByCategory('popular');
                const topRatedMovies = await getMoviesByCategory('top_rated');
                const upcomingMovies = await getMoviesByCategory('upcoming');
                setPopular(Array.isArray(popularMovies) ? popularMovies : []);
                setTopRated(Array.isArray(topRatedMovies) ? topRatedMovies : []);
                setUpcoming(Array.isArray(upcomingMovies) ? upcomingMovies : []);
                setError(null);
            } catch (err) {
                console.error('Failed to load movies', err);
                setPopular([]);
                setTopRated([]);
                setUpcoming([]);
                setError('Failed to load movies');
            }
        }
        loadMovies();
    }, []); 

    return(
        <div className="home">
            <section className="home__intro">
                <h1 className="home__title">
                    Рады вас видеть в PopKornHub
                </h1>

                <p className="home__subtitle">
                    PopKornHub — это площадка, где ты можешь открывать новые фильмы, <br/>
                    смотреть рейтинги, изучать детали, добавлять любимые картины в избранное <br/>
                    и следить за новинками киноиндустрии.
                </p>
            </section>

            {error && <p className="home__error">{error}</p>}

            <Carousel title='Популярные ❯'>
                {popular.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </Carousel>

            <Carousel title='Топ рейтинга ❯'>
                {topRated.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </Carousel>

            <Carousel title='Скоро в эфире! ❯'>
                {upcoming.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </Carousel>
        </div>
    )
}