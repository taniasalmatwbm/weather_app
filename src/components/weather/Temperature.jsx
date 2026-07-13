 import './Temperature.css'
 
 const Temperature = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="temperature">
      <h1>{Math.round(weather.temperature)}°C</h1>

      <h4>
        H:{Math.round(weather.tempMax)}°
        &nbsp;&nbsp;
        L:{Math.round(weather.tempMin)}°
      </h4>
    </div>
  );
};

export default Temperature;