import React, { useContext, useState } from "react";
import style from "../Styles/Header/header.module.css";
import { NavLink } from "react-router";
import { ContextHeader, type ValueHeader } from "../App";
import { contextHeader } from "./Header";
const NavList1 = () => {
    const property=useContext(contextHeader)!;
  const { list, error, isLoading } = useContext(ContextHeader)!;


  return (
    <>
        
        {property.innerWidth<850 &&<div
          className={[
            style.navListContainer,
            "d-flex flex-row align-items-center",
          ].join(" ")}
        >
          {list?.map((item, index) => (
            <NavLink to={item.linkTo} style={{color:"black",textDecoration:"none"}} key={index} className={(e)=>{
            
                
             return   e.isActive?[style.box, "rounded-3 m-1 d-flex flex-column justify-content-center align-items-center bg-danger"].join(" "):[style.box, "rounded-3 m-1 d-flex flex-column justify-content-center align-items-center"].join(" ")
            }
            }>
                <div className={[style.boxIconNav1].join(" ")}><img className="w-100 h-100 object-fit-contain" src={item.icon} alt="" /></div>
                <p  className="p-0 m-0 ">{item.title}</p>
            </NavLink>
          ))}
        </div>}
    </>
  );
};

export default NavList1;
