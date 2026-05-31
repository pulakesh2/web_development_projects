import "./CardSection.css";
import Card from "./../../layout/Card";
import { dataObj } from "../../data/Data";

const CardSection = () => {
  return (
    <div className="grid card__section">
      {dataObj.map((el) => (
        <Card
          key={Math.random().toString()}
          name={el.seriesName}
          image={el.seriesImage}
          date={el.realeseDate}
          id={el.id}
        />
      ))}
    </div>
  );
};

export default CardSection;
