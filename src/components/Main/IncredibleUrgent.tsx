import React, { useContext } from 'react'
import { Link } from 'react-router';
import { contextWidth } from '../App';
import useCategoriHome from '../Hooks/useCategoriHome';

const IncredibleUrgent = () => {
    const property=useContext(contextWidth)!;
    const {data:list,error,isLoading}=useCategoriHome();
    console.log(list);
    
  return (
    <div
      style={{
        width: "100%",
        height: "25rem",
        borderRadius: property.innerWidth > 850 ? "20px" : "",
      }}
      className="bg-info d-flex flex-column gap-1">
      <div
        style={{ height: "5rem" }}
        className="bg-primary d-flex flex-row align-items-center justify-content-between px-2">
        <p className="m-0">
          <span style={{ fontWeight: "bolder" }} className="px-2 bg-warning">
            سه ساعته
          </span>{" "}
          تحویل بگیر
        </p>
        <Link className="linkTo" to={"/incredible-Offers"}>
          همه
        </Link>
      </div>
      <div style={{ height: "5rem" }} className="bg-warning"></div>
      <div style={{ height: "5rem" }} className="bg-success"></div>
    </div>
  );
}

export default IncredibleUrgent