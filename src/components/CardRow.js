import React from 'react';
//import axios from 'axios';
//import { key, proxy } from '../config';
import Card from './Card';
import { Link } from 'react-router-dom';
import{ gameLists } from '../gameLists';
export default class CardRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameList: []
        }
    }
    componentDidMount() {
        this.setState(() => ({games: this.props.game}))
        const gameArr = this.props.game;
        if (typeof(gameArr) === 'undefined') {
            const gameList = gameLists.data.map(game => {
                if (game.cover ) {
                    const gamesId = game.id;
                    const gamesDetail = game;
                    this.setState((prevState) => {
                        return {
                            gameList: prevState.gameList.concat(<Card addCn={"cardss__post-card"} key={gamesId} game={gamesDetail}/>)
                        }
                    });
                }
            });
        }else {
            const gameList = gameArr.map(game => {
                if (game.cover ) {
                    const gamesId = game.id;
                    const gamesDetail = game;
                    this.setState((prevState) => {
                        return {
                            gameList: prevState.gameList.concat(<Card addCn={"cardss__post-card"} key={gamesId} game={gamesDetail}/>)
                        }
                    });
                }
            });
        }
        
        // const gameList = gameArr.map(game => {
        //     axios(`${proxy}https://api-endpoint.igdb.com/games/${game}`, {
        //         method: "GET",
        //         headers: {
        //             "user-key": `${key}`,
        //             "Accept": "application/json"
        //         }
        //     })
        //     .then(games => {
        //         if (games.data[0].cover) {
        //             const gamesId = games.data[0].id;
        //             const gamesDetail = games.data[0];
        //             this.setState((prevState) => {
        //                 return {
        //                     gameList: prevState.gameList.concat(<Card  addCn={"cardss__post-card"} key={gamesId} game={gamesDetail}/>)
        //                 }
        //             });
        //         }
        //     });
        // });
    }
    render() {
        
        return (
            <section data-aos="fade-in"  data-aos-duration="2000" className="cardss">
                <div className="cardss__title">
                    <h1 className="cardss__title-head">{this.props.name}</h1>
                    <div className="cardss__title-line"></div>
                </div>
                <div className="cardss__post">
                {this.state.gameList}
                </div>
                <div className="cardss__button button__wrapper">
                    <Link
                    to="/search" className="cardss__button-button button__wrapper-btn">
                    Search More Games
                    </Link>
                    <div className="cardss__button-line button__wrapper-line"></div>
                </div>    
            </section> 
        );
    }
    
}

    
 