import './aboutUs.css';
import meditation from './meditation.png';

function About(){
    return(
        <div id="about">
            <div id='about-text'>
            <h3>About Us</h3>
            <p>Take your yoga to next level with us.</p>
             <p>Meditation is practiced in numerous religious traditions.The earliest records of mediation are found in the mediation plays a sailent role in contemptive reportoire of hinduism,jainism and buddhism.
                <br/>
                <br/>
                Since the 19th century, Asian meditative techniques have spread to other cultures.
             </p>
             <button id='joinUs'>Join Us Today</button>
        </div>
        <div id='about-img'>
            <img src={meditation}/>
        </div>
        </div>
    )
}

export default About;