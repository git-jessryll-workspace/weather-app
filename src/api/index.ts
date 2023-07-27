import axios from "axios"

const API_BASE_URL = "http://api.weatherstack.com/"
export default {
    getWeatherForecast: async (query: string) => {
        const url = API_BASE_URL + "forecast?query=" +query + "&historical_date_start=2023-07-21&historical_date_end = 2015-07-27" + "&access_key=" + import.meta.env.VITE_API_KEY;
        try {
            return await axios.get(url).then((res) => {
                console.log(res, typeof res);
            });
        }catch(err) {
            
        }
    },
    getWeather: async (query: string='Davao') => {
        try {
            return await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_WEATHER_KEY}&q=${query}`)
        } catch(err) {

        }
    }
}