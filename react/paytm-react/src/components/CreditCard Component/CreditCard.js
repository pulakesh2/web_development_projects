import CreditCardCmpnt from "./CreditCardCmpnt";
import "./creditcard.css";
// import "./general.css";
function CreditCard() {
  const creditData = [
    {
      smallImage: "img/card-1.png",
      heading: "Unlimited CashbackEvery time",
      para: "Paytm HDFC Bank Select Credit Card. A card with assured Cashback and incredible offers.",
      image: "img/card-01.webp",
    },
    {
      smallImage: "img/card-2.png",
      heading: "India's Most Sincere Credit Card",
      para: "Paytm SBI Card SELECT - With Intelligent Features & Great Rewards that Never Expire ",
      image: "img/card-02.webp",
    },
  ];
  return (
    <div className="credit-section">
      {creditData.map((el) => (
        <CreditCardCmpnt
          key={Math.random().toString()}
          heading={el.heading}
          para={el.para}
          smallImage={el.smallImage}
          image={el.image}
        />
      ))}
    </div>
  );
}

export default CreditCard;
