import React, { Component } from "react";

// Import components
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
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
      note: '',
      statusresponse:''
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

    var path = this.props.location.pathname
    const largeEvent = path.substring(8)
    const idEvent= largeEvent.substring(0,24)
    if(token === null) {
      this.props.history.push(`/login`)
    }else{
      async function getEvent (idEvent){
        const sessionObj = await Api.getEvent(idEvent)
        return sessionObj
      }
      const payload = getEvent(idEvent)
      payload.then( (resultEvent) => {
        /*console.log(resultEvent)*/
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

    const nameFamily= this.state.nameFamily
    const numberGuests= parseInt(this.state.numberGuests)
    const emailFamily = this.state.emailFamily
    const note = this.state.note
    const status = 'Pendiente'

    /*console.log(this.props)*/
    const token = window.localStorage.getItem('tokenapp')
    var path = this.props.location.pathname
    const largeEvent = path.substring(8)
    const idEvent= largeEvent.substring(0,24)

    if(nameFamily == '') {
      // si pass no coinciden
      /*console.log('Faltan datos')*/
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
      const payload = await Api.addGuestEvent(idEvent, {nameFamily, numberGuests, emailFamily, note, status})
      /*console.log(payload)*/
      if(payload.success === true){

        this.setState({
          response: 'Invitado registrado correctamente',
          statusresponse: 'success',
          guests: [...this.state.guests, {nameFamily, numberGuests, emailFamily, note, status}],
          totalguests: this.state.totalguests + parseInt(numberGuests)
        });

        setTimeout(() => {
          this.setState({
            response: '',
            statusresponse: ''
          });
        }, 4000)
        
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

  onHandleNumberChange = e => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      //this.props.onChange(value);
      this.setState({
        [e.target.name]: parseInt(value)
      })
    }
  };
  handleEmail = e => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
      this.setState({
        [e.target.name]: value
      })
      e.target.classList.remove('is-invalid')
    }else{
      e.target.classList.add('is-invalid')
    }
  }
  
  render() {
    const path = this.props.location.pathname
    let id_event = path.substring(8)
    id_event = id_event.split('/')[0]
    return (
      <div>
        <Navbar/>
        <div className="ctn-eventGuests">
          <HeaderEvent
            id={id_event}
            active="invitados"
          />
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
                              type="number"
                              placeholder="Total invitados"
                              name="numberGuests"
                              autoComplete="off"
                              onChange = {this.onHandleNumberChange.bind(this)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-12'>
                            <label>Correo electrónico</label>
                            <input 
                              placeholder="mail@mail.com"
                              name="emailFamily"
                              onChange={this.handleEmail.bind(this)}
                              autoComplete="off"
                            />
                        </div>
                        
                    </div>
                    <p className={`response-message ${this.state.statusresponse}`}>{this.state.response}</p>
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
                  <div className="col-9">
                    Total de invitados
                  </div>
                  <div className="col-3 text-center">
                    {this.state.totalguests}
                  </div>
                </div>
                
              </div>
              <div className="table-responsive">
                <Table className="table mb-5 table-striped table-bordered">
                  <thead className="thead-dark table-guests">
                      <tr>
                      <th>Familia</th>
                      <th>No. Invitados</th>
                      <th>Estatus</th>
                      <th>Comentarios</th>
                      </tr>
                  </thead>
                  <tbody>
                    {this.state.guests.map((guest, index) => 
                      <tr>
                        <td key={`guest_family${index}`}>{guest.nameFamily}</td>
                        <td className='text-center' key={`guest_family${index}`}>{guest.numberGuests}</td>
                        <td className='text-center text-capitalize' key={`guest_family${index}`}>{guest.status}</td>
                        <td key={`guest_family${index}`}>{guest.note}</td>
                      </tr>
                    )}
                      
                  </tbody>
                </Table>
              </div>

            </div>        
          </div>
        </div>
        </div>
      <Footer/>
      </div>
    );
  }
}