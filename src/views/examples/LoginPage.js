import React from "react";
import { useState, useContext } from "react";
import { useForm,Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "components/Functions/AuthContext";

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

function LoginPage() {
  const { register, handleSubmit, control} = useForm();
  const [loginResult, setLoginResult] = useState(""); // 로그인 결과를 저장할 상태
  const { login } = useContext(AuthContext); // AuthContext에서 login 함수 사용
  const navigate = useNavigate();

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  

  const onSubmit = async (formData) => {
    console.log("보내기 전 데이터:", formData);
    try {
      const response = await axios.post(
        "http://13.113.206.129:8081/user/login",
        formData
      );
      console.log(response.data); // 로그인 응답 데이터 확인

      const { accessToken, refreshToken } = response.data;
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("refreshToken", refreshToken);

      sessionStorage.setItem("nickname", formData.nickname);

      login(); // 로그인 상태 업데이트
      setLoginResult("로그인 성공!"); // 로그인 성공 메시지 설정

      navigate("/"); // 홈페이지로 이동
      //로그인 정보 key 값 nickname을 session storage에다 저장.
    } catch (error) {
      console.error("Error during login:", error);
      setLoginResult("로그인 실패. 다시 시도해주세요."); // 로그인 실패 메시지 설정
    }
  };

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
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
                          href="/register"
                        >
                          Create Account
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

export default LoginPage;
