import React from "react";
import styleAmz from "../../Styles/Main/AmazingBox.module.css"

const Timer = () => {
  return (
    <div className="clock d-flex align-items-center gap-2">
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
