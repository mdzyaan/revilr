import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
        <section className="header">
            <div className="header__bg"></div>
            <div className="header__content">
                <div className="header__content-title">Watch the trailer of most anticipated mobile game of 2018.</div>
                <div className="header__content-cta button__wrapper">
                <Link 
                    to={{
                        pathname: `/game/27789`,
                    }} 
                    className="header__content-cta-button button__wrapper-btn">
                    Watch Trailer Now.
                </Link>
                <div className="header__content-cta-line button__wrapper-line"></div>
                </div>
            </div>
      </section>
);

export default Header;