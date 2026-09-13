export interface ItemNav1 {
  title: string;
  icon: string;
  linkTo: string;
}
export  interface Response {
  listNav: ItemNav1[];
}
/////////

export interface list2 {
  title: string;
}
export interface Response2 {
  list2: list2[];
}
/////////
export interface bannerSwiper {
  imgURL: string;
  title: string;
}
export interface ResponseBanner {
  banner: bannerSwiper[];
}
//////
export interface TitleHome {
  title: string;
  icon: string;
}
export interface ResponseTitlesHome {
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

export interface ResponseRunningOutIncredibleProducts {
  incredible: runningOutIncredibleProducts;
}
//
export interface SimpleBanner1 {
  title: string;
  imgWebp: string;
}
export interface ResponseSimpleBanner1 {
  simpleBanner1: SimpleBanner1[];
}

export interface SimpleBanner2 {
  title: string;
  imgWebp: string;
}
export interface ResponseSimpleBanner2 {
  simpleBanner2: SimpleBanner2[];
}

export interface SimpleBanner3 {
  title: string;
  imgWebp: string;
}
export interface ResponseSimpleBanner3 {
  simpleBanner3: SimpleBanner3[];
}
export interface SimpleBanner4 {
  title: string;
  imgWebp: string;
}
export interface ResponseSimpleBanner4 {
  simpleBanner4: SimpleBanner4[];
}

//
export interface categoriHome {
  title: string;
  imgWebp: string;
}
export interface ResponseCategori {
  categori_home: categoriHome[];
}

export interface PopularBrand {
  title: string;
  logo: string;
}
export interface ResponsePopularBrand {
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

export interface ResProductList {
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
export interface ResponseBestSeller {
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
export interface ResponseTrendingProducts {
  trendingProducts: TrendingProducts;
}
//

export interface ListFooter{
    title:string,
    list:string[]
}
export interface ResposeListFooter{
    list:ListFooter[];
}

// 
export interface CommunicationRoutes{
    title:string,
    linkIcon:string[]
}

export interface ResponseCommunicationRoutes{
    communicationRoutes:CommunicationRoutes
}

// 
export interface LabelFooter{
    title:string,
    imgLable:string
}

export interface ResponseLabelFooter{
    LabelFooter:LabelFooter[]
}
// 
export interface Support{
    icon:string,
    number1:string,
    number2:string,
    text:string
}

export interface ResponseSupport{
    Support:Support
}

// 

export interface ItemsInformation{
    labelIcon:string[],
    paragraph:string
}
export interface ResponseInformation{
    Information:ItemsInformation
}


// list-categries-incredible
export interface TypeItemListCategori {
  title: string;
  image: string;
}

export interface listCategori {
  listCategori: TypeItemListCategori[];
}
export interface ResponseCategoryIncredible {
  incredible: listCategori;
}

