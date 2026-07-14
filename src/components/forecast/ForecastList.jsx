import ForecastCard from "./ForecastCard";
import "./ForecastList.css";

const ForecastList = ({ foreCast = [] }) => {

    const daily = foreCast.filter((item, index) => index % 8 === 0).slice(0, 5);

    return (
        <>
            <h4>5 Day Forecast</h4>

            <div className="forecastRow">
                {daily.map((item) => (
                    <ForecastCard
                        key={item.dt}
                        item={item}
                    />
                ))}
            </div>
        </>
    );
};

export default ForecastList;