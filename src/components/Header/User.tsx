import React from "react";
import { FiBell } from "react-icons/fi";
import style from "../Styles/Header/header.module.css";

const User = () => {
  return (
    <div
      className={[
        style.boxUser,
        "rounded-5  d-flex flex-row justify-content-center align-items-center",
      ].join(" ")}
    >
      <FiBell fontSize={25} color="gray"  />
    </div>
  );
};

export default User;
