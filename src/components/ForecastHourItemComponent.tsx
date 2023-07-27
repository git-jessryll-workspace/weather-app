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
    <div className="w-[15%] m-3">
      <div className="flex items-center space-x-1">
        <div>
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
      <div className="text-sm text-gray-500">{text}</div>
    </div>
  );
}
