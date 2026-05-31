import Fear from "./Fear";
import "./PowerPage.css";
import { Link } from "react-router-dom";

const PowerPage = () => {
  return (
    <div>
      <div className="#">
        <Link to="/" className="btn">
          Back &rarr;
        </Link>
      </div>
      <div className="power__container ">
        <Fear />
      </div>
    </div>
  );
};

export default PowerPage;
