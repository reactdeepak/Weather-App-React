import "./upgrade.css";
const Upgrade = ({ data }) => {
  const unixTimestamp = data.dt;
  const zone = data.timezone;
  const dateObject = new Date(eval((unixTimestamp - 19800 + zone) * 1000));
  const time = dateObject.toLocaleString(); //2019-12-9 10:30:15
  const day = dateObject.toLocaleString("en-US", { weekday: "long" });

  return (
    <div className="container">
      <div className="weather-side">
        <div className="weather-gradient"></div>
        <div className="date-container">
          <h2>{day}</h2>
          <span className="date-day">{time}</span>
          {/* <i className="location-icon" data-feather="map-pin"></i> */}
          <span className="location">{data.city}</span>
        </div>
        <div className="weather-container">
          <img
            alt="weather"
            className="weather-icon"
            src={`icons/${data.weather[0].icon}.png`}
          />
          <h1 className="weather-temp">{Math.round(data.main.temp)}°C</h1>
          <h3 className="weather-desc">{data.weather[0].description}</h3>
        </div>
      </div>
      <div className="info-side">
        <div className="today-info-container">
          <div className="today-info">
            <div>
              <span className="title">Feels Like</span>
              <span className="value">
                {Math.round(data.main.feels_like)}°C
              </span>
              <div className="clear"></div>
            </div>
            <div className="humidity">
              <span className="title">Humidity</span>
              <span className="value">34 %</span>
              <div className="clear"></div>
            </div>
            <div className="wind">
              <span className="title">Wind</span>
              <span className="value">{data.wind.speed} m/s</span>
              <div className="clear"></div>
            </div>
          </div>
        </div>
        <div className="week-container">
          <ul className="week-list">
            <li className="active">
              <i className="day-icon" data-feather="sun"></i>
              <span className="day-name">Tue</span>
              <span className="day-temp">29°C</span>
            </li>
            <li>
              <i className="day-icon" data-feather="cloud"></i>
              <span className="day-name">Wed</span>
              <span className="day-temp">21°C</span>
            </li>
            <li>
              <i className="day-icon" data-feather="cloud-snow"></i>
              <span className="day-name">Thu</span>
              <span className="day-temp">08°C</span>
            </li>
            <li>
              <i className="day-icon" data-feather="cloud-rain"></i>
              <span className="day-name">Fry</span>
              <span className="day-temp">19°C</span>
            </li>
            <div className="clear"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Upgrade;
