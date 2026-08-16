import React, { useContext, type ReactNode } from "react";
import { contextWidth } from "../App";

interface Props{
    children:ReactNode;
}

const ContainerProductList = ({children}:Props) => {
    const property=useContext(contextWidth)!;
  return (
    <div
      style={property.innerWidth < 850 ? { background: "#f6f6f6" } : {}}
      className="containerProducts pt-1"
    >{children}</div>
  );
};

export default ContainerProductList;
