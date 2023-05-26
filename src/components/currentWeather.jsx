export function CurrentWeather({ data }) {
  return (
    <div className="fade-in bg-grayest text-darkest w-[300px] p-8 text-center rounded-[30px] ">
      <div>
        <div className="my-12">
          <h3>{data.city}</h3>
          <small>Now</small>
        </div>
        <div className="flex flex-col gap-6 mb-12">
          <h2 className="text-5xl font-bold text-darkest">
            {Math.round(data.main.temp)}°
          </h2>
          <img
            className="max-w-[90px] mx-auto"
            src={`/icons/${data.weather[0].icon}.png`}
            alt="illustration"
          />
          <p>{data.weather[0].description}</p>
        </div>
        <div>
          <h3 className="mb-3">Wind</h3>
          <div className="flex gap-3 justify-center items-center">
            <img src="/icons/wind.png" alt="wind" className="w-10" />
            <p>{Math.round(data.wind.speed)}m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
}
