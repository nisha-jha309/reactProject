import './ourServices.css';
import yimage1 from './Yoga.png';
import yimage2 from './MeditationPose.png';
import yimage3 from './Ayurveda.png';
import yimage4 from './Health.png';
function Ourservices(){
    return(
        <div id='Ourservices-text'>
            <h3>Our Services</h3>
            <p>find your choice through how you change</p>
            <p>Meditation is a contemptive practice, engaged in across various religious and spiritual traditions as a means of quieting, focusing and transforming the mind</p>
            <div id='service-section'>
                <div className="service">
                    <img src={yimage1}/>
                    <h3>Yoga</h3>
                    <p>Jain mediation and spiritual practices system were referred to salvation-path system.</p>
                </div>
                  <div className="service">
                    <img src={yimage2}/>
                    <h3>Meditation</h3>
                    <p>Jain mediation and spiritual practices system were referred to salvation-path system.</p>
                </div>
                  <div className="service">
                    <img src={yimage3}/>
                    <h3>Ayurveda</h3>
                    <p>Jain mediation and spiritual practices system were referred to salvation-path system.</p>
                </div>
                  <div className="service">
                    <img src={yimage4}/>
                    <h3>Health</h3>
                    <p>Jain mediation and spiritual practices system were referred to salvation-path system.</p>
                </div>
            </div>
        </div>
    )
} 

export default Ourservices;