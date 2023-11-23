import React, { useState } from 'react';
import '../components/Signup.css';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
        email,
        password,
        phoneNumber,
        name,
        nickname,
      };
      
    console.log('Submitted Data:', submitData);
    alert(submitData);
  };

  return (
    <h1>회원가입</h1>,
    <form onSubmit={handleSubmit}>
      <label>
        <span>이메일</span>
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        <span>비밀번호</span>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <label>
      <span>연락처</span>
        <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
      </label>
      <br />
      <label>
        <span>이름</span>
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        <span>닉네임</span>
        <input type="text" value={nickname} onChange={handleNicknameChange} />
      </label>
      <br />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignupForm;
