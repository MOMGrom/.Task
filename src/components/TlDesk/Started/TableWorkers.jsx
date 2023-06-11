import mockData from "../../../data/mockData";
import style from './TableWorkers.module.css'
function TableWorkers(props) {
    const {data} = props
    return (
    <div className={style.tableCont}>
    <table className={style.table}>
      <thead className={style.stickyHeader}>
        <tr className={style.FCs}>
            <th>Все</th>
          <th>Фамилия и имя</th>
          <th>Cпециальность</th>
          <th>Опыт</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr
            key={row.id}
          >
            <td><input type="checkbox" /></td>
            <td> <img src={row.avatar} alt="" /> {row.lastName} {row.firsName}</td>
            <td>{row.skill}</td>
            <td>{row.experiennce}</td>

          </tr>
        ))}
      </tbody>
    </table>
    </div>
    )
}

export default TableWorkers;