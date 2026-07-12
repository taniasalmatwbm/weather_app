import { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import MainContent from './components/layout/MainContent'
import './App.css'

// const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
// console.log(API_KEY)

// const url = `https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=${API_KEY}&units=metric`;

 
function App() {
     const [inputValue,  setInputValue]    = useState("")   
     const [searchCity,  setSearchCity]    = useState("Lahore");
     const [weather,     setWeather]       = useState(null);
     const [foreCast,    setForeCast]      = useState([]);
     const [airQuality,  setAirQuality]    = useState(null);
     const [loading,     setLoading]       = useState(false);
     const [error,       setError]         = useState("");
  return (
    <div className="app-container">
    <Sidebar 
    inputValue={inputValue}
    setInputValue={setInputValue}
    searchCity={searchCity}  //ab yaha searchcity ky pass input value agai h 
    setSearchCity={setSearchCity} 
    weather={weather} />
    <MainContent foreCast={foreCast} />
    </div>
  )
}

export default App
