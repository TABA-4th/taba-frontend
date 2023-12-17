import React, { useState,useEffect} from "react";
import { useForm,Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import useSignupToken from "components/Functions/useSignupToken";
import { yupResolver } from '@hookform/resolvers/yup';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Container,
  Col,
  FormGroup,
  Collapse, UncontrolledTooltip
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import * as yup from 'yup';

const requiredMessage = `필수 응답란입니다.`;

const warningStyle = {
  color: 'red'
};

const schema = yup.object().shape({
  name : yup.string().required(requiredMessage),
  nickname : yup.string().required(requiredMessage),
  phone : yup.string().required(requiredMessage),
  password : yup.string().required(requiredMessage),
  passwordConfirm : yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다')
  .required(requiredMessage),
});

function RegisterPage() {
  const { handleSubmit, watch, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [data, setData] = useState("");
  const signupToken = useSignupToken(); // useSignupToken 훅을 사용하여 토큰 가져오기
  const [smsSent, setSmsSent] = useState(false);
  const [smsToken, setSmsToken] = useState("");
  const navigate = useNavigate();  // 회원가입 성공시 페이지 이동시킬 useNavigate 훅
  const [isInputDisabled, setIsInputDisabled] = useState(false);  // 인증번호입력창 & 검증버튼 관련 훅
  const [isRequestDisabled, setIsRequestDisabled] = useState(false);  // 인증번호 요청 관련 훅
  const [isNicknameValid, setIsNicknameValid] = useState(false); // 닉네임 중복확인 관련 훅
  const currentNickname = watch("nickname"); // 닉네임 인풋값 변경 감지


  
  const password = watch("password"); // 현재 입력된 비밀번호 값을 추적합니다.

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  // 폼 제출 함수
  const onSubmit = async (formData) => {
    try {
      await axios.post('http://13.113.206.129:8081/user/' + signupToken, { ...formData });
      console.log(formData, signupToken);


      navigate('/login'); // 회원가입 완료 후 로그인 페이지 페이지로 이동.
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  // http://13.113.206.129:8081/sms/+signupToken


  // SMS 인증 보내기
  const requestSmsToken = async () => {
    const phone = watch("phone");
    if(phone){
      try {
        await axios.post('http://13.113.206.129:8081/sms/'+signupToken, { phone : phone });
        setSmsSent(true); // SMS 요청 성공 상태 설정
        alert('인증번호가 전송되었습니다.');
        setIsRequestDisabled(!isRequestDisabled);
      } catch (error) {
        console.error('Error requesting SMS token:', error);
        alert('인증번호 요청에 실패하였습니다.');
      }
    }else{
      alert('휴대폰 번호를 입력해주세요');
    }

  };

  // SMS 인증번호 확인 
  const verifySmsToken = async () => {
      try {
          const response = await axios.post('http://13.113.206.129:8081/sms/verify/'+signupToken, { code: smsToken, });
          // SMS 인증 성공 처리
          alert("인증번호가 확인되었습니다");
          console.log('SMS verified:', response.data);
          setData(JSON.stringify(response.data)); // 백엔드 응답을 데이터로 설정
          setIsInputDisabled(!isInputDisabled);
      } catch (error) {
          console.error('Error verifying SMS token:', error);
      }
  };


  // 닉네임 중복 확인 함수
const checkNicknameDuplicate = async () => {
  const nickname = watch("nickname");
  if (!nickname) {
    alert("닉네임을 입력해주세요.");
    return;
  }

  try {
    const response = await axios.post(`http://13.113.206.129:8081/user/signup/verify/${nickname}`);
    if (response.status === 200) {
      alert("사용 가능한 닉네임입니다.");
      setIsNicknameValid(true); // 중복 확인 상태 = true
    }
  } catch (error) {
    if (error.response && error.response.status === 500) {
      alert("이미 사용중인 닉네임입니다.");
      setIsNicknameValid(false); // 중복 확인 상태 = false
    } else {
      console.error('Error checking nickname:', error);
      alert('닉네임 중복 확인 중 오류가 발생했습니다.');
      setIsNicknameValid(false);
    }
  }
};

// 닉네임 인풋값 변경 감지
useEffect(() => {
  // 닉네임 필드가 변경되었다면 중복 확인 상태 초기화, 에러를 방지하기 위함
  setIsNicknameValid(false);
}, [currentNickname]);

  const btnStyle = {
    background:"#fff",
    border:"1px solid #fff",
    width:"310px",
    height:"40px",
    color: "#90d8de",
    fontWeight:700,
    fontSize:"15px",
    paddingTop: "10px"
  }

  const divisionLine = {
    borderTop: "1px solid #fff",
    margin: "30px 0px", 
  }

  return (
    <>
      <IndexNavbar />
      <div style={{width:"100%", height:"75px", backgroundColor:"#90d8de"}} />
        <div className="content" style={{background:"linear-gradient(#90d8de 55%, #9ddee3 78%, white)"}}>
          <Container>
            <Col className="ml-auto mr-auto text-center" md="10">
              <Card className="card-login card-plain">
                <form action="" className="form" method="" onSubmit={handleSubmit(onSubmit)}>
                    <br /><br />
                    <h5 className="title" style={{color:"white", textAlign:"center"}}> CREATE AN ACCOUNT </h5>
                    <CardBody>
                    <FormGroup>
                      <Controller
                        name="nickname"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="text"
                            placeholder="ID"
                            style={{height:"40px", fontSize:"20px", fontWeight:"500", textAlign:"center"}}
                            id="nicknameInput"
                          />
                        )}
                      />
                      <br/>
                      <Button                     
                      style={btnStyle}
                      block
                      className="btn-round"
                      color="info"
                      size="lg"
                      onClick={checkNicknameDuplicate}>ID CHECK</Button>
                      {errors.nickname && (
                        <UncontrolledTooltip placement="right" target="nicknameInput" isOpen={true}>
                          <span style={warningStyle}>{errors.nickname.message}</span>
                        </UncontrolledTooltip>
                      )}
                    </FormGroup>

                    <br/>

                    <FormGroup>
                      <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <Input {...field} 
                            type="password" 
                            placeholder="PASSWORD" 
                            style={{height:"40px", fontSize:"20px", fontWeight:"500", textAlign:"center"}}
                            id="passwordInput"
                          />
                          )}
                      />
                      {errors.password && (                        
                        <UncontrolledTooltip placement="right" target="passwordInput" isOpen={true}>
                          <span style={warningStyle}>{errors.password.message}</span>
                        </UncontrolledTooltip>)}
                    </FormGroup>
                    <br/>
                    {/* 비밀번호 확인 필드 */}
                    <FormGroup>
                      <Controller
                        name="passwordConfirm"
                        control={control}
                        defaultValue=""
                        rules={{ 
                          validate: value =>
                            value == password || "The passwords do not match"
                        }}
                        render={({ field }) => (
                          <Input {...field} 
                            type="password" 
                            placeholder="PASSWORD VERIFICATION"
                            style={{height:"40px", fontSize:"20px", fontWeight:"500", textAlign:"center"}}
                            id="passwordConfirm"
                          />
                        )}
                      />
                      {errors.passwordConfirm && (
                        <UncontrolledTooltip placement="right" target="passwordConfirm" isOpen={true}>
                          <span style={warningStyle}>{errors.passwordConfirm.message}</span>
                        </UncontrolledTooltip>
                      )}
                    </FormGroup>
                    <br/>
                    <FormGroup>
                      <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="text"
                            placeholder="USERNAME"
                            style={{height:"40px", fontSize:"20px", fontWeight:"500", textAlign:"center"}}
                            id="nameInput"
                          />
                        )}
                      />
                      {errors.name && (
                        <UncontrolledTooltip placement="right" target="nameInput" isOpen={true}>
                          <span style={warningStyle}>{errors.name.message}</span>
                        </UncontrolledTooltip>
                      )}
                    </FormGroup>
                    <br/>
                    <FormGroup>
                      <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="phone"
                            placeholder="PHONE NUMBER"
                            style={{height:"40px", fontSize:"20px", fontWeight:"500", textAlign:"center"}}
                            id="phoneInput"
                            disabled={isRequestDisabled}
                          />
                        )}
                      />
                      {errors.phone && (
                        <UncontrolledTooltip placement="right" target="phoneInput" isOpen={true}>
                          <span style={warningStyle}>{errors.phone.message}</span>
                        </UncontrolledTooltip>
                      )}
                      <br/>
                    </FormGroup>
                        <Button 
                          block
                          className="btn-icon btn-round" 
                          href="#pablo"
                          style={btnStyle}
                          onClick={requestSmsToken}
                          disabled={isRequestDisabled}>
                          SMS SEND
                        </Button>
                        <Collapse isOpen={smsSent}>
                          <Input
                              type="text"
                              value={smsToken}
                              onChange={(e) => setSmsToken(e.target.value)}
                              style={{height:"40px", fontSize:"20px", fontWeight:"500", textAlign:"center"}}
                              placeholder="인증번호를 입력해주세요"
                              disabled={isInputDisabled}
                          />
                          <Button 
                            block
                            className="btn-icon btn-round" 
                            style={btnStyle}
                            onClick={verifySmsToken}
                            disabled={isInputDisabled}>
                              SMS CHECK
                          </Button>
                        </Collapse>                        
                  </CardBody>
                  <CardFooter className="text-center">
                  <Button
                    style={btnStyle}
                    block
                    className="btn-round"
                    color="info"
                    size="lg"
                    type="submit"
                    disabled={!isNicknameValid} // 중복 확인이 완료되지 않았다면 버튼을 비활성화
                  >
                    REGISTER
                  </Button>
                  <div style={divisionLine} />
                  <div>
                    <a
                      style={{fontSize:"18px", fontWeight:"700"}}
                      className="link"
                      href="/login"
                    >
                      GO TO LOGIN
                    </a>
                    <br /><br />
                    <div style={{color:"#fff"}}>
                      Secure your account with a simple click.<br /> 
                      Login hassle-free!
                    </div>
                  </div>
                  </CardFooter>
                </form>
              </Card>
            </Col>
            
          </Container>
          <br /><br /><br /><br />
        </div>
        <TransparentFooter />
    </>
  );
}

export default RegisterPage;