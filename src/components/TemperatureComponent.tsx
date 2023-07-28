import { CurrentWeather } from "../types/weather-api-types";

export default function TemperatureComponent(props: {
  current: CurrentWeather;
  changeType: (type:string) => void;
  type: string;
}) {
  const {
    current: {
      temp_c,
      temp_f,
    },
    changeType,
    type,
  } = props;
  return (
    <div className="flex space-x-2">
      <div>
        <h3 className="text-5xl md:text-3xl text-gray-500 font-bold">
          {type === "f" ? temp_f : temp_c}
        </h3>
      </div>
      <div className="flex items-start md:items-center">
        <div className="divide-x text-3xl md:text-xl font-semibold text-gray-300">
          <span
            className={`px-1 mr-1 cursor-pointer ${type === "c" && "text-gray-500"}`}
            onClick={() => changeType("c")}
          >
            °C
          </span>
          <span
            className={`px-1 cursor-pointer ${type === "f" && "text-gray-500"}`}
            onClick={() => changeType("f")}
          >
            °F
          </span>
        </div>
      </div>
    </div>
  );
}
