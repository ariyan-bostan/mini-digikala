import { useContext } from "react";

import { contextWidth } from "../App";
import type { ProductSeller } from "../Services/Intefaces";
import sss from "../Styles/Main/MostCeller.module.css";

interface Props {
  product: ProductSeller[] | undefined;
}
const OrderProduct = ({ product }: Props) => {
  const property = useContext(contextWidth)!;
  return (
    <div
      style={{ width: "100%", height: "90%" }}
      className={[sss.container, "px-2"].join(" ")}
    >
      {product?.map((item, index) => (
        <div key={index} className={[sss.box,"d-flex flex-row align-items-center overflow-hidden pe-1"].join(" ")}>
            <img style={{width:"20%",height:"100%"}} className="object-fit-cover" src={item.imgURL} alt="" />
            <p style={{fontSize:".8rem",color:"gray"}}>{item.title.substring(0,50)}...</p>
        </div>
      ))}
    </div>
  );
};

export default OrderProduct;
