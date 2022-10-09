import "./App.css";
import { useState } from "react";
import Search from "./components/Search/search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import Upgrade from "./components/weather/upgrade";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        console.log(weatherResponse, "hello");
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="main-container">
      <Search
        className="search_container"
        onSearchChange={handleOnSearchChange}
      />
      {currentWeather && (
        <Upgrade className="weather_container" data={currentWeather} />
      )}
    </div>
  );
}

export default App;
