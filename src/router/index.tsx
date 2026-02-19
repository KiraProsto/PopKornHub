import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home/Home";
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Favorites from '../pages/Favorites/Favorites';
import Header from '../components/Header/Header';

export default function Router() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path = '/' element = {<Home />}/>
                <Route path = '/movie/:id' element = {<MovieDetails />}/>
                <Route path = '/favorites' element = {<Favorites />}/>
            </Routes>
        </BrowserRouter>
    )
}