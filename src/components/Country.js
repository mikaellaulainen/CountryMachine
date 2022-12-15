import React, { useState } from 'react'

const Country = ({country}) => {
  const [view,setView] = useState(false)
  const clicked = (e) => {
    e.preventDefault()
    console.log(`Clicked ${country.name}`)
    setView(!view)
  }
  if(view){
    return (
    <div className='country' onClick={clicked}>
      <p>{country.name}</p>
      <img src={country.flags.png} alt="" />
      <p>Population: {country.population}</p>
      <p>Currency: {country.currencies[0].name}</p>
    </div>
  )
  }else{
    return (
      <div className='country' onClick={clicked}>
        <p>{country.name}</p>

      </div>
    )
  }
}

export default Country