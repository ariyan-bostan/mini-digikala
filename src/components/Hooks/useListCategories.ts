import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import APIClient from "../Services/APIClient";
import type { listCategori, TypeItemListCategori } from "../Services/Intefaces";

const apiClient=new APIClient("Main");

const useListCategories = () => {
  const {
    data: listCategori,
    error,
    isLoading,
  } = useQuery<TypeItemListCategori[],Error>({
    queryKey: ["categori-Incredible"],
    queryFn: () => {
      return apiClient.getListCategories();
    },
  });
  return { listCategori, error, isLoading };
};
export default useListCategories;
