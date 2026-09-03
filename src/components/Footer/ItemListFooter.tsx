import React, { useContext } from "react";
import style from "../Styles/Footer/ListFooter.module.css";
import { contextWidth } from "../App";
interface Props {
  items: string[];
  index: number;
}
const ItemListFooter = ({ items, index }: Props) => {
  const property = useContext(contextWidth)!;
  return (
    <div
      className={[
        property.innerWidth > 850
          ? "w-100 d-flex flex-column align-items-center"
          : index === 3
            ? style.containerListFooterBrand
            : "",
      ].join(" ")}
    >
      
      {index === 3 ? (
        <>
          {items.map((i, index1) => (
            <div key={index1} className={[style.boxBrand,"d-flex flex-row justify-content-center"].join(" ")}>
              <img
                style={{width:"5rem",height:"5rem"}}
                src={i}
                alt=""
              />
            </div>
          ))}
        </>
      ) : (
        <>
          {items.map((i, index1) => (
            <p
              style={{ color: "grayText", fontSize: ".7rem" }}
              className="pe-3"
              key={index1}
            >
              {i}
            </p>
          ))}
        </>
      )}
    </div>
  );
};

export default ItemListFooter;
