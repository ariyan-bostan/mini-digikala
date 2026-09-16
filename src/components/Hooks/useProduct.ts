import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import APIClient from "../Services/APIClient";
import type { productItem } from "../Services/Intefaces";

const apiClient=new APIClient("Main");

const useProduct=(title:string)=>{
    const {data:list,error,isLoading}=useQuery<productItem[],Error>({
        queryKey:["product"],
        queryFn:()=>{
            return apiClient.getProductList();
        }
    });

    
    const objectProduct=list?.find(item=>{
        return item.title===title?item:[];
    })
    
    return {objectProduct,error,isLoading}

    
    
}
export default useProduct