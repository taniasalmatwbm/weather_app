import React from 'react'
import './Search.css'
const Search = ({inputValue,setInputValue,searchCity,setSearchCity}) => {
  return (
    <div className='search'>
        <div>
            <img src="/search.svg" alt="searchbar"/>
            <input
            className=''
             type='text'
             placeholder='Search for a city.....'
             value={inputValue}
             onChange={(e)=>setInputValue(e.target.value)}
             />

             <button onClick={()=>{
                 if (!inputValue.trim()) return;
                  setSearchCity(inputValue.trim())
                 }}>Search</button> 
        </div>
    </div>
  )
}

export default Search