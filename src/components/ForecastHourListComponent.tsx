import ForecastHourItemComponent from "./ForecastHourItemComponent";

export default function ForecastHourListComponent(props: {
  forecast: ForecastObject;
  type:string;
}) {
  const { forecastday } = props.forecast;
  const filterTimeInterval = (item: HourObject) => {
    const currentHour = new Date().getHours();
    const itemHour = new Date(item.time).getHours();
    return itemHour >= currentHour;
  };
  return (
    <div className="border border-gray-100 p-4 shadow-lg rounded-lg">
      {forecastday.map((forecastItem: ForecastDayObject) => (
        <div key={forecastItem.date_epoch} className="">
          
          <div className="flex space-x-4">
            <div>
              <div className="text-xl font-semibold text-gray-500">
                Sunrise: <span>{forecastItem.astro.sunrise}</span>
              </div>
            </div>
            <div>
              <div className="text-xl font-semibold text-gray-500">
                Sunset: <span>{forecastItem.astro.sunset}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
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
