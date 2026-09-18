import React from "react";

interface Props{
    children:string|undefined
}

const TitleProduct = ({children}:Props) => {
  return (
    <div className="w-100 pe-2 py-2 ">
      <p className="titleInformationProduct">{children}</p>
    </div>
  );
};

export default TitleProduct;
