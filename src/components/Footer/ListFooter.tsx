import { useContext, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { contextWidth } from "../App";
import style from "../Styles/Footer/ListFooter.module.css";
import CommunicationRoutes from "./CommunicationRoutes";
import ItemListFooter from "./ItemListFooter";
import useListFooter from "../Hooks/useListFooter";

const ListFooter = () => {
  const { list, error, isLoading } = useListFooter();

  const [selectItem, setSelectItem] = useState(-1);
  const property = useContext(contextWidth)!;

  return (
    <div
      className={[
        property.innerWidth > 850 && style.containerList,
        property.innerWidth < 850
          ? "list  w-100 mt-1"
          : " d-flex flex-row align-items-center",
      ].join(" ")}
    >
      <div
        className={[
          property.innerWidth < 850
            ? "mt-1 w-100  d-flex flex-column"
            : "w-75 h-75 d-flex flex-row",
        ].join(" ")}
      >
        {list&&list.map((item, index) => (
          <>
            {((property.innerWidth > 850 && index !== list.length - 1) ||
              property.innerWidth < 850) && (
              <div className="listFooter box border-bottom  w-100 d-flex flex-column">
                <div
                  onClick={() => {
                    if (selectItem === index) setSelectItem(-1);
                    else setSelectItem(index);
                  }}
                  className={[
                    style.boxList,
                    property.innerWidth < 850
                      ? "title h-100 px-2 d-flex flex-row justify-content-between align-items-center"
                      : "title h-100 px-2 d-flex flex-row justify-content-center align-items-center",
                  ].join(" ")}
                >
                  <p style={{ fontSize: ".9rem" }} className="p-0 m-0">
                    {item.title}
                  </p>
                  {property.innerWidth < 850 && (
                    <>
                      {selectItem !== index ? (
                        <IoIosArrowDown />
                      ) : (
                        <IoIosArrowUp />
                      )}
                    </>
                  )}
                </div>
                {selectItem === index && property.innerWidth < 850 && (
                  <ItemListFooter index={index} items={item.list} />
                )}

                {property.innerWidth > 850 && (
                  <ItemListFooter index={index} items={item.list} />
                )}
              </div>
            )}
          </>
        ))}
      </div>
      {property.innerWidth > 850 && <CommunicationRoutes />}
    </div>
  );
};

export default ListFooter;
