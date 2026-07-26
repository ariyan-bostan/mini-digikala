import axios from "axios";

export interface ItemNav1{
    title:string;
    icon:string;
    linkTo:string;
}
export interface Response{
    listNav:ItemNav1[];
}

export interface list2{
    title:string
}
interface Response2{
    list2:list2[];
}

export interface bannerSwiper{
    imgURL:string,
    title:string
}
interface ResponseBanner{
       banner:bannerSwiper[];
}

const api=axios.create({
    baseURL:"http://localhost:3000"
});

class APIClient  {
    endpoint:string;

    constructor(endpoint:string) {
        this.endpoint=endpoint;
        
    }

    getListNav1=()=>{
        return api.get<Response>(this.endpoint)
                    .then(res=>res.data.listNav)
    }

    getList2=()=>{
        return api.get<Response2>(this.endpoint)
                   .then(res=>res.data.list2);
    }
    getBannerSwiper=()=>{
        return api.get<ResponseBanner>(this.endpoint)
                    .then(res=>res.data.banner)
    }
}
export default APIClient