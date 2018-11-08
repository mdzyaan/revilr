import React from 'react';
import {Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {addGame} from '../actions/history';

class Card extends React.Component {
    // card needs props game detail as object containing game data 
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.game.id,
            imgId:  '',
            rating: this.props.game.rating ? this.props.game.rating : '',
            cover: this.props.game.cover
        }
    };
    componentDidMount() {
        let imgId; 
        if (this.props.game.cover) {
            imgId = this.props.game.cover.cloudinary_id;
        } else {
            imgId = this.props.game.imgId;
        }
        this.setState(() => ({
            imgId,
        }))
    }
    saveToRecent = () => {
        this.props.dispatch(addGame({...this.state}));
    }
    render() {
        
        const img = "https://images.igdb.com/igdb/image/upload/t_cover_big/" + this.state.imgId + ".jpg";
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
                    onClick={this.saveToRecent}
                    className="cards__icon-1">
                    <i className="cards__icon-11 fal fa-play-circle"></i>
                </Link>
                {rating}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.history,
    }
}

export default connect(mapStateToProps)(Card);