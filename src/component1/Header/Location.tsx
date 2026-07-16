import React from 'react'
import style from "../styles/Header/SelectSearch.module.css"

const Location = () => {
  return (
    <div className={style.container}>
        <select   className={[style.searchSelect,"form-select"].join(" ")}  >
            <option selected value="">انتخاب منطقه</option>
        </select>
      </div>
  )
}

export default Location