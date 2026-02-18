import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home/Home";
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Favorites from '../pages/Favorites/Favorites';

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Home />}/>
                <Route path = '/movie/:id' element = {<MovieDetails />}/>
                <Route path = '/favorites' element = {<Favorites />}/>
            </Routes>
        </BrowserRouter>
    )
}