import "./card.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="card">
      <div className="card__image-box">
        <img src={props.image} alt="" className="card__image" />
      </div>
      <div className="card__content">
        <div className="flex name">
          <p>Name: </p>
          <p className="series__name">
            {props.name}
            {/* {title} */}
          </p>
        </div>

        <div className="flex series__date">
          <p>Realease Date: </p>
          <p>{props.date}</p>
        </div>
      </div>
      <div className="card__btn">
        {/* <a href="#" className="btn">
            Watch
          </a> */}
        <Link to="/products" className="btn">
          Watch
        </Link>
      </div>
    </div>
  );
};

export default Card;
