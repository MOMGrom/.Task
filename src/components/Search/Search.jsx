import style from "./Search.module.css"
import {useState} from 'react'

function Search(props) {
const {value, onChange} = props;

    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        search(e.target.value)
    }
    const handleSearch = () => {

    }
    return(
        <div>
            <input className={style.inputSearch} type="text" 
            value={value}
            placeholder="Поиск"
            onChange={onChange}/>
        </div>
    )
}

export default Search