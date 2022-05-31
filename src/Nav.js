import {Link} from 'react-router-dom';
import './Nav.css';
import $ from 'jquery';

function Nav() {
    return (
        <div className="navbar">
            <div className="logo"></div>
            <div className="nav-links">
                <Link to='/'><div className="nav-item" onClick={navitemCllickHandler}>Home</div></Link>
                <Link to='/games'><div className="nav-item" onClick={navitemCllickHandler}>Games</div></Link>
                <Link to='/projects'><div className="nav-item" onClick={navitemCllickHandler}>Projects</div></Link>
                <Link to='/about'><div className="nav-item" onClick={navitemCllickHandler}>About</div></Link>
            </div>
            <div className="theme"><div className="mode" onClick={modeClickHandler}></div></div>
        </div>
    );
}

function navitemCllickHandler(e) {
    $('.nav-item').each(function() {
        $(this).css("background-color", "var(--surface-three)");
        $(this).css("color", "var(--on-surface)");
    })
    $(e.target).css("background-color", "var(--primary)");
    $(e.target).css("color", "var(--on-primary)");
}

function modeClickHandler() {
    if (  $( ".mode" ).css( "transform" ) === 'none' ){
        $(".mode").css("transform","translate(2vw, 0");
        document.documentElement.className = 'dark';
    } else {
        $(".mode").css("transform","" );
        document.documentElement.className = 'light';
    }
}

export default Nav;