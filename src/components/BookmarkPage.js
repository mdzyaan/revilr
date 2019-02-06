import React from 'react';
import {connect } from 'react-redux';
import CardList from './CardList';
class BookmarkedPage extends React.Component {
    state = {
        bookmarkList: []
    };
    componentWillUpdate(props, state) {
        return state.bookmarkList !== this.props.bookmark
    }
    componentWillMount() {
        this.setState({
            bookmarkList: this.props.bookmark
        })
    }
    render() {
        return ( 
            <div className="mod-top-7rem">
                <h1 className="recent__title">Bookmarks</h1>
                <div className="line"></div>
                {(this.props.bookmark.length < 1) ? (
                    <div className="cardss__post" >
                        <div className="cardss__post-null">
                            <div className="cards__post-null-text">All your bookmarked trailer will show up here</div>
                        </div>
                    </div>
                ) :
                    (<CardList name={"Recent"} gameList={this.state.bookmarkList} />) 
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        bookmark: state.bookmark
    }
}

export default connect(mapStateToProps)(BookmarkedPage);