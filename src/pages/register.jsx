import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import useSignupToken from "../functions/useSignupToken";
import styles from './loginStyles.module.css';
import axios from "axios";

const RegisterPage = () => {
    const { register, handleSubmit, watch } = useForm();
    const [data, setData] = useState("");
    const signupToken = useSignupToken(); // useSignupToken 훅을 사용하여 토큰 가져오기
    const [smsSent, setSmsSent] = useState(false);
    const [smsToken, setSmsToken] = useState("");
    const navigate = useNavigate();  // 회원가입 성공시 페이지 이동시킬 useNavigate 훅

    // 폼 제출 함수
    const onSubmit = (formData) => {
      try{
        // 백엔드로 데이터와 signupToken을 함께 전송하는 로직을 구현할곳
        axios.post('http://13.113.206.129:8081/user/'+signupToken, { ...formData});
        console.log(formData, signupToken);
        navigate('/register_success'); // 회원가입 완료 페이지로 리디렉션
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
        <div>
            <h3> 회원가입 페이지 </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className={styles.input} {...register("name")} placeholder="name" />
                <input className={styles.input} {...register("nickname")} placeholder="nickname" />
                <input className={styles.input} {...register("phone")} placeholder="phone" />
                {!smsSent && <button type="button" onClick={requestSmsToken}>SMS 인증 요청</button>}
                {smsSent && (
                    <>
                        <input
                            className={styles.input}
                            type="text"
                            value={smsToken}
                            onChange={(e) => setSmsToken(e.target.value)}
                            placeholder="SMS 인증번호 입력"
                        />
                        <button type="button" onClick={verifySmsToken}>SMS 인증 확인</button>
                    </>
                )}
                <input className={styles.input} type="password" {...register("password")} placeholder="password" />
                <p>{data}</p>
                <input className={styles.inputsub} type="submit" />
            </form>
        </div>
    );
}

export default RegisterPage;