import React from "react";
// import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const PieChart = () => {
  // console.log(props.data);
  // const [people, setPeople] = useState({
  //   label: "Last 30 Days",
  //   data: [334000, 624000],
  // });

  // const data = [
  //   {
  //     label: "Last 30 Days",
  //     data: [334000, 624000],
  //   },
  //   {
  //     label: "Last 15 Days",
  //     data: [500000, 500000],
  //   },
  //   {
  //     label: "Last Week",
  //     data: [450000, 550000],
  //   },
  // ];

  // setPeople(data.find((el) => (el.label = props.data)));

  // console.log(people);
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Amount Pending", "Amount Recieved"],
          datasets: [
            {
              label: "Last 30 Days",
              data: [334000, 624000],
              backgroundColor: ["#ffd43b", "#495057"],
            },
          ],
        }}
        options={{
          responsive: true,
          aspectRatio: 2,
        }}
      />
    </div>
  );
};

export default PieChart;
