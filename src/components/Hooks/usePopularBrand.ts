import { useQuery } from "@tanstack/react-query"
import type { PopularBrand } from "../Services/APIClient"
import APIClient from "../Services/APIClient"

const apiClient=new APIClient("Main");

const usePopularBrand=()=>{
    return useQuery<PopularBrand[],Error>({
        queryKey:["popular"],
        queryFn:()=>{
            return apiClient.getPopularBrand();
        }
    });    
}

export default usePopularBrand