import style from "./LoginForm.module.css";
import { useState } from "react";
import Logo from "../icons/Logo";
import { Link, useNavigate } from "react-router-dom";

function LoginForm(props) {
  const { setUser } = props;

  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text.length > 0) {
      setUser("teamlead")
      navigate("../")
    }
    setText("");
  };

  return (
    <>
      {/* <div className={style.bg}></div>
      <div className={style.bg2}></div>
      <div className={style.bg3}></div> */}
      <div className={style.mainForm}>
        <Logo className={style.logoForm} />
        <h1 className={style.titleForm}>Вход</h1>
        <br />
        <br />
        <br />
        <form className={style.loginForm} onSubmit={onSubmitHandler}>
          <label className={style.labelLogin}>Электронная почта:</label>
          <input
            className={style.inputLogin}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}></input>
            <label className={style.labelLogin}>Пароль:</label>
          <input
            className={style.inputLogin}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}></input>
            <div className={style.linkTitle}>Нет аккаунта?<Link  className={style.linkLogin} to='../registration'> Зарегистрируйся!</Link></div>
          <button className={style.loginBt} type="submit">
            Войти
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
