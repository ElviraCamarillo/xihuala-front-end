import React from 'react'

import './ImgContainer.css'

export default function ImageContainer({imageUrl}) {
  return (
    <div className='img-container'>
      <img src={`${imageUrl}`} alt=" "></img> 
    </div>
  )
}
