import React from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
      $(document).ready(function () {
        AOS.init();
        $("#sidebar").mCustomScrollbar({
          theme: "minimal"
        });

        $('#dismiss, .overlay').on('click', function () {
          // hide sidebar
          $('#sidebar').removeClass('active');
          // hide overlay
          $('.overlay').removeClass('active');
        });

        $('#sidebarCollapse').on('click', function () {
          // open sidebar
          $('#sidebar').addClass('active');
          // fade in the overlay
          $('.overlay').addClass('active');
          $('.collapse.in').toggleClass('in');
          $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
      });

    }
    render() {
        return (
            <div>
                <div id="sidebar">  
                    <div className="sidebar-header">
                        <div id="dismiss" className="dismiss">
                            <i className="dismiss__icon fal fa-arrow-left"></i>
                        </div>
                        <div className="nav__logo">
                            <span href="index.html" className="nav__logo-text">Revilr</span>
                        </div>
                    </div>
                    <ul className="list-unstyled components">
                        
                        <li >
                            <Link to="/home">Home</Link>
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
                    <button href="#" className="btn__box" onClick={this.props.startLogout}>Logout</button>
                    <div className="line"></div>
                </div>
    
                
                <nav className="nav">
                    <div type="button" id="sidebarCollapse" className="nav__hamburger">
                        <div className="nav__hamburger-button">
                            <span className="nav__hamburger-icon">&nbsp;</span>
                        </div> 
                    </div>
                    <div className="nav__logo">
                        <Link to="/home" className="nav__logo-text">Revilr</Link>
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
    }
    
};
    


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})
export default connect(undefined,mapDispatchToProps)(Navbar);