

interface WeatherData {
    cloud: number;
    current: CurrentWeather;
    feelslike_c: number;
    feelslike_f: number;
    
}

interface CurrentWeather {
    condition: {
        text: string;
        icon: string;
        code: number;
    }
}