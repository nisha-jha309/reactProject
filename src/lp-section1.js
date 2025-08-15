import './lp-section1.css';
import meditation from './meditation.png';
function Lpsection1(){
    return(
        <div id='lpsection1'>
            <div id="lpsection1-text">
                <p>Welcome To Yoga</p>
                <h2>Change Your Life By Meditation</h2>
                <p>Mediation has proven difficult to define as it covers a awide range of dissimilar practices in different traditions. In popular usage, the word "meditation" and the phrase "<em>Meditative Practice</em>" are often used.</p>
              <div id="buttons">
                <button id="getStarted">Get Started</button>
                <div id="playBtn"><div id="play"><i class="fa-solid fa-play"></i></div>&nbsp;&nbsp;Play Video</div>
            </div>
            </div>
            <div><img src={meditation} id='meditation'/></div>
    

</div>
    )
}
export default Lpsection1;