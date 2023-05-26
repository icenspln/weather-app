export function Details({ data }) {
  return (
    <div className="bg-grayest p-6 min-w-[250px] text-center  rounded-[30px] fade-in">
      <h1 className="font-bold mb-4">Details</h1>
      <div className="flex justify-between items-center">
        <span>Feels like</span>
        <span>{Math.round(data.main.feels_like)}°</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Clouds</span>
        <span>{data.clouds.all}%</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Visibility</span>
        <span>{data.visibility}m</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Pressure</span>
        <span>{data.main.pressure}Pa</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Humidity</span>
        <span>{data.main.humidity}%</span>
      </div>
    </div>
  );
}
