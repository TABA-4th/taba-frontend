import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from './loginStyles.module.css';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

  return (
    <div>
      <h3> 로그인 페이지 </h3>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <input className={styles.input}{...register("name")} placeholder="name" />
        <input className={styles.input}{...register("nickname")} placeholder="nickname" />
        <p>{data}</p>
        <input className={styles.inputsub} type="submit" />
      </form>
    </div>
  );
}

export default LoginPage;
