import React, {useEffect, useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import axios from "axios";

const nickname = sessionStorage.getItem("nickname");
const requiredMessage = `필수 응답란입니다.`;
const warningStyle = {
  color: 'red'
};

const schema = yup.object().shape({
  questGender: yup.string().required(requiredMessage),
  questOld: yup.string().required(requiredMessage),
  questUsageTerm: yup.string().required(requiredMessage),
  questPermTerm: yup.string().required(requiredMessage),
  questDyeTerm: yup.string().required(requiredMessage),
  questRecommend: yup.number().required(requiredMessage),  
});

function SurveyForm() {
  const [showModal, setShowModal] = useState(false);
  // 모달을 사용하기 위한 state

  const { control, handleSubmit, setValue, formState: {errors}, watch } = useForm({
    resolver: yupResolver(schema),
  });
  // 폼을 작성하기 위한 메서드 집합들.
  
  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    let formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("gender", data.questGender);
    formData.append("old", data.questOld);
    formData.append("use_age_term", data.questUsageTerm);
    formData.append("perm_term", data.questPermTerm);
    formData.append("dye_term", data.questDyeTerm);
    formData.append("recommend_or_not", data.questRecommend);


    axios.post('http://3.34.182.50:5000/survey', formData)
      .then(function(response) {
        console.log('설문조사 업로드 성공');
      })
      .catch(function(error) {
        console.log('설문조사 업로드 실패', error);
      });

    /*
     * gender
     * old
     * use_age_term
     * perm_term
     * dye_term
     * recommend_or_not
     */
  };  // '제출' 버튼을 클릭했을때 발생하는 것들.

  const handleModalClose = () => setShowModal(false);

  useEffect(() => {
    if (watch('questRecommend') == 0) {
      setShowModal(true);
    }
  }, [watch('questRecommend')]);

  const handleYesButtonClick = () => {
    setValue('questRecommend', 0);
    setShowModal(false);
  };

  const handleNoButtonClick = () => {
    setValue('questRecommend', 1);
    setShowModal(false);
  };

  return (
    <div style={{display:'flex'}}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          정말 헤어케어 제품을 추천받지 않으시겠어요?
        </Modal.Body>
        <Modal.Footer>
                <Button variant="danger" onClick={handleYesButtonClick}>
                    네
                </Button>
                <Button variant="primary" onClick={handleNoButtonClick}>
                    아니오
                </Button>
        </Modal.Footer>
      </Modal>
      {/* 모달 정의 부분 */}
      
      <h1>검사전 설문</h1>
      <p style={{justifyContent: 'center', width: '100%'}}>보다 정확한 진단을 위해 필요하니 응답해주시면 감사하겠습니다.<br></br>
      <span style={{color:'red'}}>별 표시( * )가 있는 항목은 필수응답 항목입니다.</span></p>

      <div>
        <p> * 성별을 알려주세요.</p>
        <Controller
          name="questGender" // 이름은 유일해야 합니다.
          control={control} // useForm에서 받은 control을 전달합니다.
          defaultValue="" // 기본값을 설정할 수 있습니다.
          render={({ field }) => (
            <div>
              <select {...field}>
                <option value="" disabled>선택해주세요</option>
                <option value="남자">남자</option>
                <option value="여자">여자</option>
                {/* 추가적인 선택 옵션을 필요에 따라 추가할 수 있음 */}
              </select>
            </div>
          )}
        />
        {errors.questGender && <p style={warningStyle}>{errors.questGender.message}</p>}
      </div>
      <br></br>

      <div>
        <p> * 연령대를 알려주세요.</p>
        <Controller
          name="questOld"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <select {...field}>
                <option value="" disabled>선택해주세요</option>
                <option value="10대미만">10대미만</option>
                <option value="10대">10대</option>
                <option value="20대">20대</option>
                <option value="30대">30대</option>
                <option value="40대">40대</option>
                <option value="50대">50대</option>
                <option value="60대">60대</option>
                <option value="70대">70대</option>
                <option value="80대">80대</option>
                {/* 추가적인 선택 옵션을 필요에 따라 추가할 수 있음 */}
              </select>
            </div>
          )}/>
        {errors.questOld && <p style={warningStyle}>{errors.questOld.message}</p>}
      </div>
      <br></br>
      
      <div>
        <p> * 샴푸 사용빈도를 알려주세요.</p>
        <Controller
          name="questUsageTerm"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <select {...field}>
                <option value="" disabled>
                  선택해주세요
                </option>
                <option value="사용하지 않음">사용하지 않음</option>
                <option value="하루 1회 미만">하루 1회 미만</option>
                <option value="하루 1회">하루 1회</option>
                <option value="하루 2회">하루 2회</option>
                <option value="하루 2회 이상">하루 2회 이상</option>
                {/* 추가적인 선택 옵션을 필요에 따라 추가할 수 있음 */}
              </select>
            </div>
          )}/>
        {errors.questUsageTerm && <p style={warningStyle}>{errors.questUsageTerm.message}</p>}
      </div>
      <br></br>

      <div>
        <p> * 파마 주기를 알려주세요.</p>
        <Controller
          name="questPermTerm"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <select {...field}>
                <option value="" disabled>
                  선택해주세요
                </option>
                <option value="파마를 하지 않음">파마를 하지 않음</option>
                <option value="한달에 1번">한달에 1번</option>
                <option value="분기(3개월)당 1회">분기(3개월)당 1회</option>
                <option value="1년에 2회">1년에 2회</option>
                <option value="1년에 1회">1년에 1번</option>
                {/* 추가적인 선택 옵션을 필요에 따라 추가할 수 있음 */}
              </select>
            </div>
          )}/>
        {errors.questPermTerm && <p style={warningStyle}>{errors.questPermTerm.message}</p>}
      </div>
      <br></br>

      <div>
        <p> * 염색 주기를 알려주세요.</p>
        <Controller
          name="questDyeTerm"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <select {...field}>
                <option value="" disabled>
                  선택해주세요
                </option>
                <option value="염색을 하지 않음">염색을 하지 않음</option>
                <option value="한달에 1번">한달에 1번</option>
                <option value="분기(3개월)당 1회">분기(3개월)당 1회</option>
                <option value="1년에 2회">1년에 2회</option>
                <option value="1년에 1회">1년에 1번</option>
                {/* 추가적인 선택 옵션을 필요에 따라 추가할 수 있음 */}
              </select>
            </div>
          )}/>
        {errors.questDyeTerm && <p style={warningStyle}>{errors.questDyeTerm.message}</p>}
      </div>
      <br></br>

      <div>
        <p>헤어케어 제품을 추천받으시겠습니까?</p>
        <Controller
          name="questRecommend"
          control={control}
          defaultValue={1}
          render={({ field }) => (
            <div>
              <select {...field}>
                <option value={1}>추천을 받겠습니다.</option>
                <option value={0}>추천을 받지 않겠습니다.</option>
                {/* 추가적인 선택 옵션을 필요에 따라 추가할 수 있음 */}
              </select>
              {/* 추가적인 체크 박스 옵션을 필요에 따라 추가할 수 있음 */}
            </div>
          )}
        />
        {errors.questRecommend && <p style={warningStyle}>{errors.questRecommend.message}</p>}
      </div>
      <br></br>

      <button type="submit">제출</button>
    </form>

    </div>

  );
}

export default SurveyForm;