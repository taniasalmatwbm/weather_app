 import './WeatherStatus.css'
 
 const WeatherStatus = ({ weather }) => {

    if(!weather) return null;

    return(

        <div className="weatherStatus">

            <p>{weather.weather}</p>

            <span>{weather.description}</span>

        </div>

    )

}

export default WeatherStatus;