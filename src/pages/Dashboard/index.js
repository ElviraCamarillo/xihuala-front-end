import React, { Component } from "react";
import Api from '../../lib/api'
// Import components
import { Table } from 'reactstrap';
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import ChartBar from './../../components/Charts/Bar';
import PostIt from '../../components/PostIt'
import iconRing from './../../img/icons__wedding/018-wedding ring.png'
import iconUser from './../../img/icons__wedding/022-user avatar.png'
import iconGest from './../../img/icons__wedding/user__invitado.png'
import iconCash from './../../img/icons__wedding/icon__cash.png'
// Import CSS
import './Dashboard.css'
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData:{},
      users:[],
      totalusers : 0,
      events:[],
      totalevents: 0,
      averagebuget:0
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData:{
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Noviembre','Diciembre'],
        datasets:[
          {
            label:'Bodas en promedio por mes',
            data:[240,150,120,160,203,89,102,96,126,133,260],
            backgroundColor:[ '#c32dff', '#ff00ff', '#ffe300',
              '#14bfff','#38feff', '#00ff00', '#b000d5',
              '#ff00ff',  '#ff0011',  '#00e615', '#fffe1c',
              '#0017e9'
            ]
          }
        ]
      }
    });
  }
  
  componentDidMount(){
    // get token
    const token = window.localStorage.getItem('tokenapp')
    console.log(token)
    if(token == null){
      this.props.history.push(`/login`)
      return
    }
    if(token === null) {
      this.props.history.push(`/login`)
    }else{
      /*usuarios */
      async function getUsers(token){
        const sessionObj = await Api.getUsers(token)
        return sessionObj
      }
      const payload = getUsers(token)
      payload.then( (resultUsers) => {
        console.log(resultUsers)
        let totalusers = 0
        let users = []
        for(let item in resultUsers.data.users){
          users.push(resultUsers.data.users[item])
          totalusers = totalusers + 1
        }
        this.setState({
          users: [resultUsers.data.users],
          totalusers: totalusers,
          users: users
        });
      })
      /*eventos*/
      async function getAllEvents(token){
        const sessionObj = await Api.getAllEvents(token)
        return sessionObj
      }
      const payloadEvent = getAllEvents(token)
      payloadEvent.then( (resultEvents) => {
        console.log(resultEvents)
        let totalevents = 0
        let events = []
        let totalbuget
        let averagebuget
        for(let item in resultEvents.data.event){
          events.push(resultEvents.data.event[item])
          totalevents = totalevents + 1
        }
        for(let item in resultEvents.data.event.buget){
          totalbuget = totalbuget + 1
        }
        averagebuget= totalbuget/totalevents
        this.setState({
          events: [resultEvents.data.event],
          totalevents: totalevents,
          events: events,
          averagebuget: averagebuget
        });
      })
    }
  }

  render() {
    return (
    <div>
        <div className="ctn-dashboard pt-4 mb-5">
        <Navbar/>
            {/* <div className="wrap__inner"> */}
              
              <div className="container"> 
              <div className="row">
              <h2 className="title__section">Dashboard</h2>
              </div>       
                <div class="container-postIt">
                  <div className="indicator">
                  <PostIt icon={iconRing} title={"Bodas"} number={this.state.totalevents}/>
                  </div>
                  <div className="indicator">
                  <PostIt icon={iconUser} title={"Usuarios"} number={this.state.totalusers}/>
                  </div>
                  <div className="indicator">
                  <PostIt icon={iconGest} title={"Invitados"} number={200}/>
                  </div>
                  <div className="indicator">
                  <PostIt icon={iconCash} title={"Presupuesto"} number={120000}/>
                  </div>
                  
                </div>   
                <div className="col-12 container-tab">
                  <label className="title-section">Usuarios Registrados</label>
                  <Table className="tab mb-5 table-striped table-bordered"> 
                    <thead className="thead-dark">
                      <tr>
                        <th>Correo</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                      </tr>
                    </thead>
                    <tbody>
                       {this.state.users.map((users) => 
                        <tr>
                          <td >{users.email}</td>
                          <td >{users.name}</td>
                          <td >{users.lastName}</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
                <div className="col-12 container-tab">
                  <label className="title-section">Bodas Registrados</label>
                  <Table className="tab mb-5 table-striped table-bordered"> 
                    <thead className="thead-dark">
                      <tr>
                        <th>Boda</th>
                        <th>Ubicación</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Presupuesto</th>
                      </tr>
                    </thead>
                    <tbody>
                       {this.state.events.map((events) => 
                        <tr>
                          <td >{events.nameEvent}</td>
                          <td >{events.location}</td>
                          <td >{events.eventDay}</td>
                          <td >{events.eventTime}</td>
                          <td >{events.buget}</td>
                        </tr>
                        )}
                    </tbody>
                  </Table>
                </div>
                <div className="dashboard-body">
                  <div className="col-md-6 container-charts">
                  <ChartBar chartData={this.state.chartData} className="grafica" legendPosition="bottom"/>
                  </div>
                  <div className="col-12 col-md-5 container-tab">
                  <label className="title-section">Bodas en promedio por mes</label>
                  <Table className="tab mb-5 table-striped table-bordered"> 
                    <thead className="thead-dark">
                      <tr>
                        <th>Mes</th>
                        <th>Bodas promedio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Enero</td>
                        <td>240</td>
                      </tr>
                      <tr>
                        <td>Febrero</td>
                        <td>150</td>
                      </tr>
                      <tr>
                        <td>Marzo</td>
                        <td>120</td>
                      </tr>
                      <tr>
                        <td>Abril</td>
                        <td>120</td>
                      </tr>
                    </tbody>
                  </Table>
                  </div>
                </div>
              </div>
            {/* </div> */}
        <Footer/>
        </div>
    </div>
    );
  }
}
