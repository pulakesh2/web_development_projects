import "./../general.css";
import "./paytmmoneytoolcmpnt.css";
function PaytmMoneyToolCmpnt(props) {
  return (
    <div className="money-card">
      <div className="image-money-box-footer">
        <img src={props.image} className="image-money-footer" alt="" />
      </div>
      <h1 className="primary-para money-card-para">{props.heading}</h1>
    </div>
  );
}

export default PaytmMoneyToolCmpnt;
