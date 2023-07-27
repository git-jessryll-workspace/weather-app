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
      feelslike_c,
      feelslike_f,
      uv
    },
    type,
    setType,
  } = props;

  const changeType = (val: string) => setType(val);

  return (
    <div className="border shadow-lg border-gray-100 p-3 rounded-lg w-full">
      <div className="grid grid-cols-2 gap-32">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row space-x-3">
            <div>
              <div className="flex items-center">
                <div>
                  <img src={`https://${icon}`} />
                </div>
                <TemperatureComponent
                  current={props.current}
                  type={type}
                  changeType={changeType}
                />
              </div>
              <div className="text-sm text-gray-400 mt-4 grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-gray-500 text-lg font-bold antialiased">
                    {humidity}%
                  </div>
                  <div className="text-sm">Humidity</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-500 text-lg font-bold antialiased">
                    {wind_dir}{" "}
                    {type === "f" ? `${wind_mph} mph` : `${wind_kph} kph`}
                  </div>
                  <div className="text-sm">Wind</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-500 text-lg font-bold antialiased">
                    {type === "f" ? `${feelslike_f} °F` : `${feelslike_c} °C`} 
                  </div>
                  <div className="text-sm">Feels Like</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-500 text-lg font-bold antialiased">
                    {uv} of 11
                  </div>
                  <div className="text-sm">UV Index</div>
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
