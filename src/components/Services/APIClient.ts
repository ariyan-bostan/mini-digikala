import axios from "axios";

export interface ItemNav1 {
  title: string;
  icon: string;
  linkTo: string;
}
export interface Response {
  listNav: ItemNav1[];
}
/////////

export interface list2 {
  title: string;
}
interface Response2 {
  list2: list2[];
}
/////////
export interface bannerSwiper {
  imgURL: string;
  title: string;
}
interface ResponseBanner {
  banner: bannerSwiper[];
}
//////
export interface TitleHome {
  title: string;
  icon: string;
}
interface ResponseTitlesHome {
  titles: TitleHome[];
}


//
export interface ProductRunningOut {
  title: string;
  data_layer: { brand: string; category: string[] };
  price: { selling_price: number; rrp_price: number };
  imgWEBP: string;
  rating: {rate:number,count:number,discount_percent:number};
}
export interface itemRunningOutIncredibleProducts {
  title: string;
  products: ProductRunningOut[];
}
interface runningOutIncredibleProducts {
  running_out_incredible_products:itemRunningOutIncredibleProducts
}

interface ResponseRunningOutIncredibleProducts {
  incredible: runningOutIncredibleProducts;
}
//

const api = axios.create({
  baseURL: "http://localhost:3000",
});

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getListNav1 = () => {
    return api.get<Response>(this.endpoint).then((res) => res.data.listNav);
  };

  getList2 = () => {
    return api.get<Response2>(this.endpoint).then((res) => res.data.list2);
  };
  getBannerSwiper = () => {
    return api
      .get<ResponseBanner>(this.endpoint)
      .then((res) => res.data.banner);
  };

  getTitlesHome = () => {
    return api
      .get<ResponseTitlesHome>(this.endpoint)
      .then((res) => res.data.titles.slice(0,6));
  };

  getItemRunningOutIncredibleProducts=()=>{
    return api.get<ResponseRunningOutIncredibleProducts>(this.endpoint)
                .then(res=>res.data.incredible.running_out_incredible_products);
  }
}
export default APIClient;
