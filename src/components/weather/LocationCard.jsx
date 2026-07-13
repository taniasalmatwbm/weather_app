 import './LocationCard.css'
 
 const LocationCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="locationCard">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600"
        alt=""
      />

      <h3>{weather.city}</h3>
    </div>
  );
};

export default LocationCard;