import React from 'react';
import axios from 'axios';
import { key, proxy } from '../config';
import Card from './Card';
export default class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameList: []
        }
    }
    componentDidMount() {
        this.setState(() => ({games: this.props.game.data[0].games}))
        const gameArr = this.props.game.data[0].games;
        
        const gameList = gameArr.map(game => {
            axios(`${proxy}https://api-endpoint.igdb.com/games/${game}`, {
                method: "GET",
                headers: {
                    "user-key": `${key}`,
                    "Accept": "application/json"
                }
            })
            .then(games => {
                const gamesId = games.data[0].id;
                const gamesDetail = games.data[0];
                this.setState((prevState) => {
                    return {
                        gameList: prevState.gameList.concat(<Card addCn={"cardss__post-card"} key={gamesId} game={gamesDetail}/>)
                    }
                });
            });
        });
    }
    render() {
        
        return (
            <section data-aos="fade-in"  data-aos-duration="2000" className="cardss">
                <div className="cardss__title">
                    <h1 className="cardss__title-head">Recommended</h1>
                    <div className="cardss__title-line"></div>
                </div>
                <div className="cardss__post">
                {this.state.gameList}
                </div>
                <div className="cardss__button button__wrapper">
                    <button className="cardss__button-button button__wrapper-btn">
                    View All
                    </button>
                    <div className="cardss__button-line button__wrapper-line"></div>
                </div>    
            </section> 
        );
    }
    
}

    
 