import './ourBlog.css';
import yoga1 from './ob-img1.jpg';
import yoga2 from './ob-img2.jpg';
import yoga3 from './ob-img3.jpg';
import yoga4 from './ob-img4.jpg';
import yoga5 from './ob-img5.jpg';
import yoga6 from './ob-img6.jpg';


function Ourblog(){
    
    return(
        <div id="Ourblog">
             <h3>Our Blog</h3>
            <p>See Our Latest Blog</p>
            <div id="blogs">
                <div className='blog'>
                    <img src={yoga1}/>
                    <div>
                        <div className="admin"><i class="fa-regular fa-user"></i> <span>By Admin</span></div>
                        <div className="comment"><i class="fa-regular fa-comment"></i><span>Comment</span></div>
                    </div>
                    <h4>ways to practice yoga with a beginner's mind</h4>
                    <p>cultivating a beginner's mind in yoga can be challenging,especially for those who have been practicing for a long time.</p>
                    <a href="#">Read more <i class="fa-solid fa-chevron-right"></i></a> 
                </div>
                  <div className='blog'>
                    <img src={yoga2}/>
                    <div>
                        <div className="admin"><i class="fa-regular fa-user"></i> <span>By Admin</span></div>
                        <div className="comment"><i class="fa-regular fa-comment"></i><span>Comment</span></div>
                    </div>
                    <h4>ways to practice yoga with a beginner's mind</h4>
                    <p>cultivating a beginner's mind in yoga can be challenging,especially for those who have been practicing for a long time.</p>
                    <a href="#">Read more <i class="fa-solid fa-chevron-right"></i></a> 
                </div>
                  <div className='blog'>
                    <img src={yoga3}/>
                    <div>
                        <div className="admin"><i class="fa-regular fa-user"></i> <span>By Admin</span></div>
                        <div className="comment"><i class="fa-regular fa-comment"></i><span>Comment</span></div>
                    </div>
                    <h4>ways to practice yoga with a beginner's mind</h4>
                    <p>cultivating a beginner's mind in yoga can be challenging,especially for those who have been practicing for a long time.</p>
                    <a href="#">Read more <i class="fa-solid fa-chevron-right"></i></a> 
                </div>
                  <div className='blog'>
                    <img src={yoga4}/>
                    <div>
                        <div className="admin"><i class="fa-regular fa-user"></i> <span>By Admin</span></div>
                        <div className="comment"><i class="fa-regular fa-comment"></i><span>Comment</span></div>
                    </div>
                    <h4>ways to practice yoga with a beginner's mind</h4>
                    <p>cultivating a beginner's mind in yoga can be challenging,especially for those who have been practicing for a long time.</p>
                    <a href="#">Read more <i class="fa-solid fa-chevron-right"></i></a> 
                </div>
                  <div className='blog'>
                    <img src={yoga5}/>
                    <div>
                        <div className="admin"><i class="fa-regular fa-user"></i> <span>By Admin</span></div>
                        <div className="comment"><i class="fa-regular fa-comment"></i><span>Comment</span></div>
                    </div>
                    <h4>ways to practice yoga with a beginner's mind</h4>
                    <p>cultivating a beginner's mind in yoga can be challenging,especially for those who have been practicing for a long time.</p>
                    <a href="#">Read more <i class="fa-solid fa-chevron-right"></i></a> 
                </div>
                  <div className='blog'>
                    <img src={yoga6}/>
                    <div>
                        <div className="admin"><i class="fa-regular fa-user"></i> <span>By Admin</span></div>
                        <div className="comment"><i class="fa-regular fa-comment"></i><span>Comment</span></div>
                    </div>
                    <h4>ways to practice yoga with a beginner's mind</h4>
                    <p>cultivating a beginner's mind in yoga can be challenging,especially for those who have been practicing for a long time.</p>
                    <a href="#">Read more <i class="fa-solid fa-chevron-right"></i></a> 
                </div>
            </div>
<div id="moveBtn">
                <button id='backBtn'><i class="fa-solid fa-chevron-left"></i></button>
                <button id='forwardBtn'><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>

    )
}

export default Ourblog;