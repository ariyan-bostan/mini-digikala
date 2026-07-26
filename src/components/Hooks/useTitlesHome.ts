import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import APIClient, { type TitleHome } from "../Services/APIClient"

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