import React, { useContext } from 'react'
import style from "../styles/Header/NavList1.module.css"
import { ContextHeader, type TypeContextHeader } from './Header';
import type { ListNav } from '../api/APIClient';
const ListNav1 = () => {
    const {list,error,isLoading}=useContext(ContextHeader)!;
    console.log(list);
    const f=list===undefined?[]:list;
    console.log(f);
    
    
    
    
  return (
    <div className={[style.containerNav,"d-flex flex-row align-items-center"].join(" ")}>
        {f.map((item,index)=>(
            <div className={[style.boxNavLink,"d-flex flex-column align-items-center "].join(" ")} key={index}>
                <img  src={item.icon} alt="" className={[style.icon].join(" ")} />
                <div className={[style.boxText].join(" ")}>
                    <p className={[style.textNav1].join(" ")}>{item.title}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ListNav1