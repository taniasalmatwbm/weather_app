import "./WeatherHero.css";

const WeatherHero = ({ weather }) => {
  if (!weather) return null;
//    console.log(
//   `https://openweathermap.org/img/wn/${weather.icon}@4x.png`
// );

  const icon = weather.icon;

  return (
    <div className="weatherHero">
      
      {/* <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
        alt=""
      /> */}
      <img
  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
  alt={weather.weather}
/>
    </div>
  );
};

export default WeatherHero;