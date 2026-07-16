
import "./LocationCard.css";

const LocationCard = () => {
 

  return (
    <div className="locationCard">
      {/* <h3>{weather.city}</h3>
      <p>{weather.country}</p> */}
      <img
       src="/images/weatheriamge.jfif"
         alt="Weather"
       className="weather-image"
        />
    </div>
  );
};

export default LocationCard;