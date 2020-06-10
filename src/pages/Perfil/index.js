import React, { Component } from "react";
// Import components
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import Image  from './../../components/ImgContainer'
import novios from './../../img/novios6.svg'

import Api from '../../lib/api'

// Import CSS
import './Perfil.css'

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: []
    };
  }


  render() {
    const {user} = this.state
    return (
    <div>
        <Navbar/>
        <div className="ctn-profile">
            <div className="container-title">
                <h2 className="title__section">Perfil</h2>
            </div>
            <div className="container-body">
            <div className="container-form-profile">
                <form className='event-form d-flex flex-column event__info card__app p-5 rounded mt-5'>
                    <div className="row-input">
                        <div className='col-12 col-md-6'>
                            <label>Correo electrónico</label>
                        </div>
                        <div className='col-12 col-md-6'>
                            <input placeholder="mail@mail.com" value={user.email} disabled/>
                        </div>
                    </div>
                    <div className="row-input">
                        <div className='col-12 col-md-6'>
                            <label>Nombre(s)</label>
                        </div>
                        <div className='col-12 col-md-6'>
                            <input placeholder="first_name"  value={user.name}/>
                        </div>
                    </div>
                    <div className="row-input">
                        <div className='col-12 col-md-6'>
                            <label>Apellidos</label>
                        </div>
                        <div className='col-12 col-md-6'>
                            <input placeholder="last_name"  value={user.lastName}/>
                        </div>
                    </div>
                    <div className="row row-inputform mt-4">
                      <div className='col-12'>
                        <button type="submit" className="btn__app btn__dark large">Actualizar perfil</button>
                      </div>
                    </div>
                </form>
                    
            </div>
            <div className="container-image">
                <Image imageUrl={novios} />
            </div>
            </div>
            </div>
       <Footer/>
    </div>
    );
  }
}