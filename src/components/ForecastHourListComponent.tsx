import { ForecastDayObject, ForecastObject, HourObject } from "../types/weather-api-types";
import ForecastHourItemComponent from "./ForecastHourItemComponent";

export default function ForecastHourListComponent(props: {
  forecast: ForecastObject;
  type: string;
}) {
  const { forecastday } = props.forecast;
  const filterTimeInterval = (item: HourObject) => {
    const currentHour = new Date().getHours();
    const itemHour = new Date(item.time).getHours();
    return itemHour >= currentHour;
  };
  return (
    <div className="space-y-3">
      {forecastday.map((forecastItem: ForecastDayObject) => (
        <div key={forecastItem.date_epoch} className="md:border md:border-gray-300 p-4 md:shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row justify-between pt-4 px-0 md:px-6">
            <div className="flex flex-col">
              <div className="text-gray-500 text-xl">
                {forecastItem.astro.moon_phase}
              </div>
              <span className="text-sm text-gray-400 -mt-1">Moon Phase</span>
            </div>
            <div className="flex space-x-4">
              <div className="text-sm flex flex-col font-semibold antialiased text-gray-500">
                <span className="text-lg">{forecastItem.astro.sunrise}</span>
                <span className="-mt-1 text-gray-400 font-normal">Sunrise</span>
              </div>
              <div className="text-sm flex flex-col font-semibold antialiased text-gray-500">
                <span className="text-lg">{forecastItem.astro.sunset}</span>
                <span className="-mt-1 text-gray-400 text-sm font-normal">
                  Sunset
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap mt-10 pb-10">
            {forecastItem.hour
              .filter(filterTimeInterval)
              .map((hourItem: HourObject) => (
                <ForecastHourItemComponent
                  key={hourItem.time_epoch}
                  hour={hourItem}
                  type={props.type}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
