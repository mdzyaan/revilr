import React from 'react';
import Slider from "react-slick";
import { proxy, key } from '../config';
import axios from 'axios';
import CardRow from './CardRow';
import uuid from 'uuid';

export default class GamePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {},
            gameName: '',
            gameList: [],
            id: props.match.params.id,
            video: [<div key="xyz1" className="loader"><h1><i className="loader__icon far fa-redo-alt"></i></h1></div>,], 
            youtubeImg: null,
            summary: '',
        }
    }

    changeYoutubeId = (id) => {

      this.setState(() => ({
        video:  <iframe src={`https://www.youtube.com/embed/${this.state.youtubeId[id]}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`} allowFullScreen allowTransparency></iframe>
      }))    
    }

    componentDidMount() {
        //&expand=games,platforms
        axios(`${proxy}https://api-endpoint.igdb.com/games/${this.state.id}?fields=id,name,cover,genres,rating,summary,videos,popularity,summary,external,games,platforms&filter[cover][exists]=1`, {
            method: "GET",
            headers: {
                "user-key": `${key}`, // user key from config file
                "Accept": "application/json"
            }
        })
        .then(game => {
            
            // creating list of videoId
            const youtubeId = game.data[0].videos.map(video => {
                return  video.video_id;
            });
           // list of video element
            const youtubeImg = youtubeId.map(id => {
              return (
                <div key={uuid()} className="video-div">
                  <img className="video-img" src={`https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`} />
                  <i className="video-icon fal fa-play-circle"></i>
                </div>
              )
            })
            // setting up the state with async game data
            this.setState(() => (
                { 
                    game,  // whole game data list
                    gameName: game.data[0].name,  // game name
                    //gameList: [<CardRow key={'adfdfs23'} name={"Recommended Games"} game={game.data[0].games} />],  // passing array of game data to CardRow component
                    video:  <iframe src={`https://www.youtube.com/embed/${youtubeId[0]}`} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                    youtubeImg,
                    summary: game.data[0].summary,
                }));
              
        }).catch(e => {
            console.log(e);
        })
    }
    
    render() {
        const that = this
        const settingsSlider = {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          afterChange: function(event){
            that.setState(()=> ({
              video: [<div key="xyz1" className="loader"><h1><i className="loader__icon far fa-redo-alt"></i></h1></div>,]
            })) 
            that.changeYoutubeId(event)     
          }
        }; 
        return (
            <div>
              <div className="video">
                <div className="video-iframe">
                    {this.state.video}

                </div>
                <Slider
                  slidesToShow={1}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  {...settingsSlider}
                >
                  {this.state.youtubeImg}
                </Slider>
                
              </div>
              <div className="description">
                <h1>{this.state.gameName}</h1>
                <div className="action">
                    <button className="action__button">
                        <i className="action__button-icon fal fa-thumbs-up"></i>
                        <p className="action__button-title">Like</p>
                    </button>
                    <button className="action__button">
                        <i className="action__button-icon fal fa-thumbs-down"></i>
                        <p className="action__button-title">Dislike</p>
                    </button>
                    <button className="action__button">
                        <i className="action__button-icon fal fa-share"></i>
                        <p className="action__button-title">Share</p>
                    </button>
                    <button className="action__button">
                        <i className="action__button-icon fal fa-bookmark"></i>
                        <p className="action__button-title">bookmark</p>
                    </button>
                </div>
                <p>{this.state.summary}</p>
              </div>
                {this.state.gameList}
            </div>       
        );
    }
}
