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
}
export default APIClient;
