import './testimonial.css';
import profliePic from './profilePic1.png';

function Testimonial(){
    return(
        <div id='testimonialSection'>
            <h3>Testimonials</h3>
            <p>What Our client Say's</p>
            <div id='testimonials'>
            <div className='testimonial'>
                <div><div className='profilePic'><img src={profliePic}/></div></div>
                <div>
                    <h2>Andrea Konez</h2>
                    <h5>Student</h5>
                    <p>Muse is a smart headbend that acts as your personal meditation coach.</p>
                </div>
            </div>
               <div className='testimonial'>
                <div><div className='profilePic'><img src={profliePic}/></div></div>
                <div>
                    <h2>Olive vennia</h2>
                    <h5>Student</h5>
                    <p>Muse is a smart headbend that acts as your personal meditation coach.</p>
                </div>
            </div>
               <div className='testimonial'>
                <div><div className='profilePic'><img src={profliePic}/></div></div>
                <div>
                    <h2>Tena Payer</h2>
                    <h5>Student</h5>
                    <p>Muse is a smart headbend that acts as your personal meditation coach.</p>
                </div>
            </div>
               <div className='testimonial'>
                <div><div className='profilePic'><img src={profliePic}/></div></div>
                <div>
                    <h2>Nisha Jha</h2>
                    <h5>Student</h5>
                    <p>Muse is a smart headbend that acts as your personal meditation coach.</p>
                </div>
            </div>
               <div className='testimonial'>
                <div><div className='profilePic'><img src={profliePic}/></div></div>
                <div>
                    <h2>Andrew Dsouza</h2>
                    <h5>Student</h5>
                    <p>Muse is a smart headbend that acts as your personal meditation coach.</p>
                </div>
            </div>
               <div className='testimonial'>
                <div><div className='profilePic'><img src={profliePic}/></div></div>
                <div>
                    <h2>Kushal Malhotra</h2>
                    <h5>Student</h5>
                    <p>Muse is a smart headbend that acts as your personal meditation coach.</p>
                </div>
            </div>

            </div>
            <div id="moveBtn">
                <button id='backBtn'><i class="fa-solid fa-chevron-left"></i></button>
                <button id='forwardBtn'><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    )
}

export default Testimonial;