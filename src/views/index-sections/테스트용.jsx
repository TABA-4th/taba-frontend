import React from 'react';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
  Legend,
} from 'recharts';

const COLORS_DIC = {
  dry: '#0088FE',
  greasy: '#00C49F',
  erythema_between_hair_follicles: '#FFBB28',
  dandruff: '#FF8042',
  loss: '#ba42ff',
  erythema_pustules: '#ff429a',
};

const UserJoinChart = (props) => {
  console.log("이 아래는 UserJoinChart");
  console.log(props.graphData);
  if (!props.graphData || Object.keys(props.graphData).length === 0) {
    return (
      <ChartWrapper>
        <div>데이터 없음</div>
      </ChartWrapper>
    );
  }

  // const keys = Object.keys(props.graphData);
  // const datasource = keys.map((key) => ({
  //   type: key,
  //   value: props.graphData[key], // Use the received value directly
  // }));

  const data = [
    {
      "name": "건성",
      "value": props.graphData.dry
    },
    {
      "name": "피지",
      "value": props.graphData.greasy
    },
    {
      "name": "모낭간 홍반",
      "value": props.graphData.erythema_between_hair_follicles
    },
    {
      "name": "비듬",
      "value": props.graphData.dandruff
    },
    {
      "name": "탈모",
      "value": props.graphData.loss
    },
    {
      "name": "모낭간 홍반",
      "value": props.graphData.erythema_pustules
    },
    // {
    //   "name": "Page G",
    //   "uv": 3490,
    //   "pv": 4300
    // }
  ]
  
  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name"/>
      <YAxis tickLine={false} axisLine={false} dataKey="value" domain={[0, 4]}/>
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#82ca9d" barSize={20} minPointSize={0}/>
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
  )

  // return (
  //   <ChartWrapper>
  //     <ResponsiveContainer width="100%" height="100%">
  //       <BarChart layout="vertical" data={datasource}>
  //         <YAxis dataKey="type" type="category" tickLine={true} axisLine={true} />
  //         <XAxis dataKey="value" type="number" domain={[0, 100]} hide />
  //         <Tooltip cursor={false} />
  //         <Bar
  //           dataKey="value" // Use the received value directly
  //           barSize={6}
  //           background={{ fill: '#f3f3f3' }}
  //           radius={[10, 10, 10, 10]}
  //         >
  //           {datasource.map((entry, index) => (
  //             <Cell key={`cell-${index}`} fill={COLORS_DIC[entry.type]} />
  //           ))}
  //         </Bar>
  //       </BarChart>
  //     </ResponsiveContainer>
  //   </ChartWrapper>
  // );
};

const ChartWrapper = styled.div`
  height: 260px;
`;

export default UserJoinChart;
