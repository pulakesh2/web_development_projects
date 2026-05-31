import RechargeCmpnt from "./../Recharge Component/RechargeCmpnt";
import "./../Recharge Component/Recharge.css";
import "./../general.css";
function Buy() {
  const buyData = [
    {
      image: "./img/movieticket.png",
      link: "Movie Ticket",
    },
    {
      image: "./img/flightticket.png",
      link: "Flight Ticket",
    },
    {
      image: "./img/busticket.png",
      link: "Bus Ticket",
    },
    {
      image: "./img/trainticket.png",
      link: "Train Ticket",
    },
    {
      image: "./img/cylinder.png",
      link: "Buy Insurance",
    },
    {
      image: "./img/internationalflight.png",
      link: "International Flight",
    },
    {
      image: "./img/invest&stock.webp",
      link: "Invest in Stock",
    },
  ];
  return (
    <div className="buy-section recharge-section">
      <h1 className="secondary-heading recharge-heading">
        Book & Buy on Paytm.
      </h1>
      <div className="recharge-flex">
        {buyData.map((el) => (
          <RechargeCmpnt
            key={Math.random().toString()}
            image={el.image}
            link={el.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Buy;
