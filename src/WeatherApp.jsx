import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 25.97,
    humidity: 78,
    temp: 25.97,
    tempMax: 25.97,
    tempMin: 25.97,
    weather: "haze",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div className="WeatherApp">
      <h2>Weather App</h2>

      <div className="weatherContainer">
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}
