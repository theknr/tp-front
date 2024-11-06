import CloudsIcon from "@/assets/Clouds_icon.png";
import SunIcon from "@/assets/Sun_icon.png";
import RainIcon from "@/assets/Rain_icon.png";

export type Coordinates = {
  lat: number;
  lon: number;
} | null;

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
};

export type Wind = {
  speed: number;
  deg: number;
  gust?: number;
};

export type Rain = {
  "1h"?: number;
};

export type Clouds = {
  all: number;
};

export type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export const getWeatherIcon = (weatherMain: string) => {
  switch (weatherMain) {
    case "Clouds":
      return CloudsIcon;
    case "Rain":
      return RainIcon;
    case "Clear":
      return SunIcon;
    default:
      return SunIcon;
  }
};
