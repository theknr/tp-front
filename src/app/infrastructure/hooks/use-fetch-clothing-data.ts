import { useQuery } from "@tanstack/react-query";

import { fetchClothing } from "@/app/infrastructure/api/requests.ts";
import ClothingAPIResponse from "@/app/types/responses/clothing-response.ts";

const useFetchClothingData = () => {
  return useQuery<ClothingAPIResponse>({
    queryKey: ["clothing"],
    queryFn: () => fetchClothing(),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
};
export default useFetchClothingData;
