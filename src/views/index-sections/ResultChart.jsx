import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import {UncontrolledTooltip} from 'reactstrap';

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
  const avgGraphData = props.avgGraphData || null;
  const avgOld = props.old !== "0대" ? `${props.old} 평균` : `유아 평균`;
  
  // console.log(graphData);
  const data = {
    labels: ['미세각질', '피지과다', '모낭사이홍반', '비듬', '탈모', '모낭홍반농포'],
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
      {
        label: avgOld,
        backgroundColor: 'rgba(192, 75, 192, 0.2)',
        borderColor: 'rgba(192, 75, 192, 1)',
        pointBackgroundColor: 'rgba(192, 75, 192, 1)',
        pointBorderColor: '#eee',
        pointHoverBackgroundColor: '#eee',
        pointHoverBorderColor: 'rgba(192, 75, 192, 1)',
        data: [
          avgGraphData["dry"],
          avgGraphData["greasy"],
          avgGraphData["erythema_between_hair_follicles"],
          avgGraphData["dandruff"],
          avgGraphData["loss"],
          avgGraphData["erythema_pustules"],
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
    maintainAspectRatio: true,
    scales: {
      r: {
        suggestedMin: -1,
        suggestedMax: 4,
        reverse: true,
        pointLabels: {
          font: {
            size: '15px', 
            weight: '800',
          },
        },
      },
    },
    layout: {
      margin: {
        left: '10px',
        right: '10px',
        top: '5px',
        bottom: '10px'
      }
    },
    animation: true,

  };
  
  const chartStyle = {
    width: '100%',
    height: '100%', 
  };

  return (
    <>
      <div>
        {document.getElementById("GraphExplanation") ? 
        <UncontrolledTooltip placement="top" target="GraphExplanation">
            <p>육각형이 클수록 <span style={{color: 'blue'}}>양호하다는 것을</span>
              작을수록 <span style={{color: 'red'}}>좋지않다는 것을</span>의미합니다.</p>
        </UncontrolledTooltip> : <></>}
      </div>
      <div id="GraphExplanation" style={{ marginTop: 30, marginBottom: 30, width: '100%', overflowX: 'auto'}}> 
        <Radar 
          data={data}
          options={chartOptions}
          style={chartStyle}
        />
      </div>
    </>
  );
};

export default ResultGraph;