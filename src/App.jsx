import { useState } from 'react'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
console.log(API_KEY)

const url = `https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=${API_KEY}&units=metric`;
import './App.css'

function App() {
  

  return (
    <>
       <h1 className='text'>Hi React</h1>
    </>
  )
}

export default App
