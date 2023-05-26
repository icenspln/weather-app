import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

export function Forecast({ data }) {
  // getting the current day
  const today = new Date().getDay();
  const weekDays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  // getting the array of days, that starts with the current days
  const currentWeek = weekDays
    .slice(today, weekDays.length)
    .concat(weekDays.slice(0, today));

  // some data manipulation to get an array of days and only the weather for each day, of the api forecast data list
  const daysWeather = [
    data.list[4],
    data.list[12],
    data.list[20],
    data.list[28],
    data.list[36],
  ];

  // mapping the current week with the cooresponding weather
  const forecast = currentWeek.slice(0, 5).map((day, index) => {
    return {
      day,
      ...daysWeather[index],
    };
  });
  return (
    <div className="fade-in">
      <h1 className="mb-4 text-center font-bold">Days</h1>
      <Accordion allowZeroExpanded>
        {forecast.map((day) => (
          <AccordionItem key={day.day}>
            <AccordionItemHeading>
              <AccordionItemButton className="accordion__button">
                <div className="flex justify-between items-center">
                  <span className="capitalize min-w-[75px] ">{day.day}</span>
                  <span>
                    <img
                      src={`/icons/${day.weather[0].icon}.png`}
                      alt="icon"
                      className="w-8"
                    />
                  </span>
                  <span>{Math.round(day.main.temp)}°</span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div>
                <div className="flex justify-between items-center">
                  <span>Feels like</span>
                  <span>{Math.round(day.main.feels_like)}°</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Clouds</span>
                  <span>{day.clouds.all}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Visibility</span>
                  <span>{day.visibility}m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pressure</span>
                  <span>{day.main.pressure}Pa</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Humidity</span>
                  <span>{day.main.humidity}%</span>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
