import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import type { TitleHome } from "../Services/Intefaces";
import APIClient from "../Services/APIClient";

const apiClient=new APIClient("Main");

const useTitlesHome=()=>{
    return useQuery<TitleHome[],Error>({
        queryKey:["titles home"],
        queryFn:()=>{
            return apiClient.getTitlesHome();
        },
        
    });
    
}

export default useTitlesHome;