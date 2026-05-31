import React from "react";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
  console.log(props.data);
  return (
    <div>
      <Bar
        data={{
          labels: props.data.label,
          datasets: [
            {
              label: props.data.type,
              data: [50, 75, 100],
              backgroundColor: props.data.color,
              // barThickness: 18,
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;
