import layout from "../styles/layout.module.css";
import { IoIosSearch } from "react-icons/io";
import { LuBell } from "react-icons/lu";
import style from "../styles/Header/header.module.css";
import ListNav1 from "./ListNav1";
import useHeaderItem from "../hooks/useHeaderItem";
import React from "react";
import type { ListNav } from "../api/APIClient";
import style1 from "../styles/Header/BoxSearchUser.module.css"
import { data } from "react-router";
import Search from "./Search";
import User from "./User";
import Location from "./Location";

export interface TypeContextHeader {
  list: ListNav[] | undefined;
  error: Error | null | string;
  isLoading: boolean;
}

export const ContextHeader = React.createContext<TypeContextHeader | undefined>(
  undefined,
);
const Header = () => {
  const { list, error, isLoading } = useHeaderItem();
  console.log(error,isLoading);

  return (
    <div dir="rtl" className={[layout.header].join(" ")}>
     
        <ContextHeader.Provider value={{ list, error, isLoading }}>
          <ListNav1 />
        </ContextHeader.Provider>
  
      {/* <div
        className={[style.container, " gap-3 p-1 h-100 d-flex flex-row"].join(
          " ",
        )}
      >
        <Search />
        <User />
      </div>

      <Location /> */}
    </div>
  );
};

export default Header;
