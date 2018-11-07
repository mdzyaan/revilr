import React from 'react';
import Header from './Header';
import CardRow from './CardRow';
import { gameLists } from '../gameLists';


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
        }
    }

    render() {
        return (
            <div>
                <Header />
                <CardRow name={"Trending Games"} game={gameLists.data} />
            </div>
        );
    }
    
}

