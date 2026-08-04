import React, { useContext } from 'react'
import { contextWidth } from '../App'

const Banner2 = () => {
    const property=useContext(contextWidth)!;
  return (
    <div style={{width:"100%",height:(property?.innerWidth>850)?"15rem":"30rem",overflow:"hidden"}} className={(property?.innerWidth>850)?"bg-danger d-flex flex-row gap-2":"bg-danger d-flex flex-column align-items-center justify-content-center py-2 gap-1"}>
            <div style={{width:(property?.innerWidth<850)?"97%":"50%",height:(property?.innerWidth>850)?"15rem":"50%",borderRadius:"10px"}} className={["bg-info"].join(" ")}></div>
            <div style={{width:(property?.innerWidth<850)?"97%":"50%",height:(property?.innerWidth>850)?"15rem":"50%",borderRadius:"10px"}} className={["bg-info"].join(" ")}></div>
    </div>
  )
}

export default Banner2