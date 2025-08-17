import './lp-section2.css';
import yoga1 from './yoga1.png';
import yoga2 from './yoga2.png';
import yoga3 from './yoga3.png';

function Lpsection2(){
    return(
        <div id='section2'>
            <div className='program'>
                <div><img src={yoga1}/></div>
                <div>
                    <h3>WorkOut Program</h3>
                    <p>Jain mediation and spiritual practices system were referred to salvation-path system.</p>
                </div>
            </div>
             <div className='program'>
                <div><img src={yoga2}/></div>
                <div>
                    <h3>WorkOut Planning</h3>
                    <p>Jain mediation and spiritual practices system were referred to salvation-path system.</p>
                </div>
            </div>
             <div className='program'>
                <div><img src={yoga3}/></div>
                <div>
                    <h3>Health Care</h3>
                    <p>Jain mediation and spiritual practices system were referred to salvation-path system.</p>
                </div>
            </div>
        </div>
    )
}

export default Lpsection2;