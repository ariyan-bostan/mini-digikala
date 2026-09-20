import React, { useContext } from 'react'
import { contextWidth } from '../../../App';

const LogoInputs = () => {
  const property=useContext(contextWidth)!;
  return (
    <div
      style={{ height: "5rem" }}
      className={[
        property.innerWidth < 850
          ? "w-50 mt-4 d-flex justify-content-center align-items-center"
          : "w-50 d-flex justify-content-center align-items-center",
      ].join(" ")}>
      <img style={{width:"50rem"}} src="https://www.digikala.com/brand/full-horizontal.svg" alt="" />
    </div>
  );
}

export default LogoInputs