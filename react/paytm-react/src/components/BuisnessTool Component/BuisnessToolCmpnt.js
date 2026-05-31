import "./buisnesstollcmpnt.css";

import "./buisnesstollcmpnt.css";
import "./../general.css";

function BuisnessTollCmpnt(props) {
  return (
    <div className="tool-card">
      <div className="img-box">
        <img src={props.image} className="tool-img" alt="hello" />
      </div>
      <h2 className="tertiary-heading tool-heading">{props.heading}</h2>
      <p className="primary-para tool-para">{props.para}</p>
      <span>
        <a href="'" className="tool-link">
          Learn More &rarr;
        </a>
      </span>
    </div>
  );
}

export default BuisnessTollCmpnt;
