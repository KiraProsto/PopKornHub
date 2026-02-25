import {Routes, Route} from 'react-router-dom';
import Home from "../pages/Home/Home";
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Favorites from '../pages/Favorites/Favorites';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Router() {
    return(
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/movie/:id' element={<MovieDetails />} />
                    <Route path='/favorites' element={<Favorites />} />
                </Routes>
            </main>
            <Footer/>
        </>
    )
}