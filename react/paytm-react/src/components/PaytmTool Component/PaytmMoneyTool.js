import PaytmMoneyToolCmpnt from "./PaytmMoneyToolCmpnt";
import "./paytmmoneytool.css";

function PaytmMoneyTool() {
  const PaytmMoneyData = [
    {
      heading: "Invest in Stocks",
      image: "/img/paytmmoney-1.webp",
    },
    {
      heading: "Apply for IPO",
      image: "/img/paytmmoney-2.webp",
    },
    {
      heading: "Invest in ETFs",
      image: "/img/paytmmoney-3.webp",
    },
    {
      heading: "Buy Gold",
      image: "/img/paytmmoney.webp",
    },
    {
      heading: "Invest in Mutual Funds",
      image: "/img/paytmmoney-5.webp",
    },
  ];
  return (
    <div className="money-tool-section">
      {PaytmMoneyData.map((el) => (
        <PaytmMoneyToolCmpnt
          key={Math.random().toString()}
          heading={el.heading}
          image={el.image}
        />
      ))}
    </div>
  );
}

export default PaytmMoneyTool;
