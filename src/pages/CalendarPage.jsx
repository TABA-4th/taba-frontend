import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Calendar from '../components/Calendar';
import axios from "axios";

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
  const isMobile = useMediaQuery({ maxWidth: 899 });
  const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1423 });
  const isDesktop = useMediaQuery({ minWidth: 1424 });

  //const nickname = sessionStorage.getItem("nickname"); // sessionStorage에서 nickname을 가져옴
  const nickname = "jungwoo";
  const [diagnoseData, setDiagnoseData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date()); // 현재 보여지는 달을 저장하는 state


  useEffect(() => {
    const fetchDiagnoseData = async () => {
      try {
        const response = await axios.post(
          "http://13.113.206.129:8081/diagnosis/result",
          {
            nickname,
            date: formatDate(currentDate), // 현재 보여지는 달의 날짜를 전송
          }
        );
        //alert(`데이터 성공적으로 받아왔음. ${response.data.toString}`);
        setDiagnoseData(response.data);
      } catch (error) {
        console.error("Error fetching diagnose data:", error);
        alert(`데이터 불러오기 실패. ${nickname}, ${formatDate(currentDate)}`);
      }
    };

    fetchDiagnoseData();
  }, [currentDate]); // currentDate가 변경될 때마다 fetchDiagnoseData 실행

  const handleDateClick = (info) => {
    // FullCalendar에서 dateClick 이벤트가 발생하면 현재 보여지는 달을 업데이트
    setCurrentDate(info.date);
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 0-indexed month를 1-indexed로 변환
    return `${year}/${month}`;
  };

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
      <Calendar diagnoseData={diagnoseData} handleDateClick={handleDateClick} nickname={nickname}/>
    </div>

  );
}

export default CalendarPage;
