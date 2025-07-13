const WeatherCard = ({ city }) => {
  return (
    <div>
      <h2>City-Name: {city.name}</h2>
      <p>City-Temperature: {city.main.temp} °C</p>
      <p>Highest-Temperature:{city.main.temp_max} °C</p>
      <p>Weather Condition: {city.weather[0].main}</p>
      <p>Humidity: {city.main.humidity}%</p>
      <p>Wind-Speed: {city.wind.speed} m/s</p>
    </div>
  );
};
export default WeatherCard;