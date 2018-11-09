import React from 'react';
import axios from 'axios';
import { key, proxy } from '../config';
import Card from './Card';
import { Link } from 'react-router-dom';
import uuid from 'uuid';


export default class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameList: [],
        }
    }
    componentDidMount() {
        const gameList = this.props.gameList.map(game => {
            if (game.game) {
                return (
                    <Card addCn='' key={uuid()} game={game.game}/>
                )
            } else {
                return (
                    <Card addCn='' key={uuid()} game={game}/>
                ) 
            }
            
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

    
 