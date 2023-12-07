import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// const Data = {
//   "dry" : dry,
//   "greasy" : greasy,
//   "erythema_between_hair_follicles" : erythemaBetweenHairFollicles,
//   "dandruff" : dandruff,
//   "loss" : loss,
//   "erythema_pustules" : erythemaPustules
// };

function ResultGraph(props) {
  // Radar 차트에 표시할 데이터
  const userName = sessionStorage.getItem("nickname");
  const graphData = props.graphData;
  // console.log(graphData);
  const data = {
    labels: ['미세각질', '피지', '모낭간 홍반', '비듬', '탈모', '모낭홍반농포'],
    datasets: [
      {
        label: userName,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: [
          graphData["dry"],
          graphData["greasy"],
          graphData["erythema_between_hair_follicles"],
          graphData["dandruff"],
          graphData["loss"],
          graphData["erythema_pustules"],
        ],
      },
      // {
      //   label: 'Student B',
      //   backgroundColor: 'rgba(255, 99, 132, 0.2)',
      //   borderColor: 'rgba(255, 99, 132, 1)',
      //   pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
      //   data: [70, 75, 80, 85, 60, 80],
      // },
    ],
  };
  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      r: {
        suggestedMin: -1,
        suggestedMax: 4,
        reverse: true,
        pointLabels: {
          font: {
            size: 20, // Adjust the font size as needed
          },
        },
      },
    },
    animation: true,
  };
  
  const chartStyle = {
    width: '500px', // Set the width of the chart
    height: '500px', // Set the height of the chart
  };

  return (
    <div style={{ marginTop: 20 }}> {/* Check for any unnecessary margin or padding */}
      <Radar 
        data={data}
        options={chartOptions}
        style={chartStyle}
      />
    </div>
  );
};

export default ResultGraph;
