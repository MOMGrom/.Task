import style from "./Title.module.css"

function Title() {
    return(
        <div className={style.cont}>
            <h1 className={style.title}>Мои проекты</h1>
            <button className={style.filter}>Фильтр</button>
        </div>
    )
}


export default Title;