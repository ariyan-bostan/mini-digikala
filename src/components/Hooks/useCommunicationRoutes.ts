import { useQueries, useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { CommunicationRoutes } from "../Services/APIClient";
import APIClient from "../Services/APIClient";

const apiClient=new APIClient("Footer");

const useCommunicationRoutes=()=>{
    const {data:list,error,isLoading}=useQuery<CommunicationRoutes,Error>({
        queryKey:["Communication-Routes"],
        queryFn:()=>{
            return apiClient.getCommunicationRoutes();
        }
    })
    return {list,error,isLoading}
    
}
export default useCommunicationRoutes