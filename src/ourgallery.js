import './ourgallery.css';
import gimg1 from './gimg1.jpg'
import gimg2 from './gimg2.jpg'
import gimg3 from './gimg3.jpg'
import gimg4 from './gimg4.jpg'
import gimg5 from './gimg5.jpg'
import gimg6 from './gimg6.jpg'


function Ourgallery() {
    return (
        <div id="ourGallery">
            <h2>Our Gallery</h2>
            <div id="gallery">
                <div>
                <img className='gallery-img'src={gimg1} />
                <div className='gallery-img-overlay'><button id='viewImgBtn'>View Image</button></div>
                </div>
                <div>
                <img className='gallery-img'src={gimg2} />
                <div className='gallery-img-overlay'><button id='viewImgBtn'>View Image</button></div>
                </div>
                <div>
                <img className='gallery-img'src={gimg3} />
                <div className='gallery-img-overlay'><button id='viewImgBtn'>View Image</button></div>
                </div>
                <div>
                <img className='gallery-img'src={gimg4} />
                <div className='gallery-img-overlay'><button id='viewImgBtn'>View Image</button></div>
                </div>
                <div>
                <img className='gallery-img'src={gimg5} />
                <div className='gallery-img-overlay'><button id='viewImgBtn'>View Image</button></div>
                </div>
                <div>
                <img className='gallery-img'src={gimg6} />
                <div className='gallery-img-overlay'><button id='viewImgBtn'>View Image</button></div>
                </div>
            </div>
        </div>
    )
}

export default Ourgallery;