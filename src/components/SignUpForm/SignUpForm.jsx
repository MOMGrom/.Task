import style from "../SignUpForm/SignUp.module.css";
import LogoSign from "../icons/LogoSign";
import Logo from "../icons/LogoSign";
import { useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [userSurName, setUserSurName] = useState("");
  const [userFirstName, setuserFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [lengthPassword, setLengthPassword] = useState(true);
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkInput, setCheckInput] = useState(true);

  function handlFormSubmit(event) {
    event.preventDefault();

    const checkValidEmail = () => {
      return validator.isEmail(email)
    }


    setCheckEmail(checkValidEmail(email));

    if (userSurName == "") {
      setCheckInput(false);
    } else {
      setCheckInput(true);
    }

    if (password !== rePassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }

    if (password.length <= 8) {
      setLengthPassword(false);
    } else {
      setLengthPassword(true);
    }
  }
  return (
    <>
      {/* <div className={style.bg}></div>
      <div className={style.bg2}></div>
      <div className={style.bg3}></div> */}

      <div className={style.mainForm}>
        <LogoSign />
        <form onSubmit={handlFormSubmit}>
          <label className={style.labelSign}>Электронная почта:</label>
          <input
            className={style.inputSign}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!checkEmail && (
            <div className={style.passwordMatch}>Введите валидную эл.почту</div>
          )}

          <label className={style.labelSign}>Фамилия:</label>
          <input
            className={style.inputSign}
            type="text"
            value={userSurName}
            onChange={(e) => setUserSurName(e.target.value)}
          />
          {!checkInput && (
            <div className={style.passwordMatch}>
              Поле не должно быть пустым!
            </div>
          )}

          <label className={style.labelSign}>Имя:</label>
          <input
            className={style.inputSign}
            type="text"
            value={userFirstName}
            onChange={(e) => setuserFirstName(e.target.value)}
          />
          {!checkInput && (
            <div className={style.passwordMatch}>
              Поле не должно быть пустым!
            </div>
          )}
          <label className={style.labelSign}>Пароль:</label>
          <input
            className={style.inputSign}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!lengthPassword && (
            <div className={style.passwordMatch}>
              Пароль должен быть больше 8 символов!
            </div>
          )}
          <label className={style.labelSign}>Повторно введите пароль:</label>
          <input
            className={style.inputSign}
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          {!passwordsMatch && (
            <div className={style.passwordMatch}>Пароли не совпадают!</div>
          )}
          <div className={style.linkTitle}>
            Есть аккаунт?
            <Link className={style.linkLogin} to="../login">
              {" "}
              Войти
            </Link>
          </div>
          <button className={style.loginBt} type="submit">
            Регистрация
          </button>
        </form>
      </div>
    </>
  );
          }

export default SignUpForm;
