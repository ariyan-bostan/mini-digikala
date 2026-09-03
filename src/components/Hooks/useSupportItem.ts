import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { Support } from "../Services/APIClient"
import APIClient from "../Services/APIClient"


const apiClient=new APIClient("Footer");

const useSupportItem=()=>{
    const {data:support,error,isLoading}=useQuery<Support,Error>({
        queryKey:["support-item"],
        queryFn:()=>{
            return apiClient.getSupportItem();
        }

    })
    return {support,error,isLoading}
    
}
export default useSupportItem