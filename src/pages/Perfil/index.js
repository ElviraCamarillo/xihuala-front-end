import React, { Component } from "react";
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import Image  from './../../components/ImgContainer'
import novios from './../../img/novios6.svg'
import PrimaryButton from './../../components/PrimaryButton'
import './Perfil.css'
import Api from '../../lib/api'

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleInput({ target: { name, value } }) {
    this.setState({
        [name]: value
    })        
  }

  componentDidMount(){
    // get token
    const token = window.localStorage.getItem('tokenapp')
    console.log(token)
    if(token == null){
      this.props.history.push(`/login`)
      return
    }

    // buscar los eventos con este id user
    async function getSession (token){
      console.log(token)
      const sessionObj = await Api.getUserSession(token)
      return sessionObj
    }

    const payload = getSession(token)
    
    payload.then((result)=>{
      const idUser = result.data.session.user._id
      console.log(result.data.session.user)
      this.setState({
        email: result.data.session.user.email,
        lastName: result.data.session.user.lastName,
        name: result.data.session.user.name,
      });

    //   const events = getEvents(token, idUser)
    //   events.then((resultEvents)=>{
    //     console.log(resultEvents.data.events)
    //     this.setState({
    //       events: [...resultEvents.data.events]
    //     });
    //   })
    })
  }

  render() {
   
    return (
    <div>
        <div className="ctn-profile">
        <Navbar/>
             
            <div className="wrap__inner">
            <h2 className="title__section">Perfil</h2>

            <div className="container-body">
                <div className="container-form-profile">
                    <form action="" className="d-flex flex-column card__app p-5 rounded mt-5">

                        <div className="row-input flex-column">
                            <div className='col-12'>
                                <label>Correo electrónico</label>
                            </div>
                            <div className='col-12'>
                                <input 
                                    placeholder="mail@mail.com" 
                                    disabled 
                                    value={this.state.email}
                                />
                            </div>
                        </div>
                        <div className="row-input flex-column">
                            <div className='col-12'>
                                <label>Nombre(s)</label>
                            </div>
                            <div className='col-12'>
                                <input placeholder="first_name" value={this.state.name}/>
                            </div>
                        </div>
                        <div className="row-input flex-column">
                            <div className='col-12'>
                                <label>Apellidos</label>
                            </div>
                            <div className='col-12'>
                                <input placeholder="last_name" value={this.state.lastName}/>
                            </div>
                        </div>
                        <div className="row p-0">
                            <div className='col-12 text-right'>
                                <button className="btn__app btn__dark large" type="submit">Actualizar perfil</button>
                            </div>
                        </div>
                    </form>
                        
                </div>
                <div className="image-container col-12 col-md-6 d-flex justify-content-center">
                    <Image imageUrl={novios} />
                </div>
                </div>
            </div>
            </div>
       <Footer/>
    </div>
    );
  }
}