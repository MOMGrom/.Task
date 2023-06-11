import style from "./HelloPageLoginButton.module.css"
import { useNavigate } from "react-router-dom";


function HelloPageLoginButton() {
    const navigate = useNavigate()

    function onClickHandle() {
        navigate("login")
    }
    return(
        <div>
            <button className={style.loginBt} onClick={onClickHandle}>Login</button>
        </div>
    )
    
}


export default HelloPageLoginButton;