import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface TypeNameListProduct {
  id: string;
  title: string;
}
const useGetNameListProduct = () => {
  return useQuery<TypeNameListProduct[],Error>({
    queryKey: ["NameListProduct"],
    queryFn: () => {
      return axios
        .get<TypeNameListProduct[]>("https://mini-digikala.onrender.com/listProducts")
        .then((res) => res.data);
    },
  });
};
export default useGetNameListProduct
