import React, { useContext } from 'react'
import { contextWidth } from '../../../App'
import type { Product, ProductRunningOut } from '../../../Services/Intefaces';
interface Props{
    resault: Product | ProductRunningOut | undefined,
    selectImg:string,
    setSelectImg:(item:string)=>void

}
const ImagesProduct = ({resault,selectImg,setSelectImg}:Props) => {
    const property=useContext(contextWidth)!;
  return (
    <div
        style={{ height: "20rem" }}
        className={[
          "",
          property.innerWidth < 850
            ? "d-flex flex-column align-items-center py-2 gap-2"
            : "w-25 d-flex flex-column align-items-center",
        ].join(" ")}>
        <div
          style={{ borderRadius: "10px", overflow: "hidden" }}
          className="w-75 h-75">
          {!selectImg ? (
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              <p style={{fontWeight:"bolder"}} className=" m-0 p-0 text-danger">select product image</p>
            </div>
          ) : (
            <img className="w-100 h-100" src={selectImg} alt="" />
          )}
        </div>
        <div
          style={{ overflowX: "scroll", scrollbarWidth: "none" }}
          className="w-75 gap-3 h-25  d-flex flex-row">
          {resault?.images.listImg.map((item, index) => (
            <img
              onClick={() => setSelectImg(item)}
              key={index}
              style={{ flexShrink: 0, borderRadius: "10px" }}
              className="h-100 w-25"
              src={item}
              alt=""
            />
          ))}
          <img
            onClick={() => setSelectImg(resault?.images.mainImg || "")}
            style={{ flexShrink: 0, borderRadius: "10px" }}
            className="h-100 w-25"
            src={resault?.images.mainImg}
            alt=""
          />
        </div>
      </div>
  )
}

export default ImagesProduct