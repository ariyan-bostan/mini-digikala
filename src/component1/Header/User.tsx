import React from "react";
import style from "../styles/Header/User.module.css";
import { LuBell } from "react-icons/lu";

const User = () => {
  return (
    <div
      className={[
        style.boxUser,
        "h-100 w-10 d-flex justify-content-center align-items-center",
      ].join(" ")}
    >
      <div className={[style.search, "border rounded-circle p-2"].join(" ")}>
        <LuBell fontSize={30} />
      </div>
    </div>
  );
};

export default User;
