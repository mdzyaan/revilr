import React from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import Header from './Header';
import CardRow from './CardRow';
import { gameLists } from '../gameLists';

const HomePage = (props) => {    
    return (
        <div>
            <Header />
            {(props.mostViewed.length < 1) ? 
                
                (
                    <section data-aos="fade-in"  data-aos-duration="2000" className="cardss">
                        <div className="cardss__title">
                            <h1 className="cardss__title-head">Trending Trailers</h1>
                            <div className="cardss__title-line"></div>
                        </div>
                        <div className="cardss__post">
                            <div className="cardss__post-null">
                                <div key="xyz1" className="loader"><h1><i className="loader__icon far fa-redo-alt"></i></h1></div>
                            </div>
                        </div>
                        <div className="cardss__button button__wrapper">
                            <Link
                            to="/search" className="cardss__button-button button__wrapper-btn">
                            Search More Games
                            </Link>
                            <div className="cardss__button-line button__wrapper-line"></div>
                        </div>    
                    </section> 
                ) : 
                (<CardRow name={"Trending Trailers"} game={gameLists.data} />)
            }
            
            
            {(props.mostViewed.length < 1) ? 
                
                (
                    <section data-aos="fade-in"  data-aos-duration="2000" className="cardss">
                        <div className="cardss__title">
                            <h1 className="cardss__title-head">Most Watched Trailers</h1>
                            <div className="cardss__title-line"></div>
                        </div>
                        <div className="cardss__post">
                            <div className="cardss__post-null">
                                <div key="xyz1" className="loader"><h1><i className="loader__icon far fa-redo-alt"></i></h1></div>
                            </div>
                        </div>
                        <div className="cardss__button button__wrapper">
                            <Link
                            to="/search" className="cardss__button-button button__wrapper-btn">
                            Search More Games
                            </Link>
                            <div className="cardss__button-line button__wrapper-line"></div>
                        </div>    
                    </section> 
                ) : 
                (<CardRow name={"Most Watched Trailers"} game={props.mostViewed} />)
            }
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
        history: state.history,
        mostViewed: state.mostViewed,
    }
}

export default connect(mapStateToProps)(HomePage);


    


