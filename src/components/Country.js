import React from 'react'

const Country = ({country}) => {
  return (
    <div className='country'>
      <p>{country.name}</p>
    </div>

  )
}

export default Country