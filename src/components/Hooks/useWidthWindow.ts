import { useEffect } from "react";

const useWidthWindow=(setInnerWidth:(width:number)=>void)=>{
     useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
  }, [innerWidth]);
}
export default useWidthWindow;