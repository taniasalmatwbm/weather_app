 import './WeatherHero.css'
 
 const WeatherHero = ({ weather }) => {
  if (!weather) return null;

  const icon = weather.icon;

  return (
    <div className="weatherHero">
      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt={weather.weather}
      />
    </div>
  );
};

export default WeatherHero;