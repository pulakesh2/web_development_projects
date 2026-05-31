import "./cardcmpnt.css";

function CardCmpnt(props) {
  return (
    <div className="card">
      <div className="img-box">
        <img src={props.image} className="img" alt="hello" />
      </div>
      <div className="content-box">
        <div className="profile-img-box">
          <img src={props.profileImage} className="profile-img" alt="hello" />
        </div>
        <div className="profile-details">
          <h1 className="primary-heading">By {props.name}</h1>
          <p className="secondary-heading">{props.job}</p>
        </div>
        <div className="birth-details">
          <h1 className="primary-heading">Date</h1>
          <p className="secondary-heading">props.dob</p>
        </div>
      </div>
      <div className="btn-link">
        <a href="'" className="btn">
          View Profile
        </a>
      </div>
    </div>
  );
}

export default CardCmpnt;
