import PowerBox from "./PowerBox";
import "./Powers.css";

const Powers = () => {
  const topicsData = [
    { title: "Uncertain About Everything." },
    { title: "Does not know about Themeselve." },
    { title: "Fear is the real power." },
    { title: "Purpose of Life is Problem." },
    { title: "Nobody Loves Us." },
    { title: "Success is a Dream for Us." },
  ];

  return (
    <div className="powers__box">
      <h2 className="powers__box-header u-margin-bottom-lg">
        A <span className="loser">Loser</span> has many powers, So Lets see some
        of the powers a Loser Has.
      </h2>
      <ol className="powers__box-list">
        {topicsData.map((el) => (
          <PowerBox key={Math.random().toString()} title={el.title} />
        ))}
      </ol>
    </div>
  );
};

export default Powers;
