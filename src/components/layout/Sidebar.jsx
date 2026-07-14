import { useState } from 'react'
import Search from '../search/Search'
import WeatherHero from "../weather/WeatherHero";
import Temperature from "../weather/Temperature";
import DateTime from "../weather/DateTime";
import WeatherStatus from "../weather/WeatherStatus";
import LocationCard from "../weather/LocationCard";
import MainContent from "../layout/MainContent"
import './Sidebar.css'




const Sidebar = ({inputValue, setInputValue, searchCity, setSearchCity,weather,foreCast,airQuality}) => {
    
  return (
<div className="sidebar">
    <Search
      inputValue={inputValue}
      setInputValue={setInputValue}
      searchCity={searchCity}
      setSearchCity={setSearchCity}
    />
    {/* <pre>{JSON.stringify(weather, null, 2)}</pre> */}
    <WeatherHero weather={weather} />
    <Temperature weather={weather} />
    <DateTime />
    <WeatherStatus weather={weather} />
    <LocationCard weather={weather} />
    <MainContent
   foreCast={foreCast}
   weather={weather}
   airQuality={airQuality}
/>
</div>
      
  )
}

export default Sidebar