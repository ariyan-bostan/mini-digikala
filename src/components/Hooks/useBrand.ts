import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import APIClient from "../Services/APIClient";

const apiClient = new APIClient("Main");

const useBrand = () => {
  const {
    data: listBrands,
    error,
    isLoading,
  } = useQuery<string[], Error>({
    queryKey: ["brand"],
    queryFn: () => {
      return apiClient.getListBrands();
    },
  });
  return {listBrands,error,isLoading}
};
export default useBrand;
