import React from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ["January", "February", "March", "April", "May", "June", "July"];
  const data = {
    labels,
    datasets: [
      {
        label: "Prices",
        data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      }
    ]
  };
const options = {
    responsive: true,
    plugins: {
      legend: {},
      title: {
        display: false
      }
    }
};
const BalanceChart =  () =>{

    return <Wrapper>
        <Line data={data} options={options} width={200} height={100}></Line>
    </Wrapper>
}

export default BalanceChart

const Wrapper = styled.div`
`