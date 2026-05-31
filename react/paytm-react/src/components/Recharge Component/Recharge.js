import RechargeCmpnt from "./RechargeCmpnt";
import "./Recharge.css";
import "./../general.css";
function Recharge() {
  const RechargeData = [
    {
      image: "./img/mobile.png",
      about: "Recharge Prepaid",
      link: "Mobile",
    },
    {
      image: "./img/home.png",
      about: "Pay Rent",
      link: "Payment",
    },
    {
      image: "./img/bulb.png",
      about: "Pay Electricity",
      link: "Bill",
    },
    {
      image: "./img/dth.png",
      about: "Recharge DTH",
      link: "Connection",
    },
    {
      image: "./img/cylinder.png",
      about: "Book Gas",
      link: "Cylinder",
    },
    {
      image: "./img/creditcard.png",
      about: "Pay Credit",
      link: "Card Bill",
    },
    {
      image: "./img/layer.png",
      about: "All Payment",
      link: "Services",
    },
  ];
  return (
    <div className="recharge-section">
      <h2 className="secondary-heading recharge-heading">
        Recharge & Pay Bills on Paytm.
      </h2>
      <div className="recharge-flex">
        {RechargeData.map((el) => (
          <RechargeCmpnt
            key={Math.random().toString()}
            image={el.image}
            about={el.about}
            link={el.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Recharge;
