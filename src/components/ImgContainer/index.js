import React from 'react'

import './ImgContainer.css'

export default function ImageContainer({imageUrl}) {
  return (
      <img src={`${imageUrl}`} alt=" "></img> 
  )
}
