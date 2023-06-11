import { useState } from "react";


function ProjectVidget() {
    return (
        <div>
            Project
        </div>
    )
}



function ProjectsList() {
    const [list, setList] = useState([])
    
    return (
        <div>
            <input type="search" />
            <div>Filter</div>
            <div>Projects</div>
            <button></button>
            <button></button>
            <button></button>
        </div>
    )
}

export default ProjectsList;