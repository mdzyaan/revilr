import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchPage from '../components/SearchPage';
import DetailPage from '../components/DetailPage';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import GenrePage from '../components/GenrePage';
import ComingSoonPage from '../components/ComingSoonPage';
import RecentlyWatched from '../components/RecentlyWatched'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/search" component={SearchPage} />
                <Route path="/detail/:id" component={DetailPage} exact={false} />
                <Route path="/genre/:id" component={GenrePage} />
                <Route path="/comingsoon/" component={ComingSoonPage} />
                <Route path="/recent/" component={RecentlyWatched} />
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter; 