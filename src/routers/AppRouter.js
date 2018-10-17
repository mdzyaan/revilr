import React from 'react';
import { BrowserRouter , Route, Switch, Link, NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchPage from '../components/SearchPage';
import DetailPage from '../components/DetailPage';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/search" component={SearchPage} />
                <Route path="/detail/:id" component={DetailPage} />
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter; 