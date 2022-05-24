import {Link} from 'react-router-dom';
import './Nav.css';
import $ from 'jquery';

function Nav() {
    nav_init();

    return (
        <div className="navbar">
            <div className="logo"></div>
            <div className="nav-links">
                <Link to='/'><div className="nav-item">Home</div></Link>
                <Link to='/games'><div className="nav-item">Games</div></Link>
                <Link to='/projects'><div className="nav-item">Projects</div></Link>
                <Link to='/about'><div className="nav-item">About</div></Link>
            </div>
            <div className="theme"><div className="mode" onClick={modeClickHandler}></div></div>
        </div>
    );
}
function nav_init() {
    $(document).ready(function() {
        $('.nav-item').click(function() {
            $('.nav-item').each(function() {
                $(this).css("background-color", "var(--surface-three)");
                $(this).css("color", "var(--on-surface)");
            })
            $(this).css("background-color", "var(--primary)");
            $(this).css("color", "var(--on-primary)");
        })
    
        $('a:nth-child(1) .nav-item').css("background-color", "var(--primary)");
        $('a:nth-child(1) .nav-item').css("color", "var(--on-primary)");
    })
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