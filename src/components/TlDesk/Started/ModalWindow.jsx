import style from "./ModalWindow.module.css"
import ReactDOM from 'react-dom';
import TableWorkers from "./TableWorkers";
import mockData from "../../../data/mockData";
import FormAddTask from "./FormAddTask";
import imgBt from '../../icons/Close.png'
import { useState } from "react";

function ModallWindow(props) {
    const [showTable, setShowTable] = useState(false)
    const [showForms, setShowForms] = useState(true)
    const {onCloseModal} = props

    const handleChangeForms = () => {
        setShowTable(true)
        setShowForms(false)
    }
    

    return ReactDOM.createPortal(
        <>
        <div className={style.modalWindow}>
            <button className={style.close} onClick={onCloseModal}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="14" height="14" fill="#F5F5F5"/>
<rect width="1075" height="798" transform="translate(-1040 -16)" fill="white"/>
<rect x="-1040" y="-16" width="1075" height="761" fill="white"/>
<path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#163760"/>
</svg>
</button>
            <h1></h1>
            
            {showForms && <FormAddTask onSave={handleChangeForms} />}
            {showTable && <TableWorkers data={mockData}/> }
            </div>
        </>,
        document.body
    )
}

export default ModallWindow