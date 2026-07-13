import "./Temperature.css";

const Temperature = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="temperature">

      <h3>{Math.round(weather.temperature)}°C</h3>

      <p>
        H:{Math.round(weather.tempMax)}°
        &nbsp;&nbsp;
        L:{Math.round(weather.tempMin)}°
      </p>

    </div>
  );
};

export default Temperature;