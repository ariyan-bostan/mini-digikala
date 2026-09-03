import { useContext } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { contextWidth } from "../App";
import style from "../Styles/Layout.module.css";


const ButtonTop = () => {
    const property=useContext(contextWidth)!;
  return (
    <div
      style={{ height: "5rem" }}
      className={[property.innerWidth>850?"w-50 d-flex justify-content-end align-items-center": "d-flex justify-content-center align-items-center"].join(" ")}
    >
      <div
        style={{ background: property.innerWidth<850?"#d5d3d3":"none" }}
        className={["d-flex py-2 px-4 flex-row",property.innerWidth<850?"rounded-4":"border rounded-2"].join(" ")}
      >
        <div
          onClick={() => {
            document.querySelector(`.${style.containerMainFooter}`)?.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          style={{ fontSize: ".8rem", textDecoration: "none" }}
          className="p-0 m-0"
        >
          رفتن به بالا
        </div>
        <IoIosArrowUp className="pe-1" />
      </div>
    </div>
  );
};

export default ButtonTop;
