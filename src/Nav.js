import './Nav.css';
import meditationlogo from './mediation logo.png';
function Navbar(){
    return(
<div id="Nav">
        <img src={meditationlogo} id="meditationLogo"/>
        <div id="list">
            <a href='#' className='active'>Home</a>
            <a href='#'>About Us</a>
            <a href='#'>Services</a>
            <a href='#'>Pricing</a>
            <a href='#'>Contact Us</a>
        </div>
        <>
        <button id="joinUs">Join Us</button>
        </>
        </div>
    )
}

export default Navbar;