import "./RechargeCmpnt.css";

function RechargeCmpnt(props) {
  return (
    <div className="recharge-card">
      <div className="recharge-img">
        <img src={props.image} className="images" alt="" />
      </div>
      <div className="about">{props.about}</div>
      <div>
        <a href="'" className="link">
          {props.link}
        </a>
      </div>
    </div>
  );
}

export default RechargeCmpnt;
