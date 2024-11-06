import { useQuery } from "@tanstack/react-query";

import { fetchNews } from "@/app/infrastructure/api/requests.ts";
import NewsResponse from "@/app/types/responses/news-response.ts";

export default function useFetchNews() {
  return useQuery<NewsResponse>({
    queryKey: ["news"],
    queryFn: () => fetchNews(),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
}
