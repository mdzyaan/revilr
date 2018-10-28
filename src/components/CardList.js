import React from 'react';
import axios from 'axios';
import { key, proxy } from '../config';
import Card from './Card';
import { Link } from 'react-router-dom';



export default class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameList: [],
        }
    }
    componentDidMount() {
        const gameList = this.props.gameList.map(game => {
            return (
                <Card addCn='' key={game.id} game={game}/>
            )
        })
        this.setState(() => ({gameList}))
    }
    render() {
        return (
            <div className="search__container">
                {this.state.gameList}
            </div>
        )
    }
}

    
 