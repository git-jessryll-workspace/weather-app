import { HourObject } from "../types/weather-api-types";

export default function ForecastHourItemComponent(props: {
  hour: HourObject;
  type: string;
}) {
  const {
    hour: {
      condition: { text, icon },
      time,
      temp_c,
      temp_f,
    },
    type,
  } = props;

  return (
    <div className="w-full lg:w-[18%] m-1 lg:m-2 pl-0 md:pl-5 border-b-2 pb-4 md:border-b-transparent">
      <div className="flex flex-row items-center space-x-1">
        <div className="">
          <img src={`https:${icon}`} />
        </div>
        <div className="text-2xl">
          <div className="font-bold antialiased text-gray-500">
            {type === "f" ? `${temp_f}°F` : `${temp_c}°C`}
          </div>
          <div className="text-base text-gray-500">
            {new Date(time).toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </div>
        </div>
      </div>
      <div className="text-lg md:text-base lg:text-sm text-gray-500 text-left">
        {text}
      </div>
    </div>
  );
}
