import { useState } from "react";

import { BsPencilFill } from "react-icons/bs";

import styles from "./TLDesk.module.css";

var title = {
    type: "web_design",
    title: "UI, UX, design development in Figma, landing page about Ford car salon",
}

var description = {
    status: "started",
    time: "13 may 2 pm",
    priority: "high",
    teamLead: "JohnPiohn",
    specific: "Ts design figma.pdf",
    difficult: "medium",
}

var tools = {
    one: "create report",
    two: "visibility",
}

var stages = {
    progress: 62,
    performers: {

    }
}

function Title(props) {
    const { type, title } = props;

    let styleCommon = {
        display: "inline-block",
        margin: "auto",
    }

    return (
        <div className={styles.title}>
            <div style={{backgroundColor: "#BDC7F9",
                         borderRadius: "12px",
                         padding: "10px",
                         borderWidth: "3",
                         borderColor: "#2845D6",
                         ...styleCommon}}>{type}</div>
            <div style={styleCommon}>{title}</div>
            <div style={styleCommon}>
                <BsPencilFill />
                <div style={styleCommon}>edit</div>
            </div>
        </div>
    )
}

function Description() {
    return (
        <div style={{
            display: "block",
            marginTop: "20px",
            height: "40vh",
            width: "30vw",
            backgroundColor: "#FFFFFF",
            borderRadius: "12px"
        }}>
            Description
        </div>
    )
}

function Tools() {
    return (
        <div style={{
            display: "block",
            marginTop: "20px",
            height: "20vh",
            width: "30vw",
            backgroundColor: "#FFFFFF",
            borderRadius: "12px"
        }}>
            Tools
        </div>
    )
}

function Stages() {
    return (
        <div style={{
            display: "inline-block",
            height: "80vh",
            width: "60vw",
            backgroundColor: "#FFFFFF",
            borderRadius: "12px"
        }}>
            Stages
        </div>
    )
}

function TLDesk() {
    const [project, setProject] = useState({empty: true});

    //useEffect();

    return (
        <div>
            <Title type={title.type} title={title.title}/>
            <div style={{
                display: "inline"
            }}>
                <Description />
                <Tools />
            </div>
            <div style={{
                display: "inline"
            }}>
                <Stages />
            </div>
        </div>
        
    )
}

export default TLDesk;