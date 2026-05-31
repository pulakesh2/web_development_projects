import "./BuisnessServiceCmpnt.css";
import "./../general.css";
function BuisnessServiceCmpnt(props) {
  return (
    <div className="buisness-section container">
      <div className="content">
        <h2 className="secondary-heading">{props.heading}</h2>
        <p className="primary-para">{props.para}</p>
        <button class="download-btn">
          <a href="'" class="download">
            Learn More &rarr;
          </a>
        </button>
      </div>
      <div className="image-box">
        <img src={props.image} alt="" className="image" />
      </div>
    </div>
  );
}

export default BuisnessServiceCmpnt;
