import React from 'react';
import {    Link, NavLink } from 'react-router-dom';
    

//             

export class Navbar extends React.Component {
    openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    };
    closeNav = () => {
        document.getElementById("mySidenav").style.width = "0px";
    }
    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <div className="closebtn" onClick={this.closeNav}><i className="far fa-times-circle"></i></div>
                    <ul className="sidenav__menu">
                        <li className="sidenav__menu-item"><Link to="#1">Recently Watched</Link></li>
                        <li className="sidenav__menu-item"><Link to="#1">Favorites</Link></li>
                        <li className="sidenav__menu-item"><Link to="#1">Log out</Link></li>
                    </ul>
                    <div className="sidenav__line"></div>
                    <ul className="sidenav__quick">
                        <h3 className="sidenav__quick-title">Quick Links</h3>
                        <li className="sidenav__quick-item"><Link to="#">Home</Link></li>
                        <li className="sidenav__quick-item"><Link to="#">Comming Soon</Link></li>
                        <li className="sidenav__quick-item"><Link to="#">Featured</Link></li>
                    </ul>
                    <div className="sidenav__line"></div>
                    <ul className="sidenav__genre">
                        <h3 className="sidenav__genre-title">Genre</h3>
                        <li className="sidenav__genre-item"><Link to="#1">Adventure</Link></li>
                        <li className="sidenav__genre-item"><Link to="#2">Action</Link></li>
                        <li className="sidenav__genre-item"><Link to="#4">Fighting</Link></li>
                        <li className="sidenav__genre-item"><Link to="#25">Hack and slash</Link></li>
                        <li className="sidenav__genre-item"><Link to="#32">Indie</Link></li>
                        <li className="sidenav__genre-item"><Link to="#7">Music</Link></li>
                        <li className="sidenav__genre-item"><Link to="#30">Pinball</Link></li>
                        <li className="sidenav__genre-item"><Link to="#8">Platform</Link></li>
                        <li className="sidenav__genre-item"><Link to="#2">Point-and-click</Link></li>
                        <li className="sidenav__genre-item"><Link to="#9">Puzzle</Link></li>
                        <li className="sidenav__genre-item"><Link to="#26">Quiz/Trivia</Link></li>
                        <li className="sidenav__genre-item"><Link to="#10">Racing</Link></li>
                        <li className="sidenav__genre-item"><Link to="#11">Real Time Strategy (RTS)</Link></li>
                        <li className="sidenav__genre-item"><Link to="#12">Role-playing (RPG)</Link></li>
                        <li className="sidenav__genre-item"><Link to="#5">Shooter</Link></li>
                        <li className="sidenav__genre-item"><Link to="#13">Simulator</Link></li>
                        <li className="sidenav__genre-item"><Link to="#14">Sport</Link></li>
                        <li className="sidenav__genre-item"><Link to="#15">Strategy</Link></li>
                        <li className="sidenav__genre-item"><Link to="#24">Tactical</Link></li>
                        <li className="sidenav__genre-item"><Link to="#16">Turn-based strategy (TBS)</Link></li>
                    </ul>
                    <div className="sidenav__line"></div>
                </div>
                <nav className="nav">
                    <div className="nav__hamburger" onClick={this.openNav}><i className="fas fa-bars"></i></div>
                    <div className="nav__logo">
                        <Link to="/" className="nav__logo-text">Revilr</Link>
                    </div>
                    <div className="nav__search">
                        <Link to="/search">
                        <i className="nav__search-icon fas fa-search"></i>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    };
    
}
export default Navbar;