import axios from "axios";

export interface ItemNav1{
    title:string;
    icon:string;
    linkTO:string
}
export interface Response{
    listNav:ItemNav1[];
}

const api=axios.create({
    baseURL:"http://localhost:3000"
});

class APIClient <T> {
    endpoint:string;

    constructor(endpoint:string) {
        this.endpoint=endpoint;
        
    }

    getListNav1=()=>{
        return api.get<Response>(this.endpoint)
                    .then(res=>res.data.listNav)
    }
}
export default APIClient