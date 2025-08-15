import './footer.css'
import meditationlogo from './mediation logo.png';
function Footer() {
    return (
        <div id="footer">
            <div id="freeClasses">
                <div>
                    <h2>Join With Our New Classes</h2>
                    <p>A yoga health coach is a well trained practitioner who instructs their students on changing habits for a better life</p>
                </div>
                <button id='freeClassBtn'>Request For Free Classes</button>
            </div>
            <div id="Navinfo">
                <div id='Navinfo-one'>
                    <img src={meditationlogo} />
                    <p>if you are an avid yogi who is health conscious but struggles with acheiving your wellness goals,you may want to consider hiring a yoga health coach.</p>
                    <div id='appLinks'>
                        <a><i class="fa-brands fa-x-twitter"></i></a>
                        <a><i class="fa-brands fa-facebook"></i></a>
                        <a> <i class="fa-brands fa-youtube"></i></a>
                        <a><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div id="ourLinks">
                    <h2>Our links</h2>
                    <div id="links">
                        <a href='#'>Home</a>
                        <a href='#'>About Us</a>
                        <a href='#'>Services</a>
                        <a href='#'>Pricing</a>
                        <a href='#'>Contact Us</a>
                    </div>
                </div>
                <div id='ContactUs'>
                    <h2>Contact Us</h2>
                    <div><div><i class="fa-solid fa-location-dot"></i></div><div><h5>Location</h5><p>Tirunelveli,TamilNadu.</p></div></div>
                    <div><div><i class="fa-solid fa-envelope"></i></div><div><h5>Email</h5><p>janaki2407@gmail.com</p></div></div>
                    <div><div><i class="fa-solid fa-phone"></i></div><div><h5>Call</h5><p>+91 7397139660</p></div></div>
                </div>
                <div id='newsletter'>
                    <h2>NewsLetter</h2>
                    <p>Subscribe to our NewsLetter to get important news, amazing offers and inside scoops</p>
                    <div id='newsletterBox'><input type="email" placeholder='Enter your email'/><div><i class="fa-solid fa-paper-plane"></i></div></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;