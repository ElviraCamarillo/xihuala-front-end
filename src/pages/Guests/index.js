import React, { Component } from "react";

// Import components
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import PrimaryButton from './../../components/PrimaryButton'
import SecondaryButton from './../../components/SecondaryButton'
import HeaderEvent from '../../components/HeaderEvent'

// Import CSS
import { Table } from 'reactstrap';
import './Guests.css'

export default class Guests extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Navbar/>
        <div className="ctn-eventGuests">
        <HeaderEvent/>
        <div className="container-title">
          <h2>Invitados</h2>
        </div>
        <div className="container-guests">
          <div className="container-form-guests">
                <div className="row">
                    <div className='col-12 col-md-5'>
                        <label>Nombre de familia</label>
                    </div>
                    <div className='col-12 col-md-7'>
                        <input placeholder="Nombre"/>
                    </div>
                </div>
                <div className="row">
                    <div className='col-12 col-md-5'>
                        <label>Número de invitados</label>
                    </div>
                    <div className='col-12 col-md-7'>
                        <input placeholder="Total invitados"/>
                    </div>
                </div>
                <div className="row">
                    <div className='col-12 col-md-5'>
                        <label>Correo electrónico</label>
                    </div>
                    <div className='col-12 col-md-7'>
                        <input placeholder="mail@mail.com"/>
                    </div>
                    
                </div>
                <div className="row row-inputform">
                  <PrimaryButton name={"Agregar familia"} />
                </div>
          </div>
          <div className="container-table">
          <div>
            <Table className="table-total">
                <tr>
                <td>Total de invitados</td>
                <td>20</td>
                </tr>
            </Table>
          </div>
          <Table>
            <thead>
                <tr>
                <th>Familia</th>
                <th>No. invitados</th>
                <th>Estatus</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Familia 1</td>
                <td>4</td>
                <td>Pendiente</td>
                </tr>
                <tr>
                <td>Familia 2</td>
                <td>5</td>
                <td>Confirmado</td>
                </tr>
                <tr>
                <td>Familia 3</td>
                <td>2</td>
                <td>Rechazado</td>
                </tr>
            </tbody>
            </Table>
            <SecondaryButton name={"Enviar invitaciones"}/>
          </div>        
        </div>
        </div>
      <Footer/>
      </div>
    );
  }
}