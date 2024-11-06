import { useQuery } from "@tanstack/react-query";

import { Coordinates } from "@/app/features/dashboard/weather-widget.props.ts";
import { fetchWeather } from "@/app/infrastructure/api/requests.ts";
import { WeatherResponse } from "@/app/types";

const useFetchWeather = (coords: Coordinates) => {
  return useQuery<WeatherResponse>({
    queryKey: ["weatherData", coords],
    queryFn: () => fetchWeather(coords!.lat, coords!.lon),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
};
export default useFetchWeather;
