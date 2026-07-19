import React, { useContext } from "react";
import style from "../Styles/Header/header.module.css";
import { ContextHeader, type ValueHeader } from "../App";
const NavList1 = () => {
  const { list, error, isLoading } = useContext(ContextHeader)!;
  console.log("kos", list);

  return (
    <div
      className={[
        style.navListContainer,
        "d-flex flex-row align-items-center",
      ].join(" ")}
    >
      {list?.map((item, index) => (
        <div key={index} className={[style.box, "rounded-3 m-1 d-flex flex-column justify-content-center align-items-center"].join(" ")}>
            <div className={[style.boxIconNav1].join(" ")}><img className="w-100 h-100 object-fit-contain" src={item.icon} alt="" /></div>
            <p className="p-0 m-0">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default NavList1;
