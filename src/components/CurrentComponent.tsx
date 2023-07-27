import TemperatureComponent from "./TemperatureComponent";
import WeatherInfoComponent from "./WeatherInfoComponent";

export default function CurrentComponent(props: {
  current: CurrentWeather;
  location: LocationObject;
  type: string;
  setType: Function;
}) {
  
  const {
    current: {
      condition: { icon },
      wind_kph,
      wind_mph,
      wind_dir,
      humidity,
    },
    type,
    setType
  } = props;

  const changeType = (val: string) => setType(val);

  return (
    <div className="border shadow-lg border-gray-100 p-3 rounded-lg w-1/2">
      <div className="grid grid-cols-2 gap-44">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row space-x-3">
            <div>
              <img src={`https://${icon}`} />
            </div>
            <div>
              <TemperatureComponent
                current={props.current}
                type={type}
                changeType={changeType}
              />
              <div className="text-sm text-gray-400">
                <div>
                  Humidity:{" "}
                  <span className="text-gray-500 ml-2">{humidity}%</span>
                </div>
                <div>
                  Wind:{" "}
                  <span className="text-gray-500 ml-2">
                    {type === "f" ? `${wind_mph} mph` : `${wind_kph} kph`}
                  </span>
                </div>
                <div>
                  Wind Direction:
                  <span className="text-gray-500 ml-2">{wind_dir}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WeatherInfoComponent
          type={type}
          current={props.current}
          location={props.location}
        />
      </div>
    </div>
  );
}
