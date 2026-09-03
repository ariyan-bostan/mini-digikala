import React, { useContext, type ReactNode } from "react";
import { contextWidth } from "../App";

interface TypeItem{
    title:string;
    paragraph:string
}

interface Props {
  children: ReactNode | TypeItem | TypeItem[];
  information?: string;
  title?:string;
  boli?:boolean
}
const Text = ({ children, information="",title="" ,boli=false}: Props) => {
  const property = useContext(contextWidth)!;
  
  return (
    <>
      <h3
        style={{
          fontSize: property.innerWidth < 850 ? "1rem" : "1.3rem",
          color: "gray",
          fontWeight: "bolder",
        }}
        className="mb-3"
      >
        <>
        
       {boli?  information:title}
        </>

      </h3>
      <div
        style={{
          fontSize: property.innerWidth < 850 ? ".7rem" : ".8rem",
          color: "GrayText",
        }}
        className="mb-3"
      >
        <>{children}</>
      </div>
    </>
  );
};

export default Text;
