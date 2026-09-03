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
  rating: { rate: number; count: number; discount_percent: number };
}
export interface itemRunningOutIncredibleProducts {
  title: string;
  products: ProductRunningOut[];
}
interface runningOutIncredibleProducts {
  running_out_incredible_products: itemRunningOutIncredibleProducts;
}

interface ResponseRunningOutIncredibleProducts {
  incredible: runningOutIncredibleProducts;
}
//
export interface SimpleBanner1 {
  title: string;
  imgWebp: string;
}
interface ResponseSimpleBanner1 {
  simpleBanner1: SimpleBanner1[];
}

export interface SimpleBanner2 {
  title: string;
  imgWebp: string;
}
interface ResponseSimpleBanner2 {
  simpleBanner2: SimpleBanner2[];
}

export interface SimpleBanner3 {
  title: string;
  imgWebp: string;
}
interface ResponseSimpleBanner3 {
  simpleBanner3: SimpleBanner3[];
}
export interface SimpleBanner4 {
  title: string;
  imgWebp: string;
}
interface ResponseSimpleBanner4 {
  simpleBanner4: SimpleBanner4[];
}

//
export interface categoriHome {
  title: string;
  imgWebp: string;
}
interface ResponseCategori {
  categori_home: categoriHome[];
}

export interface PopularBrand {
  title: string;
  logo: string;
}
interface ResponsePopularBrand {
  popularBrand: PopularBrand[];
}
////////////

// product-list

interface Layet {
  brand: string;
  category: string;
  dimension9: number;
}
interface Images {
  mainImg: string;
  listImg: string[];
}
interface Theme {
  title: string;
  code: string;
}
interface Price {
  selling_price: number;
  rrp_price: number;
  percent: number;
}

interface Attributes {
  title: string;
  value: string;
}

export interface Product {
  title: string;
  layet: Layet;
  images: Images;
  theme: Theme;
  price: Price;
  attributes: Attributes[];
}

export interface productItem {
  title: string;
  product: Product[];
}

interface ResProductList {
  products: productItem[];
}

///best-seller
export interface ProductSeller {
  title: string;
  imgURL: string;
}

export interface BestSeller {
  title: string;
  product: ProductSeller[];
}
interface ResponseBestSeller {
  bestSeller: BestSeller;
}
// trending_products
export interface PTrendingProducts {
  title: string;
  imgURL: string;
}

export interface TrendingProducts {
  title: string;
  product: PTrendingProducts[];
}
interface ResponseTrendingProducts {
  trendingProducts: TrendingProducts;
}
//

export interface ListFooter{
    title:string,
    list:string[]
}
interface ResposeListFooter{
    list:ListFooter[];
}

// 
export interface CommunicationRoutes{
    title:string,
    linkIcon:string[]
}

interface ResponseCommunicationRoutes{
    communicationRoutes:CommunicationRoutes
}

// 
export interface LabelFooter{
    title:string,
    imgLable:string
}

interface ResponseLabelFooter{
    LabelFooter:LabelFooter[]
}
// 
export interface Support{
    icon:string,
    number1:string,
    number2:string,
    text:string
}

interface ResponseSupport{
    Support:Support
}

// 

export interface ItemsInformation{
    labelIcon:string[],
    paragraph:string
}
interface ResponseInformation{
    Information:ItemsInformation
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

  getListBrandFooter=()=>{
    return api.get<ResposeListFooter>(this.endpoint)
                .then(res=>res.data.list)
  }

  getCommunicationRoutes=()=>{
    return api.get<ResponseCommunicationRoutes>(this.endpoint)
                .then(res=>res.data.communicationRoutes)
  }
  getLabelFooter=()=>{
    return api.get<ResponseLabelFooter>(this.endpoint)
                .then(res=>res.data.LabelFooter);
  }
  getSupportItem=()=>{
    return api.get<ResponseSupport>(this.endpoint)
                .then(res=>res.data.Support)
  }
  getInformation=()=>{
    return api.get<ResponseInformation>(this.endpoint)
                .then(res=>res.data.Information)
  }
}
export default APIClient;
