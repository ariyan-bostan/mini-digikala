import React, { type ReactNode } from "react";
import useList2Header from "../Hooks/useList2Header";
import { LuBadgePercent } from "react-icons/lu";
import { CiShoppingBasket } from "react-icons/ci";
import { AiOutlineGold } from "react-icons/ai";
import { FaFire } from "react-icons/fa";
const List2 = () => {
  const { data: list, error, isLoading } = useList2Header();
  const items: ReactNode[] = [
    <LuBadgePercent color="gray" />,
    <CiShoppingBasket color="gray" />,
    <AiOutlineGold color="gray" />,
    <FaFire color="gray" />,
  ];
  return (
    <>
      {list?.map((item, index) => (
        <div key={index} className="d-flex flex-row gap-1">
          {items[index]}
          <p style={{ fontSize: ".8rem", color: "gray" }} className="m-0">
            {item.title}
          </p>
        </div>
      ))}
    </>
  );
};

export default List2;
