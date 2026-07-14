import "./Highlights.css";

const Highlights = ({ weather, airQuality }) => {

    if (!weather || !airQuality) {
        return <p>Loading highlights...</p>;
    }

    return (
        <>
            <h4>Today's Highlights</h4>

            <div className="highlightGrid">
                <div className="card">
                    <h4>Humidity</h4>
                    <h1>{weather.humidity}%</h1>
                </div>

                <div className="card">
                    <h4>Wind</h4>
                    <h1>{weather.windSpeed} m/s</h1>
                </div>

                <div className="card">
                    <h4>Visibility</h4>
                    <h1>{weather.visibility / 1000} km</h1>
                </div>

                <div className="card">
                    <h4>Air Quality</h4>
                    <h1>{airQuality.aqi}</h1>
                </div>

            </div>
        </>
    );
};

export default Highlights;