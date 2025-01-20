import React from 'react'

const TrendingData = ({id,name,image,price}) => {
  return (
    <div>
      <></>
      <div className='card' >
       
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <h3>${price}</h3>
          
        </div>
    </div>
  )
}

export default TrendingData
