import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./loginStyles.module.css";
import axios from "axios";
import { AuthContext } from "../functions/AuthContext"; // AuthContext 임포트

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [loginResult, setLoginResult] = useState(""); // 로그인 결과를 저장할 상태
  const { login } = useContext(AuthContext); // AuthContext에서 login 함수 사용
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "http://13.113.206.129:8081/user/login",
        formData
      );
      console.log(response.data); // 로그인 응답 데이터 확인

      const { accessToken, refreshToken } = response.data;
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("refreshToken", refreshToken);

      login(); // 로그인 상태 업데이트
      setLoginResult("로그인 성공!"); // 로그인 성공 메시지 설정

      navigate("/"); // 홈페이지로 이동
    } catch (error) {
      console.error("Error during login:", error);
      setLoginResult("로그인 실패. 다시 시도해주세요."); // 로그인 실패 메시지 설정
    }
  };

  return (
    <div>
      <h3 style={{ justifyContent: "center", textAlign: "center" }}>
        로그인 페이지
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          {...register("nickname")}
          placeholder="nickname"
        />
        <input
          className={styles.input}
          type="password"
          {...register("password")}
          placeholder="password"
        />
        <input className={styles.inputsub} type="submit" />
      </form>
      {loginResult && <p>{loginResult}</p>} {/* 로그인 결과 표시 */}
    </div>
  );
};

export default LoginPage;
