import axios from "axios";
import type {
  Response,
  Response2,
  ResponseBanner,
  ResponseBestSeller,
  ResponseBrands,
  ResponseCategori,
  ResponseCategoryIncredible,
  ResponseCommunicationRoutes,
  ResponseInformation,
  ResponseLabelFooter,
  ResponsePopularBrand,
  ResponseRunningOutIncredibleProducts,
  ResponseSimpleBanner1,
  ResponseSimpleBanner2,
  ResponseSimpleBanner3,
  ResponseSimpleBanner4,
  ResponseSupport,
  ResponseTitlesHome,
  ResponseTrendingProducts,
  ResposeListFooter,
  ResProductList,
} from "./Intefaces";

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
      .then((res) => res.data.titles.slice(0, 6));
  };

  getItemRunningOutIncredibleProducts = () => {
    return api
      .get<ResponseRunningOutIncredibleProducts>(this.endpoint)
      .then((res) => res.data.incredible.running_out_incredible_products);
  };

  getSimpleBanner1 = () => {
    return api
      .get<ResponseSimpleBanner1>(this.endpoint)
      .then((res) => res.data.simpleBanner1);
  };
  getSimpleBanner2 = () => {
    return api
      .get<ResponseSimpleBanner2>(this.endpoint)
      .then((res) => res.data.simpleBanner2);
  };
  getSimpleBanner3 = () => {
    return api
      .get<ResponseSimpleBanner3>(this.endpoint)
      .then((res) => res.data.simpleBanner3);
  };
  getSimpleBanner4 = () => {
    return api
      .get<ResponseSimpleBanner4>(this.endpoint)
      .then((res) => res.data.simpleBanner4);
  };
  getCategoriHome = () => {
    return api
      .get<ResponseCategori>(this.endpoint)
      .then((res) => res.data.categori_home);
  };

  getPopularBrand = () => {
    return api
      .get<ResponsePopularBrand>(this.endpoint)
      .then((res) => res.data.popularBrand);
  };
  getProductList = () => {
    return api
      .get<ResProductList>(this.endpoint)
      .then((res) => res.data.products);
  };

  getBestSeller = () => {
    return api
      .get<ResponseBestSeller>(this.endpoint)
      .then((res) => res.data.bestSeller);
  };
  getTrendingProducts = () => {
    return api
      .get<ResponseTrendingProducts>(this.endpoint)
      .then((res) => res.data.trendingProducts);
  };

  getListBrandFooter = () => {
    return api
      .get<ResposeListFooter>(this.endpoint)
      .then((res) => res.data.list);
  };

  getCommunicationRoutes = () => {
    return api
      .get<ResponseCommunicationRoutes>(this.endpoint)
      .then((res) => res.data.communicationRoutes);
  };
  getLabelFooter = () => {
    return api
      .get<ResponseLabelFooter>(this.endpoint)
      .then((res) => res.data.LabelFooter);
  };
  getSupportItem = () => {
    return api
      .get<ResponseSupport>(this.endpoint)
      .then((res) => res.data.Support);
  };
  getInformation = () => {
    return api
      .get<ResponseInformation>(this.endpoint)
      .then((res) => res.data.Information);
  };
  getListCategories = () => {
    return api
      .get<ResponseCategoryIncredible>(this.endpoint)
      .then((res) => res.data.incredible.listCategori);
  };

  getListBrands = () => {
    return api
      .get<ResponseBrands>(this.endpoint)
      .then(
        (res) => res.data.incredible.running_out_incredible_products.brands,
      );
  };
}
export default APIClient;
