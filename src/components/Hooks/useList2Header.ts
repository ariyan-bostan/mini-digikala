import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import APIClient, { type list2 } from "../Services/APIClient";

const getList2 = new APIClient("Header");

const useList2Header = () => {
  return useQuery<list2[], Error>({
    queryKey: ["list2"],
    queryFn: () => {
      return getList2.getList2();
    },
  });
};
export default useList2Header;
