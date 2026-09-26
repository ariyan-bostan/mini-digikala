import { useContext } from 'react';
import { contextWidth } from '../App';
import useSimpleBanner from '../Hooks/useSimpleBanner';
interface Props{
  number:Number;
}
const Banner2 = ({number}:Props) => {
    const property=useContext(contextWidth)!;
    const {data:list,error,isLoading}=useSimpleBanner(number);
    // console.log(list);
    
  return (
    <div style={{width:"100%",height:(property?.innerWidth>850)?"15rem":"30rem",overflow:"hidden"}} className={[(property?.innerWidth>850)?" d-flex flex-row gap-2":" d-flex flex-column align-items-center justify-content-center py-2 gap-1","my-2"].join(" ")}>
      {list?.map((item,index)=>(
        <>
        
          <div style={{width:(property?.innerWidth<850)?"97%":"50%",height:(property?.innerWidth>850)?"15rem":"50%",borderRadius:"10px",overflow:"hidden"}} className={["bg-info"].join(" ")}>
            <img className='w-100 h-100 object-fit-cover' src={item.imgWebp} alt="" />
          </div>
          {/* <div style={{width:(property?.innerWidth<850)?"97%":"50%",height:(property?.innerWidth>850)?"15rem":"50%",borderRadius:"10px"}} className={["bg-info"].join(" ")}></div> */}
        </>
      ))}
    </div>
  )
}

export default Banner2