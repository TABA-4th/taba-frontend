import React from "react";
import { useState, useContext } from "react";
import { useForm,Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "components/Functions/AuthContext";
import Cookies from 'js-cookie';

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

function LoginPage() {
  const { register, handleSubmit, control} = useForm();
  const { login } = useContext(AuthContext); // AuthContext에서 login 함수 사용
  const navigate = useNavigate();

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  

  const onSubmit = async (formData) => {
    // console.log("보내기 전 데이터:", formData);
    try {
      const response = await axios.post(
        "http://13.113.206.129:8081/user/login",
        formData
      );
      console.log(response.data); // 로그인 응답 데이터 확인

      const { accessToken, refreshToken } = response.data;
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("refreshToken", refreshToken);
      Cookies.set('access-token', accessToken);
      Cookies.set('refresh-token', refreshToken);
      

      sessionStorage.setItem("nickname", formData.nickname);

      login(); // 로그인 상태 업데이트

      navigate("/"); // 홈페이지로 이동
      //로그인 정보 key 값 nickname을 session storage에다 저장.
    } catch (error) {
      alert('로그인에 실패했습니다. 아이디나 비밀번호를 체크해주세요');
      console.error("Error during login:", error);
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

  const btnStyle = {
    background:"#fff",
    border:"1px solid #fff",
    width:"100%",
    height:"40px",
    color: "#90d8de",
    fontWeight:600,
    fontSize:"14px",
    
  }

  const divisionLine = {
    borderTop: "1px solid #fff",
    margin: "30px 0px", 
  }

  

  return (
    <>
      <IndexNavbar />
      <div style={{width:"100%", height:"75px", backgroundColor:"#90d8de"}} />
      <div className="content" style={{background:"linear-gradient(#90d8de 75%, white)"}}>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto text-center" md="4">
              <Card className="card-login card-plain">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <br /><br /><br /><br />
                <h5 className="title" style={{color:"white", textAlign:"center"}}> LOG IN </h5>
                <CardBody>
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
                    />
                  )}
                /><br />

                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="password"
                      placeholder="password"
                      style={{height:"40px", fontSize:"20px", fontWeight:"500", textAlign:"center"}}
                    />
                  )}
                />
                {/* <Input type="submit" /> */}
                  </CardBody>
                  <CardFooter className="text-center">
                  <Button
                    block
                    className="btn-icon btn-round" 
                    style={btnStyle}
                    type="submit"
                  >
                    LOGIN
                  </Button>
                  <div style={divisionLine} />
                  </CardFooter>
                  <div>
                    <a
                      style={{fontSize:"18px", fontWeight:"700"}}
                      className="link"
                      href="/register"
                    >
                      CREATE AN ACCOUNT
                    </a>
                    <br /><br />
                    <div style={{color:"#fff"}}>
                      Register to receive a personalized scalp analysis and 
                      faster recommendations for shampoo and scalp care devices.
                    </div>
                  </div>
                  <br /><br /><br /><br /><br />
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