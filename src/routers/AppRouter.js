import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchPage from '../components/SearchPage';
import DetailPage from '../components/DetailPage';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import GenrePage from '../components/GenrePage';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/search" component={SearchPage} />
                <Route path="/detail/:id" component={DetailPage} exact={true} />
                <Route path="/genre/:id" component={GenrePage} />
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter; 