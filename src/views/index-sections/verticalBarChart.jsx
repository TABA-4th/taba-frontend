import React from 'react';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from 'recharts';
import {UncontrolledTooltip} from 'reactstrap';

function additionalInformation(){
  return (
    <p style={{fontSize: '13px'}}>
      <span style={{color: 'red'}}>모낭홍반농포</span>는 일반적으로 염증과 농포 형성이 더 두드러지는 반면, <span style={{color: 'red'}}>모낭사이홍반</span>은 모낭 주변의 피부에 주로 붉은 염증이 나타나는 것이 특징입니다.
    </p>
  );
}

const VBarChart = (props) => {
  console.log("이 아래는 UserJoinChart");
  console.log(props.graphData);
  if (!props.graphData || Object.keys(props.graphData).length === 0) {
    return (
      <ChartWrapper>
        <div>데이터 없음</div>
      </ChartWrapper>
    );
  }

  const data = [
    {
      name: "미세각질",
      value: props.graphData.dry
    },
    {
      name: "피지",
      value: props.graphData.greasy
    },
    {
      name: "모낭사이홍반",
      value: props.graphData.erythema_between_hair_follicles
    },
    {
      name: "비듬",
      value: props.graphData.dandruff
    },
    {
      name: "탈모",
      value: props.graphData.loss
    },
    {
      name: "모낭홍반농포",
      value: props.graphData.erythema_pustules
    },
  ];

  return (
    <>
      <div>
        {document.getElementById("needAdditionalInformation") ? 
        <UncontrolledTooltip placement="top" target="needAdditionalInformation">
            <p>{additionalInformation()}</p>
        </UncontrolledTooltip> : <></>}
      </div>
      <div id="needAdditionalInformation">
        <BarChart layout="vertical" width={500} height={300} data={data} style={{fontSize:'larger', fontWeight:"1000"}}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
          <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} width={100}/>
          <XAxis type="number" tickLine={false} axisLine={false} domain={[0, 4]} />
          <Tooltip content={CustomTooltip} />
          <Bar dataKey="value" barSize={20} minPointSize={-1}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.value)} />
            ))}
          </Bar>
        </BarChart>
      </div>

    </>

  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const dataKey = payload[0].dataKey;
    // console.log("아래는 순서대로 데이터키, 밸류");
    // console.log(dataKey);
    const value = payload[0].value;
    // console.log(value);
    let tooltipContent = '';

    // 데이터 키에 따라 툴팁 내용을 사용자 정의
    switch (dataKey) {
      case 'value':
        tooltipContent = `${value}: ${getSeverity(value)}`;
        break;
      // 다른 데이터 키에 대한 추가 케이스가 필요하면 추가하세요.

      default:
        tooltipContent = '';
    }

    return (
      <div style={{ background: '#fff', border: '1px solid #ccc', padding: '10px' }}>
        {tooltipContent}
      </div>
    );
  }

  return null;
};


const getColor = (value) => {
  // Define your color logic based on the value
  if (value <=1) {
    return '#66B2FF'; // sky
  } else if (value <= 2) {
    return '#33FF99'; // Green
  } else if (value <= 3) {
    return '#FF6666'; // warning
  } else {
    return '#FF6666'; // red
  }
};

const getSeverity = (value) => {
  if (value == 0) {
    return '양호';
  } else if (value <= 1) {
    return '경증';
  } else if (value <= 1.5){
    return '경중간';
  } else if (value <= 2) {
    return '중등도';
  } else if (value <= 3) {
    return '중증';
  } else {
    return 'N/A';
  }
};

const ChartWrapper = styled.div`
  height: 260px;
`;

export default VBarChart;
