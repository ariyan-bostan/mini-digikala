import { useQuery } from "@tanstack/react-query"
import type {  } from "../Services/APIClient"
import APIClient from "../Services/APIClient"
import type { categoriHome } from "../Services/Intefaces";
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