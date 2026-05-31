import BuisnessServiceCmpnt from "./BusinessServiceCmpnt";
import "./../general.css";
function BuisnessService() {
  const buisnessData = [
    {
      heading: "Accept payments online with ease",
      para: "Grow your business with the payment gateway that powers India’s largest brands and even the Paytm App",
      image: "img/buisness-1.webp",
    },
    {
      heading: "In-shop payments powered by Paytm.",
      para: "Millions of small & big businesses use Paytm to accept payments anywhere any time with a wide range of solutions for all kind of merchants",
      image: "img/buisness-2.webp",
    },
  ];
  return (
    <div>
      <h2 className="primary-heading">Business Services by Paytm</h2>
      {buisnessData.map((el) => (
        <BuisnessServiceCmpnt
          key={Math.random().toString()}
          heading={el.heading}
          para={el.para}
          image={el.image}
        />
      ))}
    </div>
  );
}
export default BuisnessService;
