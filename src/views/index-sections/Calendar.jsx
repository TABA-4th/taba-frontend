import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, InputGroup } from 'reactstrap';
import Cookies from 'js-cookie';
// import {formatDiagnosisDate, formatDate} from MypageModule;

function format2Json(d){
  /*
  {
    "diagnosisDate": "2023-12-09 13:58:19",
    "imageUrl": "https://taba-image.s3.ap-northeast-2.amazonaws.com/202312091358190074150900.jpeg",
    "findDeadSkinCells": 1.5,
    "excessSebum": 1.5,
    "erythemaBetweenHairFollicles": 1,
    "dandruff": 1,
    "hairLoss": 1,
    "erythemaPustules": 0,
    "gender": "male",
    "old": "20",
    "avgFindDeadSkinCells": 0.51,
    "avgExcessSebum": 1.16,
    "avgErythemaBetweenHairFollicles": 1.04,
    "avgDandruff": 1.02,
    "avgHairLoss": 0.34,
    "avgErythemaPustules": 0.17,
    "topPercentage": "67.2 70.3 42.9 48.4 38.8 49.0 84.1"
}
  */
  const rowDataArray = d.topPercentage.split(" ").map(Number);
  
  const JSONData = {
    class: [d.findDeadSkinCells, d.excessSebum, 
      d.erythemaBetweenHairFollicles, d.dandruff, d.hairLoss, d.erythemaPustules],
    avgClass: [d.avgFindDeadSkinCells, d.avgExcessSebum,
      d.avgErythemaBetweenHairFollicles, d.avgDandruff, d.avgHairLoss,
      d.avgErythemaPustules],
    DANDRUFF: rowDataArray[1],
    ERYTHEMA_BETWEEN_HAIR_FOLLICLES: rowDataArray[2],
    ERYTHEMA_PUSTULES: rowDataArray[3],
    EXCESS_SEBUM: rowDataArray[4],
    FINE_DEAD_SKIN_CELLS: rowDataArray[5],
    HAIR_LOSS: rowDataArray[6],
    total : rowDataArray[0],
    url : d.imageUrl,
    diagnosisDate: d.diagnosisDate
  };

  return JSONData;
}

const Calendar = () => {
  /* 캘린더 구성을 위한 변수들 */
  const nickname = sessionStorage.getItem("nickname");
  const [diagnoseData, setDiagnoseData] = useState([]);       // 진단데이터 ( 받아오는 데이터임 )
  const [currentDate, setCurrentDate] = useState(new Date()); // 현재 보여지는 달을 저장하는 state
  const [defaultView, setDefaultView] = useState('dayGridMonth');
  const accessToken = Cookies.get('access-token');            // accessToken
  const refreshToken = Cookies.get('refresh-token');          // refreshToken
  const [lastDyeDate, setLastDyeDate] = useState(null);
  const [lastPermDate, setLastPermDate] = useState(null);
  const getLastPermDyeDate = async() => { // lastDyeDate랑 lastPermDate를 받아오기 위한 것.
    const headers = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const response = await axios.get(`http://13.113.206.129:8081/hairstatus`, headers);
      if(response.data.startPermDate) {setLastPermDate(response.data.startPermDate);}
      if(response.data.startDyeDate){setLastDyeDate(response.data.startDyeDate);}
      // alert(`${lastDyeDate}, ${lastPermDate}`);
    } catch (error) {
      alert("파마 염색데이터 수신오류");
    }
  };
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
      // 여기다가 이제.. 그 '달의 데이터'가 없을떄 로직 추가.....
      setDiagnoseData(response.data);
    } catch (error) {
      console.error("검사데이터 수신 문제", error);
      // alert(`데이터 불러오기 실패. ${nickname}, ${formatDate(currentDate)}`);
    }
  };
  

  //검사결과 모달 관련 변수
  const [diagnosisModalOpen, setdiagnosisModalOpen] = useState(false);
  const toggleModal = () => setdiagnosisModalOpen(!diagnosisModalOpen);
  const [selectedDiagnoseResult, setSelectedDiagnoseResult] = useState(null);

  const handleButtonClick = async (d) => {
    const rawData = await getDetailResult(d);  // 문자열화 된 JSON파일
    const data = JSON.parse(rawData);
    // alert(data.topPercentage);
    sessionStorage.setItem('diagnosisData', JSON.stringify(format2Json(data)));
    window.location.href = '/result';
};

