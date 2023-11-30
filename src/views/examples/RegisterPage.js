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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function RegisterPage() {
  const { register, handleSubmit, watch,control } = useForm();
  const [data, setData] = useState("");
  const signupToken = useSignupToken(); // useSignupToken 훅을 사용하여 토큰 가져오기
  const [smsSent, setSmsSent] = useState(false);
  const [smsToken, setSmsToken] = useState("");
  const navigate = useNavigate();  // 회원가입 성공시 페이지 이동시킬 useNavigate 훅

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

  

  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <form action="" className="form" method="" onSubmit={handleSubmit(onSubmit)}>
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/now-logo.png")}
                      ></img>
                    </div>
                  </CardHeader>
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
                      />
                    )}
                  />
                    <Controller
                    name="nickname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        placeholder="nickname"
                      />
                    )}
                  />

                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="phone"
                        placeholder="phone"
                      />
                    )}
                  />
                    {!smsSent && <Button  onClick={requestSmsToken}>SMS 인증 요청</Button>}
                {smsSent && (
                    <>
                        <Input
                            type="text"
                            value={smsToken}
                            onChange={(e) => setSmsToken(e.target.value)}
                            placeholder="SMS 인증번호 입력"
                        />
                        <Button onClick={verifySmsToken}>SMS 인증 확인</Button>
                    </>
                )}

                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="password"
                        placeholder="password"
                      />
                    )}
                  />

                    <Input type="submit" />
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      size="lg"
                    >
                      Get Started
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          href="/login"
                        >
                          Go to Login
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default RegisterPage;
