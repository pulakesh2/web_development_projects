import "./CreditCardCmpnt.css";
import "./../general.css";

function CreditCardCmpnt(props) {
  return (
    <div className="credit-card">
      <div>
        <div className="bank-card">
          <img src={props.smallImage} className="bank-img" alt="hello" />
        </div>
        <h1 className="secondary-heading">{props.heading}</h1>
        <p className="primary-para">{props.para}</p>
        <div>
          <img src={props.image} className="credit-img" alt="hello" />
        </div>
      </div>
    </div>
  );
}

export default CreditCardCmpnt;
