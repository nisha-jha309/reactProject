import logo from './logo.svg';
import './Card.css'

function Card(){
    return(
        <div className="Card">
            <img src={logo} className="image"/>
            <p>this is a card containig an image and paragarph with btn</p>
            <button className="button">Buy</button>
        </div>
    )
}

export default Card;