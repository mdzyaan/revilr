import React from 'react';
import Slider from "react-slick";
import { proxy, key } from '../config';
import axios from 'axios';
import CardRow from './CardRow';


export default class GamePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {},
            gameName: '',
            gameList: [],
            id: props.match.params.id,
            video: [<div key="xyz1" className="loader"><h1><i className="loader__icon far fa-redo-alt"></i></h1></div>,], 
            youtubeId: [],
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
            
            // selecting a video from list of video includes the word "trailer"
            console.log(game.data[0].summary);
            const youtubeId = game.data[0].videos.map(video => {
                return  video.video_id;
            });
           
            const youtubeImg = youtubeId.map(id => {
              return (
                <div className="video-div">
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
                    youtubeId,
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
              <h1>{this.state.gameName}</h1>
              <p>{this.state.summary}</p>
              {this.state.gameList}
            </div>       
        );
    }
}
