import React from 'react';
import {connect } from 'react-redux';
import CardList from './CardList';
const RecentlyWatched = (props) => {
    console.log(props)
    return ( 
        <div className="mod-top-7rem">
            <h1 className="recent__title">Recently Watched</h1>
            <div className="line"></div>
            {(props.history.length < 1) ? (
                <div className="cardss__post" >
                    <div className="cardss__post-null">
                        <div className="cards__post-null-text">All your watched trailer will show up here</div>
                    </div>
                </div>
            ) :
                (<CardList name={"Recent"} gameList={props.history} />) 
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

export default connect(mapStateToProps)(RecentlyWatched);