
import "./LocationCard.css";

const LocationCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="locationCard">
      <h3>{weather.city}</h3>
      <p>{weather.country}</p>
    </div>
  );
};

export default LocationCard;