const getDetailResult = async (d) => {
    const diagnosisDate = d.diagnosisDate.toString();
    try {
        let formData = new FormData();
        formData.append('nickname', nickname); // 'nickname' 변수로 수정
        formData.append('date', diagnosisDate);

        const response = await axios.post("http://13.113.206.129:8081/diagnosis/result/detail", formData, {
            headers: {
                'Content-Type': 'application/json', // 'multipart/form-data'로 변경
                'accept': '*/*',
            }
        });

        console.log(JSON.stringify(response.data));
        return JSON.stringify(response.data);
    } catch (error) {
        alert('수신 문제');
        return -1;
    }
};

  const offcanvasBody = () => {
    return (
      <div>
      {selectedDiagnoseResult &&
        selectedDiagnoseResult.map((result, index) => (
          <div key={index} className="text-center" style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              color="success"
              onClick={() => handleButtonClick(result)}
            >
              상세 검사결과 조회하기
            </Button>
            <p style={{ marginLeft: '10px', verticalAlign: 'middle', marginBottom: '0' }}>검사시간 : {result.diagnosisDate}</p>
          </div>
        ))}
    </div>
    );
  };

  //이벤트 추가 모달 관련
  const [addEventModalOpen, setAddEventModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [permChecked, setPermChecked] = useState(false);
  const [dyeChecked, setDyeChecked] = useState(false);
  const toggleAddEventModal = () => setAddEventModalOpen(!addEventModalOpen);
  const handleAddEvent = async () => {
    if(!selectedDate){
      alert('날짜를 입력해주세요.');
    }else if(!permChecked && !dyeChecked){
      alert('파마 혹은 염색항목중 하나는 반드시 체크해주세요');  
    }else{
      let formData = new FormData();
      formData.append('DATE', selectedDate);
      formData.append('PERM_FLAG', permChecked);
      formData.append('DYE_FLAG', dyeChecked);
      try {
        console.log(selectedDate);
        console.log(typeof(selectedDate));
        let headers = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        await axios.post(`http://13.113.206.129:8081/hairstatus`, formData, headers);
        toggleAddEventModal();
        window.location.reload();
      } catch (error) {
        alert("Error adding Event");
        console.error(error);
        // Handle error if needed
      }
    }
  };  // 파마&염색여부 추가기능.

  useEffect(() => {  // currentDate가 변경될 때마다 fetchDiagnoseData 실행
    fetchDiagnoseData();
  }, [currentDate]);
  
  
  const formatDate = (date) => {
    if (date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      return `${year}/${month}`;
    }
    return "error"; // 또는 다른 기본값을 리턴할 수 있습니다.
  };  // 백엔드 엔드포인트로 'YYYY-MM'형식으로 쿼리문을 날려주기 위한 포멧팅.

  const handleMonthChange = (info) => {
    if (info.view && info.view.currentStart) {
      const year = info.view.currentStart.getFullYear();
      const month = (info.view.currentStart.getMonth() + 1).toString().padStart(2, '0');
      setCurrentDate(new Date(`${year}/${month}`));
    }
  };  // <prev> , <next> month가 클릭될 경우 달이 바뀌게 함.

  const formatDiagnosisDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };  // 날짜 데이터 문자열화


  const handleDateClick = (info) => {
    if (info.event) {
      if(info.event.title === "AI 두피진단"){
        const results = info.event.extendedProps.diagnosisResults;
        setSelectedDiagnoseResult(results);
        toggleModal();  
      }else{
        if(info.event.title === "파마" || info.event.title === "염색"){
          console.log(info.event.date);
          alert(`${info.event.title}기록이 존재합니다.`);
        }
      }
    }
  };  // 날짜의 이벤트를 클릭했을때..

  const events = diagnoseData.reduce((accumulator, data) => {
    const existingEvent = accumulator.find((event) => event.date === formatDiagnosisDate(data.diagnosisDate));
    if (existingEvent) {
      existingEvent.extendedProps.diagnosisResults.push(data);
    } else {
      accumulator.push({
        title: 'AI 두피진단',
        date: formatDiagnosisDate(data.diagnosisDate),  
        extendedProps: {
          diagnosisResults: [data],
        },
      });
    }
    return accumulator;
  }, []);

  // Add events for "파마" and "염색"
  if (lastPermDate) {
    events.push({
      title: '파마',
      date: formatDiagnosisDate(lastPermDate),
      color: 'green',  // Set color for "파마" event
    });
  }

  if (lastDyeDate) {
    events.push({
      title: '염색',
      date: formatDiagnosisDate(lastDyeDate),
      color: 'blue',  // Set color for "염색" event
    });
  }

  /* 페이지가 렌더링될때 무조건 한번씩 실행할 것들. */
  useEffect(() => {
    getLastPermDyeDate();
    fetchDiagnoseData();
  }, []);

  return (
    <div>
      <Button onClick={toggleAddEventModal} style={{
        background:"#90d8de",
        border:"1px solid #fff",
        width:"200px",
        height:"51px",
        fontWeight: "#fff",
        fontWeight: '700',
        fontSize:"13px",
        paddingTop: "15px",
        borderRadius: "13px",
        
      }}>파마&염색 기록하기</Button>
      <br /><br />
      <FullCalendar
        defaultView={defaultView}
        plugins={[dayGridPlugin]}
        eventClick={handleDateClick}
        events={events}
        datesSet={handleMonthChange}
      />

      {/* Modal for adding events */}
      <Modal isOpen={addEventModalOpen} toggle={toggleAddEventModal}>
        <ModalHeader toggle={toggleAddEventModal} >참고사항 기록하기</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="date">날짜</Label>
              <Input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  checked={permChecked}
                  onChange={() => setPermChecked(!permChecked)}
                />
                <span className="form-check-sign"></span>파마
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  checked={dyeChecked}
                  onChange={() => setDyeChecked(!dyeChecked)}
                />
                <span className="form-check-sign"></span>염색
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddEvent}>기록하기</Button>{' '}
          <Button color="secondary" onClick={toggleAddEventModal}>취소하기</Button>
        </ModalFooter>
      </Modal>

      {/* 상세 검사결과 모달 */}
      <Modal isOpen={diagnosisModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>검사결과 상세</ModalHeader>
        <ModalBody>{offcanvasBody()}</ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Calendar;

/*
    꼭 참고해서 사용하자 !!!! FullCalendar의 events 프롭 안에 선언할 수 있는 prop 목록

    title (필수): 이벤트의 제목을 나타내는 문자열.
    date (필수): 이벤트가 발생하는 날짜를 나타내는 문자열 또는 Date 객체.
    start (선택적): 이벤트의 시작 날짜 및 시간을 나타내는 Date 객체 또는 문자열.
    end (선택적): 이벤트의 종료 날짜 및 시간을 나타내는 Date 객체 또는 문자열.
    allDay (선택적): 이벤트가 하루 종일인지 여부를 나타내는 불리언 값.
    extendedProps (선택적): 사용자 정의 속성을 나타내는 객체. 이 속성을 사용하여 추가적인 정보를 이벤트에 첨부할 수 있습니다.
    color (선택적): 이벤트의 배경색을 지정하는 문자열.
    editable (선택적): 이벤트가 사용자에 의해 편집 가능한지 여부를 나타내는 불리언 값.
    display (선택적): 이벤트를 표시하는 방법을 나타내는 문자열.
    classNames (선택적): 이벤트에 적용할 CSS 클래스를 나타내는 문자열 또는 문자열 배열.
    
*/

/*
  const formatDiagnosisResult = (data) => {
    return `${nickname} 님의 검사결과\n `+
      `ImageUrl : ${data.imageUrl}\n` + 
      `DiagnosisDate: ${data.diagnosisDate}\n` +
      `findDeadSkinCells: ${data.findDeadSkinCells}\n` +
      `excessSebum: ${data.excessSebum}\n` +
      `erythemaBetweenHairFollicles: ${data.erythemaBetweenHairFollicles}\n` +
      `dandruff: ${data.dandruff}\n` +
      `hairLoss: ${data.hairLoss}\n` +
      `erythemaPustules: ${data.erythemaPustules}\n`;
  };  // 데이터 문자열화
*/