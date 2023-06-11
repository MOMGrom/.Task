import BurgersMenu from "../components/BurgersMenu/BurgersMenu";
import SideBar from "../components/SideBar/SideBar";
import HelloPageLoginButton from "../components/buttons/HelloPageLoginButton/HelloPageLoginButton";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AddBt from "../components/TlDesk/Started/AddBt";

function HelloPage() {

    const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <AddBt/>
      <HelloPageLoginButton />
    </div>
  );
}

export default HelloPage;
