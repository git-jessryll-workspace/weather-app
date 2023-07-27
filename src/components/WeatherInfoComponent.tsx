export default function WeatherInfoComponent(props: {
  type: string;
  current: CurrentWeather;
  location: LocationObject;
}) {
  const {
    current: {
      condition: { text },
    },
    location: { country, region, name, localtime },
  } = props;
  return (
    <div className="text-sm flex justify-end text-right text-gray-400">
      <div>
        <div>
          <h1 className="text-3xl text-gray-500 font-semibold antialiased">
            Weather
          </h1>
        </div>
        <h5 className="text-gray-400 text-sm font-semibold antialiased">
          {name}, {region} {country}
        </h5>
        <h6 className="text-sm text-gray-400 font-semibold antialiased">
          {new Date(localtime).toDateString()}
        </h6>
        <div>
          <h3 className="text-xl font-semibold antialiased">{text}</h3>
        </div>
      </div>
    </div>
  );
}
