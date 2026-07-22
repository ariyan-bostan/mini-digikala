import React, { useEffect, useState } from "react";
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

interface TypeContextHeader {
  innerWidth: number;
}

export const contextHeader = React.createContext<TypeContextHeader | undefined>(
  undefined,
);

const Header = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useWidthWindow(setInnerWidth);

  return (
    <contextHeader.Provider value={{ innerWidth }}>
      <div className={[styleLayout.header].join(" ")}>
        <NavList1 />

        <Boxes>
          <Logo />
          <Search />
          <User />
          <BoxShop />
        </Boxes>

        <div className="w-100 d-flex flex-row ">
          {innerWidth > 850 && (
            <div className="d-flex flex-row h-100 align-items-center">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
            </div>
          )}
          <Location />
        </div>
      </div>
    </contextHeader.Provider>
  );
};

export default Header;
