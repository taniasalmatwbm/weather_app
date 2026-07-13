const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
// console.log(API_KEY)
 
const BASE_URL = "https://api.openweathermap.org";

// const API_OPTIONS = {
//   method:'Get',
//   headers: {
//     accept: 'application/json',
//     Authorization:`Bearer ${API_KEY}`
//   }
//  }
// API_OPTIONS es liye nhi aye ga ku ky hum key url ky 
// through bhj rehe hn 

 export const getCoordinates = async (city)=>{
   try{
        const url = `${BASE_URL}/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
        const response = await fetch(url);

        if(!response.ok){
            throw new Error ("Failed to fetch city");
        }

        const data = await response.json()
         console.log("getCoordinate data", data)
        if (data.length === 0) {
            throw new Error("City not found");
      
    }
     return {
         lat: data[0].lat,
         lon: data[0].lon,
       };
   }catch(error) {
    //   throw new Error (`Error from serching data ${error}`)
    throw new Error(`Error fetching coordinates: ${error.message}`);
   }
    

}

 export const getCurrentWeather = async (lat,lon)=>{
  try{
    const url = `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
     const response = await fetch(url)
     if(!response.ok){
        throw new Error ("Failed to fetch weather "); 
     }
     const data = await response.json();
     console.log("getCurrentWeather",data);

    //  if(data.length==0){
    //     throw new Error (`weather fetch error`)
    //  }

    if (!data.main) {
     throw new Error("Weather data not found");
    }
     //Main is project me sirf required fields return karunga, poora data nahi.

    // Kyun?

// Agar API future me 100 aur fields bhejne lage, to hamari app par koi effect nahi padega.
     return {
    city: data.name,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    visibility: data.visibility,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    weather: data.weather[0].main,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    tempMax: data.main.temp_max,
    tempMin: data.main.temp_min,
    country: data.sys.country,

  };
}catch(error){
     throw new Error (`weather error in catch ${error.message}`)
  }
 }

 export const getForecast = async (lat,lon)=>{
  try{
      const url = `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url)
      if(!response.ok){
        throw new Error ("Failed to getForecast "); 
      }
     const data = await response.json();
     console.log("forecast data",data.list);

      if (!data.list || data.list.length === 0) {
     throw new Error("forecast data not found");
    }
    return data.list;
   
    }catch(error){
      throw new Error (`forecast in catch ${error.message}`)
  }
 }

 export const getAirQuality = async (lat,lon)=>{
  try{
    const url = `${BASE_URL}/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    
      const response = await fetch(url)
      if(!response.ok){
        throw new Error ("Failed to Air quality "); 
      }
     const data = await response.json();
     console.log("Air Quality data", data.list);

      if (data.list || data.list.length === 0) {
     throw new Error("Air Quality not found");
    }
    
    return {
    aqi: data.list[0].main.aqi,
    components: data.list[0].components
    };
  }catch(error){
    throw new Error (`Air Quality error in catch ${error.message}`)
  }
 }

//flow
//  Search Button

// ↓

// setSearchCity("Karachi")

// ↓

// useEffect(App.jsx)

// ↓

// const { lat, lon } = await getCoordinates(searchCity);

// ↓

// const weather = await getCurrentWeather(lat, lon);

// ↓

// const forecast = await getForecast(lat, lon);

// ↓

// const air = await getAirQuality(lat, lon);