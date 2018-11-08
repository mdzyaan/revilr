import React from 'react';
import Header from './Header';
import CardRow from './CardRow';
import { gameLists } from '../gameLists';
import {connect } from 'react-redux';

const HomePage = (props) => {
    
    console.log(props.history)
    return (
        <div>
            <Header />
            <CardRow name={"Trending Games"} game={gameLists.data} />
            {(props.history.length < 1) ? (
                <div className="cardss__post" >
                    <div className="cardss__post-null">
                        <div className="cards__post-null-text">All your watched trailer will show up here</div>
                    </div>
                </div>
            ) :
                (<CardRow name={"Recently Watched"} game={props.history} />) 
            }
        </div>
    );
    
}

const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

export default connect(mapStateToProps)(HomePage);


    


