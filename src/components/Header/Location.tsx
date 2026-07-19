import React from "react";
import style from "../Styles/Header/header.module.css"
import { FaArrowDown } from "react-icons/fa6";

const Location = () => {
  return (
    <select  className={[style.selectForm, "form-select m-2"].join(" ")}>
       
      <option className={[style.itemSelect].join(" ")} selected>
        انتخاب لوکیشن
      </option>
    </select>
  );
};

export default Location;
