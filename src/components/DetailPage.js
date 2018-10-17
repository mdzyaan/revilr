import React from 'react';
import { proxy, key } from '../config';
import axios from 'axios';
import CardList from './CardList';
export default class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {},
            gameList: []
        }
 
    }
    componentDidMount() {
        axios(`${proxy}https://api-endpoint.igdb.com/games/${this.props.match.params.id}`, {
            method: "GET",
            headers: {
                "user-key": `${key}`,
                "Accept": "application/json"
            }
        })
        .then(game => {
            this.setState(() => (
                { 
                    game,
                    gameList: [<CardList name={"Recommended Games"} game={game} />]
                }));
        }).catch(e => {
            console.log(e);
        })
    }
    render() {
        return (
            <div>
                This is DetailPage {this.props.match.params.id}
                {this.state.gameList && this.state.gameList[0]}
            </div>
        );
    }
}


