import { CurrentWeather } from "./components/currentWeather";
import { Details } from "./components/Details";
import { Search } from "./components/Search";
import { WEATHER_URL, WEATHER_KEY } from "./api";
import { useState } from "react";
import { Forecast } from "./components/Forecast";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const cityChange = (city) => {
    const [lat, lon] = city.value.split(" ");

    const fetchWeather = fetch(
      `${WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`
    );

    const fetchForecast = fetch(
      `${WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`
    );

    Promise.all([fetchWeather, fetchForecast])
      .then(async (res) => {
        const resultsWeather = await res[0].json();
        const resultsForecast = await res[1].json();

        setWeather({ ...resultsWeather, city: city.label });
        setForecast({ ...resultsForecast });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Search cityChange={cityChange} />
      <div className="my-10 flex flex-col sm:flex-row justify-center items-center sm:items-start gap-16">
        {weather && <CurrentWeather data={weather} />}
        <div className="flex flex-col items-center justify-between gap-8">
          {weather && <Details data={weather} />}
          {forecast && <Forecast data={forecast} />}
        </div>
      </div>
    </div>
  );
}

export default App;
