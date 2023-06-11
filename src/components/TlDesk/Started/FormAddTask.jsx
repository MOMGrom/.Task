import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./FormAddTask.module.css";

function FormAddTask(props) {
const {onSave} = props;


  const [titleTask, setTitleTask] = useState("");
  const [selectLevel, setSelectLevel] = useState("");
  const [selectPrioritet, setSelectPrioritet] = useState("");
  const [selectDeadLine, setSelectDeadline] = useState("");


  const handleChange = (event) => {
    setSelectLevel(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectDeadline(date);
  };

  return (
    <div className={style.taskForm}>
      <h1 className={style.title}>Создать задачу!</h1>
      <form action="">
        <div className={style.labelAdd}>
          <label htmlFor="title">Название:</label>
        </div>
        <div>
          <input className={style.inputAdd} id="title" type="text" />
        </div>

        <div className={style.labelAdd}>
          <label htmlFor="level">Уровень сложности:</label>
        </div>
        <div>
          <select className={style.selectLevel} id="level" value={selectLevel} onChange={handleChange}>
            <option className={style.selectLevelOption} value="Легкий">Легкий</option>
            <option className={style.selectLevelOption} value="Средний">Средний</option>
            <option className={style.selectLevelOption} value="Сложный">Сложный</option>
          </select>
        </div>

        <div className={style.labelAdd}>
          <label htmlFor="specialization">Специализация задачи:</label>
        </div>
        <div>
          <input className={style.inputAdd} id="specialization" type="text" />
        </div>

        <div className={style.labelAdd}>
          <label htmlFor="description">Краткое описание задачи:</label>
        </div>
        <divx>
          <textarea className={style.inputAdd} id="description" type="text" />
        </divx>

        <div className={style.labelAdd}>
          <label htmlFor="deadline">Дата сдачи проекта:</label>
          </div>
          <div>
          <input className={style.inputAdd} id="description" type="datetime-local" />
        </div>
        
        <div className={style.labelAdd}>
          <label htmlFor="attachment">Техническое задание:</label>
        </div>
        <div className={style.fileInput}>
          <input className={style.inputAdd} id="attachment" type="file" />
        </div>
        <button className={style.saveBt}type="submit" onClick={onSave}>Сохранить</button>
      </form>
    </div>
  );
}

export default FormAddTask;
