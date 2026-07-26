import React, { useContext } from "react";
import style from "../Styles/Header/header.module.css";
import styleSearching from "../Styles/Header/Searching.module.css";
import { IoIosSearch } from "react-icons/io";
import { contextHeader } from "./Header";
import { NavLink } from "react-router";
const Search = () => {
    const propery=useContext(contextHeader)!;
    
  return (
    <div className={[
          style.boxSearch,
          " d-flex flex-row border-0",
        ].join(" ")}>
      <NavLink to={"/searching"}
        style={propery.innerWidth>850?{background:"rgb(208, 208, 208)",textDecoration:"none"}:{textDecoration:"none"}}
        className={[propery.innerWidth>850?"w-50":"w-100","d-flex flex-row align-items-center border p-2 rounded-4"].join(" ")}
      >
        <IoIosSearch color="gray" fontSize={30} />
        <div>
          <p style={{ color: "gray" }} className="m-0">
            جستجو {propery.innerWidth<850 && "در "}
            {propery.innerWidth<850 &&
            <span className={[styleSearching.boldText].join(" ")}>
              دیجی‌کالا
            </span>}
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default Search;
