import "./paymentCmpnt.css";
import "./../general.css";

function PaymentCmpnt(props) {
  return (
    <div className="payment">
      <div className="payment-section container">
        <div className="content">
          <div className="pay-img">
            <div className="pay-img-wallet">
              <img className="wallet" src={props.smallImage} alt="hello" />
            </div>
            <p className="primary-para wallet-para">{props.samllText}</p>
          </div>
          <div className="secondary-heading">{props.heading}</div>
          <div className="primary-para ">{props.para}</div>
          <button className="download-btn">
            <a href="'" className="download">
              Download Paytm App
            </a>
          </button>
        </div>
        <div className="img">
          <img className="wallet-img" src={props.image} alt="hello" />
        </div>
      </div>
    </div>
  );
}

export default PaymentCmpnt;
