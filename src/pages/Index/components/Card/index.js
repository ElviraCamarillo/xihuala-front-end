import React from 'react'

import './Card.css'

export default function Card({cardIcon, cardTitle, cardText}) {
  return (
    <div className='card-container'>
      <div className='card-title'>
        <img src={cardIcon} alt=''/>
        <h2>{cardTitle}</h2>
      </div>
      <div className='card-text'>
        <p className=''>{cardText}</p>
      </div>
      
    </div>
  )
}
