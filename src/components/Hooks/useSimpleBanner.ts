import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import APIClient, {
  type SimpleBanner1,
  type SimpleBanner2,
} from "../Services/APIClient";

const apiClient = new APIClient("Main");

const useSimpleBanner = (number: Number) => {
  return useQuery<SimpleBanner1[] | SimpleBanner2[], Error>({
    queryKey: [
      number === 1 ? "simpleBanner1" : 
      number === 2 ? "simpleBanner2" : 
      number === 3 ? "simpleBanner3":"simpleBanner4",
    ],
    queryFn: () => {
      return number === 1 ? apiClient.getSimpleBanner1() :
             number === 2 ? apiClient.getSimpleBanner2() :
             number === 3 ? apiClient.getSimpleBanner3() : apiClient.getSimpleBanner4()
    },
  });
};
export default useSimpleBanner;
