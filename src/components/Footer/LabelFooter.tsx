import { useContext } from "react";
import { contextWidth } from "../App";
import useLabelFooter from "../Hooks/useLabelFooter";

const LabelFooter = () => {
  const property = useContext(contextWidth)!;
  const {list,error,isLoading} =useLabelFooter();
  

  return (
    <>
      {property.innerWidth > 850 && (
        <div
          style={{ height: "7rem" }}
          className="labelFooter w-100 d-flex gap-1 flex-row"
        >
          {list&&list.map((item, index) => (
            <div
              key={index}
              className="box w-25 h-100 d-flex  flex-column align-items-center justify-content-center"
            >
              <img src={item.imgLable} alt="" />
              <p style={{ fontSize: ".7rem", color: "GrayText" }}>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default LabelFooter;
