import React, { useContext, useEffect, useState } from "react";
import styleLayout from "../Styles/Layout.module.css";
import style from "../Styles/Header/header.module.css";
import NavList1 from "./NavList1";
import Search from "./Search";
import User from "./User";
import Location from "./Location";
import useWidthWindow from "../Hooks/useWidthWindow";
import Logo from "./Logo";
import BoxShop from "./BoxShop";
import Boxes from "./Boxes";
import List2 from "./List2";
import BoxCategory from "./BoxCategory";
import BoxList2 from "./BoxList2";
import {  contextWidth } from "../App";

interface TypeContextHeader {
  innerWidth: number;
}

export const contextHeader = React.createContext<TypeContextHeader | undefined>(
  undefined,
);

const Header = () => {
  const contextWidth1=useContext(contextWidth)!;

  return (
    <contextHeader.Provider value={{ innerWidth:contextWidth1.innerWidth }}>
      <div className={[styleLayout.header].join(" ")}>
        <NavList1 />

        <Boxes>
          <Logo />
          <Search />
          <User />
          <BoxShop />
        </Boxes>

        <div className="w-100 d-flex flex-row ">
          {contextWidth1.innerWidth > 850 && (
            <div className="pe-2 d-flex flex-row h-100 align-items-center ">
              <BoxCategory />

              <BoxList2 />
              <div>
                <p
                  style={{ fontSize: ".8rem", color: "gray" }}
                  className="m-0 me-2"
                >
                  سوالی دارید؟
                </p>
              </div>
            </div>
          )}
          <Location />
        </div>
      </div>
    </contextHeader.Provider>
  );
};

export default Header;
