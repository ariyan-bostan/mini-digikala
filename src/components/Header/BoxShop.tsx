import React, { useContext } from "react";
import { contextHeader } from "./Header";
import { GiShoppingCart } from "react-icons/gi";

const BoxShop = () => {
  const property = useContext(contextHeader)!;
  return (
    <>
      {property.innerWidth > 850 && (
        <div className="border-end m-0 pe-2">
          <GiShoppingCart fontSize={30} />
        </div>
      )}
    </>
  );
};

export default BoxShop;
