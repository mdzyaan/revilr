import React from 'react';
import { proxy, key } from '../config';
import axios from 'axios';
import CardRow from './CardRow';


export default class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {},
            gameName: '',
            gameList: [],
            id: props.match.params.id,
            youtubeId: [],  
        }
    }
    
    
    componentDidMount() {
        axios(`${proxy}https://api-endpoint.igdb.com/games/${this.state.id}?fields=id,name,cover,genres,rating,summary,videos,popularity,external,games&expand=games&filter[cover][exists]=1`, {
            method: "GET",
            headers: {
                "user-key": `${key}`, // user key from config file
                "Accept": "application/json"
            }
        })
        .then(game => {
            // selecting a video from list of video includes the word "trailer"
            console.log(game)
            const videoTrailerId = game.data[0].videos.find(video => {
                const id = video.name.toLowerCase().includes("trailer");
                return  id;
            });
            // setting up the state with async game data
            this.setState(() => (
                { 
                    game,  // whole game data list
                    gameName: game.data[0].name,  // game name
                    gameList: [<CardRow key={'adfdfs23'} name={"Recommended Games"} game={game.data[0].games} />],  // passing array of game data to CardRow component
                    youtubeId:  [
                        <iframe
                        key={videoTrailerId.video_id}
                        src={`https://www.youtube.com/embed/${videoTrailerId.video_id}?autohide=1&showinfo=0`}  frameBorder="0"   allowFullScreen></iframe>
                        ]
                }));
        }).catch(e => {
            console.log(e);
        })
    }
    
    render() {
        return (
            <div>
                <div className="video">
                    <div className="video-iframe">
                        {this.state.youtubeId}
                    </div>
                </div>
                <h1>{this.state.gameName}</h1>
                {this.state.gameList}
            </div>       
        );
    }
}
