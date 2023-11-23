import React from 'react';
import Calendar from '../components/Calendar';

/*
  CalendarPage에서 받아야하는 
*/

function getDiagnoseData (memberId = '') {
  const diagnoseData = [
    {diagnoseDate : '2023-11-29', diagnoseResult : '검사결과2'},
    {diagnoseDate : '2023-11-26', diagnoseResult : '검사결과1'},
    {diagnoseDate : '2023-11-01', diagnoseResult : '검사결과3'},
    {diagnoseDate : '2023-12-12', diagnoseResult : '검사결과4'},
    {diagnoseDate : '2023-10-18', diagnoseResult : '검사결과5'},
  ];
  // memberID를 통해 백엔드 DB로부터 검사결과를 불러와, 디스트럭쳐화 해서 검사결과를 받아와야함.
  /**
   * diagnoseDate : 'YYYY-MM-DD' (검사일)
   * diagnoseResult : '검사결과' (검사결과, 임시표시)
   */
  return diagnoseData;
};

const CalendarPage = () => {
  const diagnoseData = getDiagnoseData();
  // 여기서 필요시 '검사자ID'와 '검사결과링크'가 더 필요할 수 있음.
  // diagnoseData는 함수로 백엔드로 부터 받아와야 할 것임.

  return (
    <div>
      <h1>Calendar Page</h1>
      <Calendar diagnoseData={diagnoseData} />
    </div>
  );
};

export default CalendarPage;