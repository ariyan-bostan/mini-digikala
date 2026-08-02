import React, { useContext } from "react";
import styleAmz from "../../Styles/Main/AmazingBox.module.css"
import { contextWidth } from "../../App";

const Timer = () => {
  const property =useContext(contextWidth)!;
  return (
    <div className={[" d-flex align-items-center gap-2",(property.innerWidth>850)?"m-2":""].join(" ")}>
      <div
        className={[
          styleAmz.boxClock,
          "d-flex align-items-center justify-content-center",
        ].join(" ")}
      >
        00
      </div>
      <div
        className={[
          styleAmz.boxClock,
          "d-flex align-items-center justify-content-center",
        ].join(" ")}
      >
        00
      </div>
      <div
        className={[
          styleAmz.boxClock,
          "d-flex align-items-center justify-content-center",
        ].join(" ")}
      >
        00
      </div>
    </div>
  );
};

export default Timer;
