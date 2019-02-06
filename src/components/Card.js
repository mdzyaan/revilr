import React from 'react';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {startAddGame} from '../actions/history';
import {startAddGameToMostViewed} from '../actions/mostViewed';
import {startAddToBookmark, startRemoveFromBookmark} from '../actions/bookmark';
class Card extends React.Component {
    // card needs props game detail as object containing game data 
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.game.id,
            imgId:  '',
            name: this.props.game.name,
            rating: this.props.game.rating ? this.props.game.rating : '',
            cover: this.props.game.cover,
            bookmark: false,
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
        const checkBookMark = this.props.bookmark.findIndex(id => {
            return id.id === this.state.id
        })
        if (checkBookMark === -1) {
            this.setState({
                bookmark: false,
            })
        } else {
            this.setState({
                bookmark: true,
            })
        }  
    }
    saveToRecent = () => {
        this.props.startAddGame({...this.state});
        this.props.startAddGameToMostViewed({...this.state});
    }
    saveToBookmark = () => {
        const  pushState = {
            id: this.state.id,
            imgId:  this.state.imgId,
            name: this.state.name,
            rating: this.state.rating ? this.state.rating : '',
            cover: this.state.cover,
            bookmark: !this.state.bookmark,
        }
        if (this.props.bookmark.length > 0) {
            
            if (this.state.bookmark) {
                 // if in list then remove from bookmark list
                 this.setState({
                    bookmark: false,
                })
                const key = this.props.bookmark.find(el => {
                    return el.id === this.state.id
                })
                this.props.startRemoveFromBookmark(key.key);

            } else {
                // else add to bookmark list
                this.setState({
                    bookmark: true,
                })
                this.props.startAddToBookmark(pushState);
            }
        } else {
            this.setState({
                bookmark: true,
            })
            this.props.startAddToBookmark(pushState);
        }
    }

    render() {
        const img = "https://images.igdb.com/igdb/image/upload/t_cover_big/" + this.state.imgId + ".jpg";
        const rating = this.props.game.rating && (<span className="cards__icon-3">
        {Math.round(this.props.game.rating)}<i className="cards__icon-33 fas fa-heartbeat fa-fw"></i>
        </span>);
        const id = this.props.game.id;
        return (
            <div className={`${this.props.addCn && this.props.addCn } cards`}>
            <img src={img} alt={this.state.name}/>
                <div className="cards__bg"></div>           
                <Link 
                    to={`/game/${id}`}                    
                    onClick={this.saveToRecent}
                    className="cards__icon-1">
                    <i className="cards__icon-11 fal fa-play-circle"></i>
                </Link>
                {rating}
                <button className="cards__icon-2" onClick={this.saveToBookmark}>
                    <i className={`cards__icon-22 ${!this.state.bookmark ? 'fal fa-bookmark' : 'fas fa-bookmark'}  fa-fw`}></i>
                </button>
                <Link 
                    to={`/game/${id}`}                    
                    onClick={this.saveToRecent}
                    className="cards__title">
                    {this.state.name}
                </Link>
                
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddGame: (game) => dispatch(startAddGame(game)),
    startAddGameToMostViewed: (game) => dispatch(startAddGameToMostViewed(game)),
    startAddToBookmark: (game) => dispatch(startAddToBookmark(game)),
    startRemoveFromBookmark: (id) => dispatch(startRemoveFromBookmark(id)),
})

const mapStateToProps = state => {
    return {
        bookmark: state.bookmark,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Card);