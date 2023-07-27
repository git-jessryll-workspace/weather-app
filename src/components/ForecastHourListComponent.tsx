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
        <div key={forecastItem.date_epoch} className="border border-gray-100 p-4 shadow-lg rounded-lg">
          <div>
            <h1 className="text-2xl font-bold antialiased text-gray-700">Today</h1>
          </div>
          <div className="flex justify-between">
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
          <div className="flex flex-wrap mt-10 pb-10 divide-x-2">
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
