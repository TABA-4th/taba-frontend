import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, InputGroup } from 'reactstrap';
import Cookies from 'js-cookie';

const Calendar = () => {
  const nickname = sessionStorage.getItem("nickname");
  const [diagnoseData, setDiagnoseData] = useState([]);       // 진단데이터 ( 받아오는 데이터임 )
  const [currentDate, setCurrentDate] = useState(new Date()); // 현재 보여지는 달을 저장하는 state
  const [defaultView, setDefaultView] = useState('dayGridMonth');
  const accessToken = Cookies.get('access-token');
  const refreshToken = Cookies.get('refresh-token');

  //검사결과 모달 관련
  const [diagnosisModalOpen, setdiagnosisModalOpen] = useState(false);
  const toggleModal = () => setdiagnosisModalOpen(!diagnosisModalOpen);
  const [selectedDiagnoseResult, setSelectedDiagnoseResult] = useState(null);

  const handleButtonClick = (diagnosisData) => {
    sessionStorage.setItem('imgUrl', diagnosisData.imageUrl);
    sessionStorage.setItem('dry', diagnosisData.findDeadSkinCells);
    sessionStorage.setItem('greasy', diagnosisData.excessSebum);
    sessionStorage.setItem('erythema_between_hairFollicles', diagnosisData.erythemaBetweenHairFollicles);
    sessionStorage.setItem('dandruff', diagnosisData.dandruff);
    sessionStorage.setItem('loss', diagnosisData.hairLoss);
    sessionStorage.setItem('erythema_pustules', diagnosisData.erythemaPustules);
    // alert(formatDiagnosisResult(diagnosisData));
    window.location.href = '/result';
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
    let formData = new FormData();
    formData.append('DATE', selectedDate);
    formData.append('PERM_FLAG', permChecked);
    formData.append('DYE_FLAG', dyeChecked);
    try {
      console.log(selectedDate);
      console.log(typeof(selectedDate));
      const headers = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      await axios.post(`http://13.113.206.129:8081/hairstatus`, formData, headers);
      toggleAddEventModal();
      window.location.reload();
    } catch (error) {
      alert("Error adding Event");
      console.error("Error adding event:", error);
      // Handle error if needed
    }
  };  // 파마&염색여부 추가기능.

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
        // alert(`데이터 불러오기 실패. ${nickname}, ${formatDate(currentDate)}`);
      }
    };
    fetchDiagnoseData();
  }, [currentDate]); // currentDate가 변경될 때마다 fetchDiagnoseData 실행
  
  
  const formatDate = (date) => {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 0-indexed month를 1-indexed로 변환
      return `${year}/${month}`;
  };  // 백엔드 엔드포인트로 'YYYY-MM'형식으로 쿼리문을 날려주기 위한 포멧팅.

  const handleMonthChange = (info) => {
    const year = info.view.currentStart.getFullYear();
    const month = (info.view.currentStart.getMonth() + 1).toString().padStart(2, '0');
    setCurrentDate(new Date(`${year}/${month}`));
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
      const results = info.event.extendedProps.diagnosisResults;
      setSelectedDiagnoseResult(results);
      toggleModal();
    }
  };  // 날짜 클릭했을때..

  const events = diagnoseData.reduce((accumulator, data) => {
    const existingEvent = accumulator.find((event) => event.date === formatDiagnosisDate(data.diagnosisDate));
    if (existingEvent) {
      existingEvent.extendedProps.diagnosisResults.push(data);
    } else {
      console.log([data]);
      accumulator.push({
        title: '검사결과 있음',
        date: formatDiagnosisDate(data.diagnosisDate),
        extendedProps: {
          diagnosisResults: [data],
        },
      });
    }
    return accumulator;
  }, []);

  return (
    <div>
      <Button onClick={toggleAddEventModal}>Add Event</Button>

      <FullCalendar
        defaultView={defaultView}
        plugins={[dayGridPlugin]}
        eventClick={handleDateClick}
        events={events}
        datesSet={handleMonthChange}
      />

      {/* Modal for adding events */}
      <Modal isOpen={addEventModalOpen} toggle={toggleAddEventModal}>
        <ModalHeader toggle={toggleAddEventModal}>참고사항 기록하기</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="date">Date</Label>
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
          <Button color="primary" onClick={handleAddEvent}>Add</Button>{' '}
          <Button color="secondary" onClick={toggleAddEventModal}>Cancel</Button>
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