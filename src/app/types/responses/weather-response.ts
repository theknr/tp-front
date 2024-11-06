import {
  Clouds,
  Coordinates,
  Main,
  Rain,
  Sys,
  Weather,
  Wind,
} from "@/app/features/dashboard/weather-widget.props.ts";

type WeatherResponse = {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain?: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export default WeatherResponse;
