import { Link } from "react-router-dom";
import "./Quote.css";

const Quote = () => {
  return (
    <div className="quote__box">
      <p className="quote">You never gonna find yourself </p>
      <Link to={"#"} className="btn">
        Pulakesh Malakar
      </Link>
    </div>
  );
};

export default Quote;
