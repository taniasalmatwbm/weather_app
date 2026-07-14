import ForecastList from "../forecast/ForecastList";
import Highlights from "../hightlights/Highlights";
import "./MainContent.css";

const MainContent = ({ foreCast, weather, airQuality }) => {
  return (
    <div className="mainContent">

      <ForecastList foreCast={foreCast} />

      <Highlights
        weather={weather}
        airQuality={airQuality}
      />

    </div>
  );
};

export default MainContent;