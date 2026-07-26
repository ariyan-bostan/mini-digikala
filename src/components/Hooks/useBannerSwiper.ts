import { useQuery } from "@tanstack/react-query"
import type { bannerSwiper } from "../Services/APIClient"
import APIClient from "../Services/APIClient"


const apiClient=new APIClient("Main")

const useBannerSwiper=()=>{
    return useQuery<bannerSwiper[],Error>({
        queryKey:["banner swiper"],
        queryFn:()=>{
            return apiClient.getBannerSwiper();
        }
    });
    
}
export default useBannerSwiper