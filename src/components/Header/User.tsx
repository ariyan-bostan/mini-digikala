import React, { useContext } from "react";
import { FiBell } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import style from "../Styles/Header/header.module.css";
import { contextHeader } from "./Header";

const User = () => {
    const property=useContext(contextHeader)!;
  return (
    <div
      className={[
        style.boxUser,
        property.innerWidth>850?"gap-4 border-0":" ",
        "d-flex flex-row justify-content-center align-items-center gap-4",
      ].join(" ")}
    >
      <FiBell fontSize={25} color="gray"  />
      {property.innerWidth>850 &&<FaRegUser fontSize={20} />}
    </div>
  );
};

export default User;
