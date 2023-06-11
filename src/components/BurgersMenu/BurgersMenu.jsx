import style from "./BurgersMenu.module.css"


function BurgersMenu({ handlClickMenu }) {

    return(
        <div>
            
            <button className={style.burger} onClick={handlClickMenu}><svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="6" rx="3" fill="#2845D6"/>
<rect y="24" width="40" height="6" rx="3" fill="#2845D6"/>
<rect y="12" width="40" height="6" rx="3" fill="#2845D6"/>
</svg>
</button>
            
        </div>
    )
}

export default BurgersMenu