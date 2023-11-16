import React, { useState } from 'react';

function Survey() {
  // 설문 조사 질문과 답변을 관리하는 state
  const [surveyData, setSurveyData] = useState([
    { question: '성별을 선택해주세요.', answers: ['남자', '여자'] },
    { question: '연령대를 선택해주세요.', answers: ['10대 미만', '10대', '20대', '30대', '40대', '50대', '60대', '70대', '80대'] },
    { question: '샴푸 사용빈도를 알려주세요.', answers: ['하루 1회 미만','하루 1회', '하루 2회', '하루 3회 이상']},
    { question: '파마 주기를 알려주세요', answers: ['한달에 1회', '분기당 1회', '반년에 1회'] },
    { question: '염색 주기를 알려주세요(셀프 염색 포함)', answers: ['한달에 1회', '분기당 1회', '반년에 1회']},
    //{ question: '현재 모발 상태', answers: ['한달에 1회', '분기당 1회', '반년에 1회'] },
    { question: '(선택)맞춤 두피케어 상품을 희망하시나요?', answers: ['예', '아니오']},
    { question: '(선택)샴푸구매시 고려하는 부분은 무엇인가요?', answers: ['가격', '효능']},
    // 추가적인 질문 및 답변항목은 필요에 따라 추가 혹은 변경.
  ]);
  /*
    다수선택가능, 단답형 등을 추가하려면 추가적인 코드 수정이 필요함.
  */


  // 사용자가 선택한 답변을 저장하는 state
  const [userResponses, setUserResponses] = useState([]);

  // 답변 선택 시 호출되는 함수
  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const newResponses = [...userResponses];
    newResponses[questionIndex] = answerIndex;
    setUserResponses(newResponses);
    // 답변은 userResponses[questionIndex] = answerIndex 형태로 저장됨.
  };
  
  // 설문 조사 결과를 서버에 전송하는 함수 (여기서는 console에 출력)
  const submitSurvey = () => {
    console.log('사용자 응답:', userResponses);
    alert(userResponses);
    // 답변 전송을위한 추가 세팅.
  };

  return (
    <div>
      <h2>설문조사</h2>
      {surveyData.map((questionData, questionIndex) => (
        <div key={questionIndex}>
          <h4>{questionData.question}</h4>
          <ul>
            {questionData.answers.map((answer, answerIndex) => (
              <li key={answerIndex}>
                <input
                  type="radio"
                  name={`question${questionIndex}`}
                  onChange={() => handleAnswerSelect(questionIndex, answerIndex)}
                  checked={userResponses[questionIndex] === answerIndex}
                />
                {answer}
              </li>
            ))}
          </ul>
          <br/>
        </div>
      ))}
      <button onClick={submitSurvey}>제출</button>
    </div>
  );
};

export default Survey;