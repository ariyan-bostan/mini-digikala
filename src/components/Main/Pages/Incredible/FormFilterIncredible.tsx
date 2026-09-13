import React, { useContext } from "react";
import { contextWidth } from "../../../App";
import useBrand from "../../../Hooks/useBrand";

const FormFilterIncredible = () => {

    const property=useContext(contextWidth)!;
    useBrand();
  return (
    <div
      style={
        property.innerWidth < 850
          ? { height: "4rem", borderRadius: "2rem" }
          : { width: "10%", height: "20rem", borderRadius: "1rem" }
      }
      className={[
        "border mx-2",
        property.innerWidth < 850
          ? "d-flex flex-row align-items-center gap-2 pe-3"
          : "d-flex flex-column align-items-center gap-2",
      ].join(" ")}
    >
      <p className="listFooter p-0 m-0">فیلتر:</p>
      <form className="form border-e border-primary" action="">
        <div>
          <select
            style={{ width: "auto", background: "none", fontWeight: "900" }}
            className="form-select p-0 pe-2 px-2 py-1"
          >
            <option selected>برند</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default FormFilterIncredible;
