import { ax } from "@/app/infrastructure/api/api.ts";
import {
  ClothingAPIResponse,
  NewsResponse,
  WeatherResponse,
} from "@/app/types";

export const fetchWeather = async (lat: number, lon: number) => {
  const response = await ax.get<WeatherResponse>(
    `${import.meta.env.VITE_API_URL}/auth/weather`,
    {
      params: {
        lat,
        lon,
      },
      withCredentials: true,
    },
  );

  return response.data;
};

export const fetchNews = async () => {
  const response = await ax.get<NewsResponse>(
    `${import.meta.env.VITE_API_URL}/auth/news?url=http://feeds.bbci.co.uk/news/rss.xml`,
  );

  return response.data;
};

export const fetchClothing = async () => {
  const response = await ax.get<ClothingAPIResponse>(
    `${import.meta.env.VITE_API_URL}/auth/clothes`,
  );

  return response.data;
};
