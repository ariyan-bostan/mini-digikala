import React from "react";
import style from "../Styles/Header/header.module.css";
import styleSearching from "../Styles/Header/Searching.module.css"
import { IoIosSearch } from "react-icons/io";
const Search = () => {
  return (
    <div
      className={[
        style.boxSearch,
        "rounded-5 d-flex flex-row align-items-center p-3",
      ].join(" ")}
    >
      <IoIosSearch color="gray" fontSize={30} />
      <div>
        <p style={{color:"gray"}} className="m-0">جستجو در <span className={[styleSearching.boldText].join(" ")}>دیجی‌کالا</span></p>
      </div>
    </div>
  );
};

export default Search;
