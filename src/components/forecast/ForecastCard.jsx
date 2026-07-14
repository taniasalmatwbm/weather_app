import "./ForecastCard.css";

const ForecastCard = ({ item }) => {

const day = new Date(item.dt_txt).toLocaleDateString("en-US",{
weekday:"short"
});

const icon = item.weather[0].icon;

return(

<div className="forecastCard">

<img
src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
alt=""
/>

<h4>{day}</h4>

<p>{Math.round(item.main.temp)}°C</p>

</div>

)

}

export default ForecastCard;