import "./HeroSection.css";
import "./../general.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="primary-heading hero-heading">
          India's Most-loved Payments App
        </h1>
        <p className="primary-para">
          Recharge & pay bills, book flights & movie tickets, open a savings
          account, invest in stocks & mutual funds, and do a lot more.
        </p>
        <button className="download-btn">
          <a href="'" className="download">
            Download Paytm App
          </a>
        </button>
      </div>
      <div className="hero-img-section">
        <img src="./img/paytm.webp" className="hero-img" alt="hello" />
      </div>
    </div>
  );
}

export default HeroSection;
