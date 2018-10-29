import React from 'react';
import {Link, Redirect } from 'react-router-dom';

export default class Card extends React.Component {
    // card needs props game detail as object containing game data 
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        }
    };

    
    render() {
        const imgId = this.props.game.cover.cloudinary_id;
        const img = "https://images.igdb.com/igdb/image/upload/t_cover_big/" + imgId + ".jpg";
        const rating = this.props.game.rating && (<span className="cards__icon-3">
        {Math.round(this.props.game.rating)}<i className="cards__icon-33 fas fa-heartbeat fa-fw"></i>
        </span>);
        const id = this.props.game.id;
        return (
            <div className={`${this.props.addCn && this.props.addCn } cards`}>
                <img src={img}/>
                <div className="cards__bg"></div>           
                <Link 
                    to={{
                        pathname: `/detail/${id}`,
                    }} 
                    className="cards__icon-1">
                    <i className="cards__icon-11 fal fa-play-circle"></i>
                </Link>
                <button className="cards__icon-2" href="#">
                    <i className="cards__icon-22 fal fa-plus"></i>
                </button>
                {rating}
                
            </div>
        );
    }
}