import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { ItemsInformation } from "../Services/APIClient";
import APIClient from "../Services/APIClient";

const apiClient=new APIClient("Footer");


const useInformation=()=>{
    const {data:list,error,isLoading}=useQuery<ItemsInformation,Error>({
        queryKey:["information"],
        queryFn:()=>{
            return apiClient.getInformation();
        }
    });
    return {list,error,isLoading}
    
}
export default useInformation