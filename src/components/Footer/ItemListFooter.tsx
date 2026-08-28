import React, { useContext } from "react";
import { contextWidth } from "../App";
interface Props {
  items: string[];
}
const ItemListFooter = ({ items }: Props) => {
    const property=useContext(contextWidth)!;
  return (
    <div className={[property.innerWidth>850?"w-100 d-flex flex-column align-items-center":""].join(" ")}>
      {items.map((item1, index1) => (
        <p
          style={{ color: "grayText", fontSize: ".7rem" }}
          className="pe-3"
          key={index1}
        >
          {item1}
        </p>
      ))}
    </div>
  );
};

export default ItemListFooter;
