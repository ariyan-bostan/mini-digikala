import { useContext } from "react";
import { contextWidth } from "../App";
import useCategoriHome from "../Hooks/useCategoriHome";
import style from "../Styles/Main/CategoriHome.module.css";

const CategoryHome = () => {
  const{data:list,error,isLoading}=useCategoriHome();
  const property=useContext(contextWidth)!;
  
  return (
    <div
      className={[style.container, "mt-2"].join(" ")}
    >
      <div
        style={{ width: "100%", height: "auto" }}
        className="d-flex align-items-center pe-2"
      >
        <h4>دسته‌بندی ها</h4>
      </div>
      <div
        style={{ width: "100%", height: "20rem",paddingRight:(property?.innerWidth>850)?"10rem":"0" }}
        className={[style.containerBox,(property?.innerWidth>850)?"justify-content-center":"",,"pt-3"].join(" ")}
      >
        {list?.map((item,index)=>(
          
            <div key={index} className={[style.categoriBox,"d-flex flex-column align-items-center justify-content-center gap-2"].join(" ")}>
              
              <img style={{width:"5rem",borderRadius:"100%"}}  src={item.imgWebp} alt="" />

              <p style={{fontSize:".75rem",color:"gray",fontWeight:"bold"}}>{item.title}</p>
            </div>
        ))}
        
      </div>
    </div>
  );
};

export default CategoryHome;
