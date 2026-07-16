import React from 'react'
import style from "../styles/Header/Search.module.css"
import { IoIosSearch } from 'react-icons/io'

const Search = () => {
  return (
    <div
          className={[
            style.boxSearch,
            " rounded-pill -100  d-flex gap-2 flex-row align-items-center",
          ].join(" ")}
        >
          <IoIosSearch fontSize={30} />
          <p className="pt-2">
            {" "}
            جستجو در <span className="searchP">دیجی کالا</span>
          </p>

        </div>
  )
}

export default Search