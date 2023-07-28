import { LocationObject } from "../types/weather-api-types";

export default function WeatherInfoComponent(props: {
  type: string;
  location: LocationObject;
  current: CurrentWeather;
}) {
  const {
    current: {condition: {text}},
    location: { country, region, name, localtime },
  } = props;
  return (
    <div className="text-sm flex justify-start md:justify-end text-left md:text-right text-gray-400 mt-4 md:mt-0 pr-0 lg:pr-6">
      <div>
        <h1 className="text-xl text-gray-500 font-semibold antialiased">{text}</h1>
        <h5 className="text-gray-500 text-lg font-semibold antialiased">
          {name}, {region} {country}
        </h5>
        <h6 className="text-sm text-gray-400 font-semibold antialiased">
          {new Date(localtime).toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </h6>
      </div>
    </div>
  );
}
