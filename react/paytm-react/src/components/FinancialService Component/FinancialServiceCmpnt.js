import "./../general.css";
import "./financialservicecmpnt.css";

function FinancialServiceCmpnt(props) {
  return (
    <div className="container finance-card">
      <div className="content">
        <div className="finance-logo-box">
          <img src={props.financeLogo} className="finance-image" alt="hello" />
        </div>
        <h1 className="secondary-heading finance-heading">{props.heading}</h1>
        <p className="primary-para">{props.para}</p>
        <button className="download-btn">
          <a href="'" className="download">
            Learn More &rarr;
          </a>
        </button>
      </div>
      <div className="finance-img-box">
        <img src={props.image} className="finance-img" alt="hello" />
      </div>
    </div>
  );
}

export default FinancialServiceCmpnt;
