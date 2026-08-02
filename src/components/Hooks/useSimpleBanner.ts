import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import APIClient, { type SimpleBanner1, type SimpleBanner2 } from "../Services/APIClient";

const apiClient=new APIClient("Main");


const useSimpleBanner=(number:Number)=>{
    return useQuery<SimpleBanner1[]|SimpleBanner2[],Error>({
        queryKey:[(number===1)?"simpleBanner1":"simpleBanner2"],
        queryFn:()=>{
            return (number===1)?apiClient.getSimpleBanner1():apiClient.getSimpleBanner2();
        }
    });

    
}
export default useSimpleBanner