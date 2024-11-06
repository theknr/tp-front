import WidgetFactory from "@/app/features/dashboard/molecules/widget-factory.tsx";
import { useEffect, useState } from "react";
import {
  Coordinates,
  getWeatherIcon,
} from "@/app/features/dashboard/weather-widget.props.ts";

import useFetchWeatherData from "@/app/infrastructure/hooks/use-fetch-weather-data.ts";
import Spinner from "@/ui/atoms/spinner.tsx";

function WeatherWidget() {
  const [coords, setCoords] = useState<Coordinates>(null);
  const { data } = useFetchWeatherData(coords);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  if (!data) {
    return (
      <WidgetFactory title="Weather">
        <Spinner />
      </WidgetFactory>
    );
  }

  const { name, main, weather } = data;
  const temperature = main.temp.toFixed(1);
  const weatherMain = weather[0].main;
  const weatherIcon = getWeatherIcon(weatherMain);

  return (
    <WidgetFactory title="Weather">
      <div className="p-4 flex flex-col items-center">
        <div className="flex items-center justify-between w-full mb-2">
          <img src={weatherIcon} alt={weatherMain} className="h-12 mr-4" />
          <div className="ml-4">
            <div className="text-lg font-semibold ml-2">{temperature}</div>
            <div>degrees</div>
          </div>
        </div>

        <div className="text-gray-700 mt-2 text-xl font-bold">{name}</div>
      </div>
    </WidgetFactory>
  );
}

export default WeatherWidget;
