import React from 'react';
import { Link } from 'react-router-dom';


export class Navbar extends React.Component {
    
    render() {
        return (
            <div>
                <div id="sidebar">  
                <div className="sidebar-header">
                    <div id="dismiss">
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <div className="nav__logo">
                        <span href="index.html" className="nav__logo-text">Revilr</span>
                        </div>
                </div>
                <ul className="list-unstyled components">
                    <p>Logout</p>
                    <div className="line"></div>
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/recent">Recently Watched</Link>
                    </li>
                    <li>
                        <Link to="#">Favorite</Link>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Genre</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li ><Link to="#1">Adventure</Link></li>
                            <li ><Link to="/genre/2">Action</Link></li>
                            <li ><Link to="/genre/4">Fighting</Link></li>
                            <li ><Link to="/genre/25">Hack and slash</Link></li>
                            <li ><Link to="/genre/32">Indie</Link></li>
                            <li ><Link to="/genre/7">Music</Link></li>
                            <li ><Link to="/genre/30">Pinball</Link></li>
                            <li ><Link to="/genre/8">Platform</Link></li>
                            <li ><Link to="/genre/2">Point-and-click</Link></li>
                            <li ><Link to="/genre/9">Puzzle</Link></li>
                            <li ><Link to="/genre/26">Quiz/Trivia</Link></li>
                            <li ><Link to="/genre/10">Racing</Link></li>
                            <li ><Link to="/genre/11">Real Time Strategy (RTS)</Link></li>
                            <li ><Link to="/genre/12">Role-playing (RPG)</Link></li>
                            <li ><Link to="/genre/5">Shooter</Link></li>
                            <li ><Link to="/genre/13">Simulator</Link></li>
                            <li ><Link to="/genre/14">Sport</Link></li>
                            <li ><Link to="/genre/15">Strategy</Link></li>
                            <li ><Link to="/genre/24">Tactical</Link></li>
                            <li ><Link to="/genre/16">Turn-based strategy (TBS)</Link></li>
                        </ul>
                    </li>
                </ul>
                <div className="line"></div>
                </div>

                
                <nav className="nav">
                    <div type="button" id="sidebarCollapse" className="nav__hamburger">
                        <div className="nav__hamburger-button">
                            <span className="nav__hamburger-icon">&nbsp;</span>
                        </div> 
                    </div>
                    <div className="nav__logo">
                        <Link to="/" className="nav__logo-text">Revilr</Link>
                    </div>
                    <div className="nav__search">
                        <Link to="/search">
                            <i className="nav__search-icon fal fa-search"></i>
                        </Link>
                    </div>
                </nav>
                <div className="overlay"></div>
            </div>

        );
    };
    
}
export default Navbar;