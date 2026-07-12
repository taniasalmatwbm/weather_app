import { useState } from 'react'
import Search from '../search/Search'
const Sidebar = ({inputValue, setInputValue, searchCity, setSearchCity}) => {
    
  return (
    <Search
     inputValue={inputValue}   
     setInputValue={setInputValue} 
     searchCity={searchCity}
     setSearchCity={setSearchCity}
      />
  )
}

export default Sidebar