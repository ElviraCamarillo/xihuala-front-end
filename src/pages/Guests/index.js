import React, { Component } from "react";

// Import components
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import PrimaryButton from './../../components/PrimaryButton'
import SecondaryButton from './../../components/SecondaryButton'
import HeaderEvent from '../../components/HeaderEvent'

import Api from '../../lib/api'

// Import CSS
import { Table } from 'reactstrap';
import './Guests.css'

export default class Guests extends Component {
  constructor(props){
    super (props)
    this.state = {
      event: [],
      totalguests: 0,
      guests:[],
      nameFamily: '',
      numberGuests: '',
      emailFamily: '',
      notes: ''
    }
  }

  componentDidMount(){
    // get token
    const token = window.localStorage.getItem('tokenapp')
    var path = this.props.location.pathname
    const largeEvent = path.substring(8)
    const idEvent= largeEvent.substring(0,24)
    if(token === null) {
      this.props.history.push(`/login`)
    }else{
      async function getEvent (token, idEvent){
        console.log(token)
        const sessionObj = await Api.getEvent(token, idEvent)
        return sessionObj
      }
      const payload = getEvent(token, idEvent)
      payload.then( (resultEvent) => {
        let totalguests = 0
        let guests = []
        for(let item in resultEvent.data.event.guests){
          guests.push(resultEvent.data.event.guests[item])
          totalguests = totalguests + resultEvent.data.event.guests[item].numberGuests
        }
        this.setState({
          event: [resultEvent.data.event],
          totalguests: totalguests,
          guests: guests
        });
      })
    }
  }

  handleInput({ target:{ name, value }}){
    this.setState({
      [name]: value
    })
  }
  async onSubmit (event) {
    event.preventDefault()
    const name= this.state.nameFamily
    const number= this.state.numberGuests
    const email = this.state.emailFamily
    const notes = this.state.notes

    console.log(this.props)

    if(name !== '') {
      // si pass no coinciden
      console.log('Faltan datos')
      // this.setState({
      //   ispassok: false,
      //   response: 'Las contraseñas no coinciden',
      //   statusresponse: 'error'
      // });
      // setTimeout(() => {
      //   this.setState({
      //     ispassok: true,
      //     response: '',
      //     statusresponse: ''
      //   });
      // }, 4000)

    }else{
      // si todo ok
      const payload = await Api.addGuestEvent({name, number, email, notes})
      console.log(payload)
      if(payload.success === true){
        this.setState({
          response: 'Usuario registrado correctamente',
          statusresponse: 'success'
        });
        setTimeout(() => {
          this.props.history.push(`/login`)
        }, 5000)
      }else{
        this.setState({
          response: payload.error,
          statusresponse: 'error'
        });
        setTimeout(() => {
          this.setState({
            response: '',
            statusresponse: ''
          });
        }, 4000)
      }
      

    }

  }
  

  render() {

    return (
      <div>
        <Navbar/>
        <div className="ctn-eventGuests">
          <HeaderEvent/>
          <div className="wrap__inner pt-3">
            <div className="container-title">
              <h2 className="title__section">Invitados</h2>
            </div>
            <div className="container-guests mt-5">
              <div className="container-form-guests">
                  <form 
                    action="" 
                    className="card__app p-5 rounded"
                    onSubmit={this.onSubmit.bind(this)}
                  >
                    <div className="row">
                        <div className='col-12'>
                            <label>Nombre de familia</label>
                            <input 
                              placeholder="Nombre"
                              name="nameFamily"
                              onChange={this.handleInput.bind(this)}
                              autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-12'>
                            <label>Número de invitados</label>
                            <input
                              placeholder="Total invitados"
                              name="numberGuests"
                              onChange={this.handleInput.bind(this)}
                              autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-12'>
                            <label>Correo electrónico</label>
                            <input 
                              placeholder="mail@mail.com"
                              name="emailFamily"
                              onChange={this.handleInput.bind(this)}
                              autoComplete="off"
                            />
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className='col-12'>
                            <label>Notas</label>
                            <textarea 
                              name="notes" 
                              cols="30" 
                              rows="5" 
                              onChange={this.handleInput.bind(this)}
                              autoComplete="off"
                            />
                        </div>
                        
                    </div>
                    <div className="row row-inputform mt-4">
                      <div className='col-12'>
                        <button type="submit" className="btn__app btn__dark large">Agregar familia</button>
                      </div>
                    </div>
                  </form>
              </div>
              <div className="container-table">
              <div className="wrap__totalguests mb-3 rounded">
                <div className="row">
                  <div className="col-6">
                    Total de invitados
                  </div>
                  <div className="col-6 text-right">
                    {this.state.totalguests}
                  </div>
                </div>
                
              </div>
              <Table className="table mb-5 table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                    <th>Familia</th>
                    <th>No. invitados</th>
                    <th>Estatus</th>
                    </tr>
                </thead>
                <tbody>
                  {this.state.guests.map((guest, index) => 
                    <tr>
                      <td key={`guest_family${index}`}>{guest.nameFamily}</td>
                      <td key={`guest_family${index}`}>{guest.numberGuests}</td>
                      <td key={`guest_family${index}`}>{guest.status}</td>
                    </tr>
                  )}
                    
                </tbody>
              </Table>
              <button type="button" className="btn__app btn__dark">Enviar invitaciones</button>

            </div>        
          </div>
        </div>
        </div>
      <Footer/>
      </div>
    );
  }
}