import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { BestSeller } from "../Services/APIClient";
import APIClient from "../Services/APIClient";

const apiClient=new APIClient("Main");

const useBestSeller=(title:string)=>{
    return useQuery<BestSeller,Error>({
        queryKey:["bestSeller"],
        queryFn:()=>{
            return title==="پرفروش‌ترین کالاها"?apiClient.getBestSeller():apiClient.getTrendingProducts();
        }
    });

    
}
export default useBestSeller