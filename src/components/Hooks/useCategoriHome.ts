import { useQuery } from "@tanstack/react-query"
import type { categoriHome } from "../Services/APIClient"
import APIClient from "../Services/APIClient"
const apiClient=new APIClient("Main");
const useCategoriHome=()=>{
    return useQuery<categoriHome[],Error>({
        queryKey:["categoriHome"],
        queryFn:()=>{
            return apiClient.getCategoriHome();

        }
    });

    
    
}

export default useCategoriHome