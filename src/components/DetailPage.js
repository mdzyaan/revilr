import React from 'react';
import { proxy, key } from '../config';
import axios from 'axios';
import CardList from './CardList';


export default class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.updateGameId = this.updateGameId.bind(this);
        this.state = {
            game: {},
            gameName: '',
            gameList: [],
            id: this.props.match.params.id,
            youtubeId: [],  
        }
        const location = props.location.pathname;
        const splitid = location.split('/');
        const id = splitid[splitid.length - 1]
        
    }

    updateGameId(gamesId) {
        this.setState(() => ({id: gamesId}));
    }
    componentDidMount() {
        axios(`${proxy}https://api-endpoint.igdb.com/games/${this.state.id}?fields=id,name,cover,genres,rating,summary,videos,popularity`, {
            method: "GET",
            headers: {
                "user-key": `${key}`,
                "Accept": "application/json"
            }
        })
        .then(game => {
            
            const videoTrailerId = game.data[0].videos.find(video => {
                const id = video.name.toLowerCase().includes("trailer");
                return  id;
            });
            
            this.setState(() => (
                { 
                    game,
                    gameName: game.data[0].name,
                    // gameList: [<CardList updateGameId={this.updateGameId}  name={"Recommended Games"} game={game.data[0].games} />],
                    youtubeId:  [
                        <iframe
                        key={videoTrailerId.video_id}
                        src={`https://www.youtube.com/embed/${videoTrailerId.video_id}`} frameBorder="0"   allowFullScreen></iframe>
                        ]
                }));
                console.log(this.state);
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
            </div>
            
        );
    }
}
