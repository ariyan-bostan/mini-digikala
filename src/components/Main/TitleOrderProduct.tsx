import React from "react";

interface Props{
    title:string|undefined;
}

const TitleOrderProduct = ({title}:Props) => {
  return (
    <div style={{ height: "10%" }} className="pe-1">
      <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{title}</p>
    </div>
  );
};

export default TitleOrderProduct;
