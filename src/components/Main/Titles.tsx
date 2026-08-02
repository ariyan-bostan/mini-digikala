import React, { useContext } from 'react'
import styleTitle from "../Styles/Main/Titles.module.css"
import useTitlesHome from '../Hooks/useTitlesHome'
import { contextWidth } from '../App';

const Titles = () => {

   const {data:list,error,isLoading}= useTitlesHome();
   const property=useContext(contextWidth);
  return (
    <div className={[styleTitle.container,"w-100 d-flex flex-row align-items-center gap-2"].join(" ")}>
        {list?.map((item,index)=>(

             <div key={index} className={[styleTitle.boxTitles,"rounded-2 d-flex flex-column align-items-center justify-content-center"].join(" ")}>
                <div className='w-100 h-75 d-flex flex-row justify-content-center'>
                    <img className={[styleTitle.icon,'h-100 w-100 object-fit-cover'].join(" ")} src={item.icon} alt="" />
                </div>
                <div className='w-100 h-25 d-flex flex-column align-items-center'>
                    <p style={{fontSize:".6rem",color:"gray"}}>{item.title}</p>
                </div>
             </div>
        ))}

     </div>
  )
}

export default Titles