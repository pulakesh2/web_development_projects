import PaytmMoneyTool from "./PaytmMoneyTool";
import "./paytmmoney.css";
import "./../general.css";
function PaytmMoney() {
  return (
    <div className="money-section container">
      <div className="paytm-money-section">
        <div className="img-logo-box">
          <img src="img/paytmmoneylogo.webp" className="img-logo" alt="" />
        </div>
        <p className="money-para">
          Get started on wealth creation journey with Zero brokerage fee & no
          hidden charges.
        </p>
        <a href="'" className="tool-link">
          Learn More &rarr;
        </a>
      </div>
      <PaytmMoneyTool />
    </div>
  );
}

export default PaytmMoney;
