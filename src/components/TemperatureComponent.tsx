export default function TemperatureComponent(props: {
  current: CurrentWeather;
  changeType: Function;
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
        <h3 className="text-3xl text-gray-500 font-bold">
          {type === "f" ? temp_f : temp_c}
        </h3>
      </div>
      <div className="">
        <div className="divide-x text-xl font-semibold text-gray-300">
          <span
            className={`px-1 cursor-pointer ${type === "f" && "text-gray-500"}`}
            onClick={() => changeType("f")}
          >
            °F
          </span>
          <span
            className={`px-1 cursor-pointer ${type === "c" && "text-gray-500"}`}
            onClick={() => changeType("c")}
          >
            °C
          </span>
        </div>
      </div>
    </div>
  );
}
