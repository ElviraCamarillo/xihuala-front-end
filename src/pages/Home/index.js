import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

// Import components
import Navbar from '../../components/Navbar'
import ImgContainer from '../../components/ImgContainer'
import Footer from '../../components/Footer'
import CardEvent from '../../components/CardEvent'
import Api from '../../lib/api'

// Import icons
import novios5 from '../../img/novios5.svg'

// Import CSS
import './Home.css'

export default class Home extends Component {
  constructor(props){
    super (props)
    this.state = {
      events: []
    }
  }
  componentDidMount(){
    // get token
    const token = window.localStorage.getItem('tokenapp')
    /*console.log(token)*/
    if(token == null){
      this.props.history.push(`/login`)
      return
    }

    // buscar los eventos con este id user
    async function getSession (token){
      /*console.log(token)*/
      const sessionObj = await Api.getUserSession(token)
      return sessionObj
    }
    async function getEvents (token,idUser){
      const sessionObj = await Api.getEventsByUserId(token, idUser)
      return sessionObj
    }
    const payload = getSession(token)
    
    payload.then((result)=>{
      const idUser = result.data.session.user._id
      const events = getEvents(token, idUser)
      events.then((resultEvents)=>{
        /*console.log(resultEvents.data.events)*/
        this.setState({
          events: [...resultEvents.data.events]
        });
      })
    })


  }
  
  render() {
        return (
    
          <div className="wrap__home">
            <Navbar/>
            <div className="wrap__inner pt-5">
              <h1 className='title__section'>Mis Eventos</h1>
              <div className="row mt-5">
                <div className='container-home col-12 col-md-6 d-flex justify-content-start flex-column'>
                  
                  {this.state.events.map((value, index) => {
                    return <CardEvent key={index} obj={value} />
                  })}
                  
                  {this.state.events.length === 0 ?
                  <div>
                  <p className="emptyEvents">No existen enventos aún</p>
                  <div className='d-md-flex pb-3'>
                    <Link to={`/event`} className="btn btn-info">Crear evento</Link>
                  </div>
                  </div>
                  : ''}
                
                </div>
                <div className='image-container col-12 col-md-6 d-flex justify-content-center'>
                  <ImgContainer imageUrl={novios5} />
                </div> 
              </div>
            </div>
            <Footer/>
          </div>
        )
  }
}
