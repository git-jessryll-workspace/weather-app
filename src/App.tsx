import { useEffect, useRef, useState } from "react";
import RestAPI from "./api/index";
import CurrentComponent from "./components/CurrentComponent";
import ForecastHourListComponent from "./components/ForecastHourListComponent";

let weather_data = window.localStorage.getItem("weather_data");

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataInterface | null>();
  const [type, setType] = useState<string>("f");
  const fetchData = useRef<boolean>();

  useEffect(() => {
    if (fetchData.current === true) return;

    fetchData.current = true;
    if (weather_data) {
      setWeatherData(JSON.parse(weather_data));
      return;
    }

    RestAPI.getWeather("Talomo, Davao City").then((response: any) => {
      window.localStorage.setItem(
        "weather_data",
        JSON.stringify(response.data)
      );
      setWeatherData(response.data);
    });
  }, []);

  console.log(weatherData);
  if (!weatherData) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="space-y-3 mt-10">
        <div>
          <h3 className="text-2xl font-bold antialiased text-gray-500">
            Weather App
          </h3>
        </div>
        <div className="flex items-center pb-6">
          <CurrentComponent
            current={weatherData.current}
            location={weatherData.location}
            type={type}
            setType={setType}
          />
        </div>
        <ForecastHourListComponent
          forecast={weatherData.forecast}
          type={type}
        />
      </div>
    </div>
  );
}

export default App;
