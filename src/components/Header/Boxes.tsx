import React, { type ReactNode } from "react";
import style from "../Styles/Header/header.module.css";

interface Props {
  children: ReactNode;
}

const Boxes = ({ children }: Props) => {
  return (
    <div
      className={[
        style.cotainerSearchUser,
        `d-flex flex-row justify-content-center align-items-center gap-3 mx-2 pt-1`,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default Boxes;
