import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Country from './components/Country'

const App = () => {
  const [countries,setCountries] = useState([])
  const [haku,sethaku] = useState('')
  const [show,setShow]= useState(true)
  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(res =>{
        setCountries(res.data)
        console.log("loaded")
      })
  },[])

  const search = (e) => {
    setShow(false)
    console.log(e.target.value)
    sethaku(e.target.value)
  }

  const countriesToShow = show ? countries : countries.filter(country => country.name.toLowerCase().includes(haku))
  console.log(countriesToShow)
  return (
    <div>
      <p>Find countries: <input onChange={search} value={haku} type="text" /></p>
      {countriesToShow.map(country => (
        <Country key={country.numericCode} country={country}/>
      ))}
    </div>
  )
}

export default App