import React, { useContext } from "react";
import style from "../Styles/Header/header.module.css"
import { FaArrowDown } from "react-icons/fa6";
import { contextHeader } from "./Header";

const Location = () => {
    const property=useContext(contextHeader)!;
  return (
    <select  className={[style.selectForm,property?.innerWidth>850?"w-auto":" " ,"form-select m-2"].join(" ")}>
       
      <option className={[style.itemSelect].join(" ")} selected>
        انتخاب لوکیشن
      </option>
    </select>
  );
};

export default Location;
