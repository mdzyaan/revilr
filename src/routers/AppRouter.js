import React from 'react';
import { Router , Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import SearchPage from '../components/SearchPage';
import DetailPage from '../components/DetailPage';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import GenrePage from '../components/GenrePage';
import ComingSoonPage from '../components/ComingSoonPage';
import RecentlyWatched from '../components/RecentlyWatched'
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export const history = createHistory();
PublicRoute
const AppRouter = () => (
    <Router history={history}>
        <div>  
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/home" component={HomePage} exact={true} />
                <PrivateRoute path="/search" component={SearchPage} />
                <PrivateRoute path="/detail/:id" component={DetailPage} exact={false} />
                <PrivateRoute path="/genre/:id" component={GenrePage} />
                <PrivateRoute path="/comingsoon/" component={ComingSoonPage} />
                <PrivateRoute path="/recent/" component={RecentlyWatched} />
                <PublicRoute component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter; 