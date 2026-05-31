import CardCmpnt from "./CardCmpnt";
import "./cardcmpnt.css";

function Card() {
  const modelData = [
    {
      name: "Ivy Labelle",
      job: "Pornstart",
      dob: "3 March 2023",
      image: "img/ivy.png",
      profileImage: "img/ivy-logo.png",
    },
    {
      name: "Rose Romero",
      job: "Public Figure",
      dob: "3 March 2023",
      image: "img/rose.png",
      profileImage: "img/rose-logo.png",
    },
    {
      name: "Ms Puiyi",
      job: "Public Figure",
      dob: "3 March 2023",
      image: "img/ms.png",
      profileImage: "img/ms-logo.png",
    },
    {
      name: "Amanda Fransson",
      job: "Public Figure",
      dob: "3 March 2023",
      image: "img/amanda.png",
      profileImage: "img/amanda-logo.png",
    },
    {
      name: "Sommer Ray",
      job: "Public Figure",
      dob: "3 March 2023",
      image: "img/sommer.png",
      profileImage: "img/sommer-logo.png",
    },
    {
      name: "Nicole Aniston",
      job: "Pornstart",
      dob: "3 March 2023",
      image: "img/nicole.png",
      profileImage: "img/nicole-logo.png",
    },
    {
      name: "Ivana Knoll",
      job: "Public Figure",
      dob: "3 March 2023",
      image: "img/knoll.png",
      profileImage: "img/knoll-logo.png",
    },
    {
      name: "Dani Daniels",
      job: "Pornstart",
      dob: "3 March 2023",
      image: "img/dani.png",
      profileImage: "img/dani-logo.png",
    },
    {
      name: "Natalia Barulich",
      job: "Public Figure",
      dob: "3 March 2023",
      image: "img/natalia.png",
      profileImage: "img/natalia-logo.png",
    },
    {
      name: "Angela White",
      job: "Pornstart",
      dob: "3 March 2023",
      image: "img/angela.png",
      profileImage: "img/angela-logo.png",
    },
    {
      name: "Serena Beckere",
      job: "Public Figure",
      dob: "3 March 2023",
      image: "img/serena.png",
      profileImage: "img/serena-logo.png",
    },
    {
      name: "Eva Lovia",
      job: "Pornstart",
      dob: "3 March 2023",
      image: "img/eva.png",
      profileImage: "img/eva-logo.png",
    },
    {
      name: "Amanda Trivizas",
      job: "Public Figure",
      dob: "3 March 2023",
      image: "img/triviaz.png",
      profileImage: "img/triviaz-logo.png",
    },
    {
      name: "Madday castellano",
      job: "Public Figure",
      dob: "3 March 2023",
      image: "img/madday.png",
      profileImage: "img/madday-logo.png",
    },
    {
      name: "Filippa Fransson",
      job: "Public Figure",
      dob: "3 March 2023",
      image: "img/filippa.png",
      profileImage: "img/filippa-logo.png",
    },
  ];
  return (
    <div className="card-section">
      {modelData.map((el) => (
        <CardCmpnt
          key={Math.random().toString()}
          name={el.name}
          job={el.job}
          dob={el.dob}
          image={el.image}
          profileImage={el.profileImage}
        />
      ))}
    </div>
  );
}

export default Card;
