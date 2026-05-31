import "./Powers.css";
import { Link } from "react-router-dom";

const PowerBox = (props) => {
  return (
    <li className="u-margin-bottom-lg">
      {props.title}
      <Link to="/fear" className="btn">
        Learn More &rarr;
      </Link>
    </li>
  );
};

export default PowerBox;
