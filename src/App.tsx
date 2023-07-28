import { useEffect, useRef, useState } from "react";
import RestAPI from "./api/index";
import CurrentComponent from "./components/CurrentComponent";
import ForecastHourListComponent from "./components/ForecastHourListComponent";
import CloudyDayImage from "./assets/cloudy-day.png";
import WeatherLoading from "./assets/animation_loading.gif"

const weather_data = window.localStorage.getItem("weather_data");

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataInterface | null>();
  const [type, setType] = useState<string>("c");
  const fetchData = useRef<boolean>();

  useEffect(() => {
    if (fetchData.current === true) return;

    fetchData.current = true;
    
    const pre_data = weather_data ? JSON.parse(weather_data) : null;

    const current_hour: number = new Date().getHours();

    let saved_local_hour: string | null =
      window.localStorage.getItem("saved_local_hour");

    if (!saved_local_hour) {
      saved_local_hour = current_hour.toString();
      window.localStorage.setItem("saved_local_hour", saved_local_hour);
    }

    if (current_hour > parseInt(saved_local_hour)) {
      window.localStorage.clear();
    }

    if (weather_data) {
      setWeatherData(pre_data);
      return;
    }

    RestAPI.getWeather("Catalunan Pequeño").then(
      (response: { data: WeatherDataInterface } | undefined) => {
        try {
          window.localStorage.setItem(
            "weather_data",
            JSON.stringify(response?.data)
          );
          setWeatherData(response?.data);
        } catch (error) {
          console.log(error);
        }
      }
    );
  }, []);

  if (!weatherData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>
          <img src={WeatherLoading}/>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="space-y-3 mt-10 w-[80%]">
        <div className="flex items-center space-x-3">
          <div>
            <img src={CloudyDayImage} className="h-10 w-10" />
          </div>
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
