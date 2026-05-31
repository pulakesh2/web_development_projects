import BuisnessTollCmpnt from "./BuisnessToolCmpnt";
import "./buisnesstool.css";
import "./../general.css";
function BuisnessTool() {
  const toolData = [
    {
      image: "img/tools-1.webp",
      heading: "POS Billing Software",
      para: "Say Hello to Smart Retail Business Management",
    },
    {
      image: "img/tools-2.webp",
      heading: "Paytm for Business App",
      para: "Everything you need to manage your business on your phone",
    },
    {
      image: "img/tools-3.webp",
      heading: "Advertise onPaytm",
      para: "Grow your business by advertising on India’s largest mobile business",
    },
    {
      image: "img/tools-4.webp",
      heading: "Business Khata",
      para: "Managing Khata made easy",
    },
  ];
  return (
    <div className="tool-section container">
      {toolData.map((el) => (
        <BuisnessTollCmpnt
          key={Math.random().toString()}
          heading={el.heading}
          para={el.para}
          image={el.image}
        />
      ))}
    </div>
  );
}

export default BuisnessTool;
