import React, { useState,useEffect } from "react";
import { useForm,Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import useSignupToken from "components/Functions/useSignupToken";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function RegisterPage() {
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
  const [data, setData] = useState("");
  const signupToken = useSignupToken(); // useSignupToken 훅을 사용하여 토큰 가져오기
  const [smsSent, setSmsSent] = useState(false);
  const [smsToken, setSmsToken] = useState("");
  const navigate = useNavigate();  // 회원가입 성공시 페이지 이동시킬 useNavigate 훅
  
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
  const onSubmit = (formData) => {
    try{
      // 백엔드로 데이터와 signupToken을 함께 전송하는 로직을 구현할곳
      axios.post('http://13.113.206.129:8081/user/'+signupToken, { ...formData});
      console.log(formData, signupToken);
      navigate('/login'); // 회원가입 완료 페이지로 리디렉션
      // 예: axios.post('https://your-backend.com/api/register', { ...formData, signupToken: signupToken });
    } catch (error) {
      console.error('Error during login:', error);
  }

  }; 
  // http://13.113.206.129:8081/sms/+signupToken


  // SMS 인증 보내기
  const requestSmsToken = async () => {
    const phone = watch("phone");
    try {
        await axios.post('http://13.113.206.129:8081/sms/'+signupToken, { phone : phone });
        setSmsSent(true); // SMS 요청 성공 상태 설정
    } catch (error) {
        console.error('Error requesting SMS token:', error);
    }
  };

  // SMS 인증번호 확인 
  const verifySmsToken = async () => {
      try {
          const response = await axios.post('http://13.113.206.129:8081/sms/verify/'+signupToken, { code: smsToken, });
          // SMS 인증 성공 처리
          console.log('SMS verified:', response.data);
          setData(JSON.stringify(response.data)); // 백엔드 응답을 데이터로 설정
      } catch (error) {
          console.error('Error verifying SMS token:', error);
      }
  };

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
                    <Controller
                      name="name"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="text"
                          placeholder="name"
                          style={{height:"40px", fontSize:"20px", fontWeight:"500", textAlign:"center"}}
                        />
                      )}
                    /><br />
                      <Controller
                      name="nickname"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="text"
                          placeholder="nickname"
                          style={{height:"40px", fontSize:"20px", fontWeight:"500", textAlign:"center"}}
                        />
                      )}
                    /><br />

                    <Controller
                      name="phone"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="phone"
                          placeholder="phone"
                          style={{height:"40px", fontSize:"20px", fontWeight:"500", textAlign:"center"}}
                        />
                      )}
                    /><br />
                      {!smsSent && 
                        <Button 
                          block
                          className="btn-icon btn-round" 
                          href="#pablo"
                          style={btnStyle}
                          onClick={requestSmsToken}>
                          Request for SMS Verification
                        </Button>}
                      {smsSent && (
                        <>
                            <Input
                                type="text"
                                value={smsToken}
                                onChange={(e) => setSmsToken(e.target.value)}
                                style={{height:"40px", fontSize:"20px", fontWeight:"500", textAlign:"center"}}
                                placeholder="Enter the verification code."
                            />
                            <Button 
                              block
                              className="btn-icon btn-round" 
                              
                              style={btnStyle}
                              onClick={verifySmsToken}>SMS 인증 확인</Button>
                        </>
                  )}
                  <br />
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input {...field} 
                        type="password" 
                        placeholder="Password" 
                        style={{height:"40px", fontSize:"20px", fontWeight:"500", textAlign:"center"}}/>
                    )}
                  /><br />
                  {/* 비밀번호 확인 필드 */}
                  <Controller
                    name="passwordConfirm"
                    control={control}
                    defaultValue=""
                    rules={{ 
                      validate: value =>
                        value === password || "The passwords do not match"
                    }}
                    render={({ field }) => (
                      <Input {...field} 
                        type="password" 
                        placeholder="Confirm Password"
                        style={{height:"40px", fontSize:"20px", fontWeight:"500", textAlign:"center"}} />
                    )}
                  />
                  {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}

                    
                  </CardBody>
                  <CardFooter className="text-center">
                  <Button
                    style={btnStyle}
                    block
                    className="btn-round"
                    color="info"
                    size="lg"
                    type="submit"
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
