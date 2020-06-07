import React, { Component } from "react";
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import Image  from './../../components/ImgContainer'
import novios from './../../img/novios6.svg'
import PrimaryButton from './../../components/PrimaryButton'
import './Perfil.css'
export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
   
    return (
    <div>
        <Navbar/>
        <div className="container-title">
            <h2>Perfil</h2>
        </div>
        <div className="container-body">
          <div className="container-form">
                <div className="row-input">
                    <div className='col-12 col-md-6'>
                        <label>Correo electronico</label>
                    </div>
                    <div className='col-12 col-md-6'>
                        <input placeholder="mail" disabled/>
                    </div>
                </div>
                <div className="row-input">
                    <div className='col-12 col-md-6'>
                        <label>Nombre(s)</label>
                    </div>
                    <div className='col-12 col-md-6'>
                        <input placeholder="first_name"/>
                    </div>
                </div>
                <div className="row-input">
                    <div className='col-12 col-md-6'>
                        <label>Apellidos</label>
                    </div>
                    <div className='col-12 col-md-6'>
                        <input placeholder="last_name"/>
                    </div>
                </div>
                <div>
                    <PrimaryButton name={"Actualizar perfil"}/>  
                </div>
                
          </div>
          <div className="container-image">
            <Image imageUrl={novios} />
          </div>
        </div>
       <Footer/>
    </div>
    );
  }
}