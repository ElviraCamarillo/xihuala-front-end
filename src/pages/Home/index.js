import React, { Component } from 'react'

// Import components
import Navbar from '../../components/Navbar'
import ImgContainer from '../../components/ImgContainer'
import Footer from '../../components/Footer'
import CardEvent from '../../components/CardEvent'

// Import icons
import novios5 from '../../img/novios5.svg'

// Import CSS
import './Home.css'

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
        <Footer/>
      </div>
    )
  }
}
