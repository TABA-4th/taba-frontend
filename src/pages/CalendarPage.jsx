import React from 'react';
import { useMediaQuery } from 'react-responsive';
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

const CalenderPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 899 });
  const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1423 });
  const isDesktop = useMediaQuery({ minWidth: 1424 });

  const diagnoseData = getDiagnoseData();

  return (
    <div >
      {isMobile && (
        <div style={{ backgroundColor: '#2ecc71', color: 'white', padding: '10px' }}>
          <h2>Calender - Mobile View</h2>
          <p>This is the content for smaller screens.</p>
        </div>
      )}
      {isTablet && (
        <div style={{ backgroundColor: '#e67e22', color: 'white', padding: '20px' }}>
          <h2>Calender - Tablet View</h2>
          <p>This is the content for medium-sized screens.</p>
        </div>
      )}
      {isDesktop && (
        <div style={{ backgroundColor: '#3498db', color: 'white', padding: '30px' }}>
          <h2>Calender - Desktop View</h2>
          <p>This is the content for larger screens.</p>
        </div>
      )}
    </div>,
        <div>
      <h1>Calendar Page</h1>
      <Calendar diagnoseData={diagnoseData} />
    </div>

  );
}

export default Calender;
