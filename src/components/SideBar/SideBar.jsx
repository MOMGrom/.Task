import { useState } from "react";

import { CgProfile } from "react-icons/cg";
import { TbTargetArrow } from "react-icons/tb";
import { FaChartBar } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";

import styles from "./SideBar.module.css";


function SideBar() {
  const [isOpen, setIsOpen] = useState(false);


  let menuItemStyle = {
    textAlign: `${isOpen ? "left" : "center"}`,
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: "20px",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };

  let menuTextStyle = {
    color: "#FFFFFF",
    display: "inline-block",
    marginLeft: "20px",
  };

  let menuIconStyle = {
    color: "#FFFFFF",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  };

  return (
    <div
      className={isOpen ? styles.open : styles.minimized}
      >
    </div>
  );
}

export default SideBar;
