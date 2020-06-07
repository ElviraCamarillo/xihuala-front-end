import React, { Component } from 'react'

import Navbar from '../../components/Navbar'
import ImgContainer from '../../components/ImgContainer'

import novios5 from '../../img/novios5.svg'

import './Home.css'
import CardEvent from '../../components/CardEvent'

export default class Home extends Component {
  
  render() {
    return (

      <div className="wrap__home">
        <Navbar/>
        <h1 className='home-title'>Mis Eventos</h1>
        <div className="row mt-5">
          <div className='container-home col-12 col-md-6 d-flex justify-content-start flex-column'>
            <CardEvent  />
            <CardEvent  />
          </div>
          <div className='image-container col-12 col-md-6 d-flex justify-content-center'>
            <ImgContainer imageUrl={novios5} />
          </div> 
        </div>
      </div>
        
    )
  }
}
