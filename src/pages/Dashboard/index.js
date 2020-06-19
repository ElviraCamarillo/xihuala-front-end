import React, { Component } from "react";
import Api from '../../lib/api'
// Import components
import { Table } from 'reactstrap';
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import ChartBar from './../../components/Charts/Bar';
import ChartPie from './../../components/Charts/Pie'
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
      chartDataBar:{},
      chartDataPie:{},
      users:[],
      totalusers : 0,
      events:[],
      totalevents: 0,
      averagebuget:0,
      dates:[],
      jan:0,
      feb:0,
      mar:0,
      apr:0,
      may:0,
      jun:0,
      jul:0,
      aug:0,
      sep:0,
      oct:0,
      nov:0,
      dec:0
    }
    this.getChartDataBar = this.getChartDataBar.bind(this)
  }

  componentWillMount(){
    this.getChartDataBar();
    this.getChartDataPie();
  }

  getChartDataBar(){
    this.setState({
      chartDataBar:{
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        datasets:[
          {
            label:'Bodas en por mes',
            data:[10,40,50,30,15,10,6,7,6,9,10,21],
            backgroundColor:[ '#c5a2fc', '#7342bf', '#f9e3fc',
              '#e8e2f1','#843ef5', '#52367a', '#43144b',
              '#f36ce8',  '#8118a1',  '#b16dc5', '#755d79',
              '#ce74ba'
            ]
          }
        ]
      }
    });
  }

  getChartDataPie(){
    this.setState({
      chartDataPie:{
        labels: ['Vestido', 'Comida', 'Salón', 'Adorno', 'Recuerdos', 'Flores','Bebidas'],
        datasets:[
          {
            label:'Gastos populares en bodas',
            data:[18000, 35000, 15500, 33000, 6000, 22650, 26120],
            backgroundColor:[ '#c5a2fc', '#7342bf', '#f9e3fc',
              '#e8e2f1','#c5a2fc', '#7342bf', '#f9e3fc'
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
        let dates = []
        let totalbuget
        let averagebuget
        let jan = 0
        let feb = 0
        let mar = 0
        let apr = 0
        let may = 0
        let jun = 0
        let jul = 0
        let aug = 0
        let sep = 0
        let oct = 0
        let nov = 0
        let dec = 0
        for(let item in resultEvents.data.event){
          events.push(resultEvents.data.event[item])
          totalevents = totalevents + 1
          let date = (resultEvents.data.event[item].eventDate)
          let month = date.slice(5,7)
          console.log(date)
          console.log(month)
          if (month === "01"){
            jan = jan + 1
          }
          if (month === "02"){
            feb = feb + 1
          }
          if (month === "03"){
            mar = mar + 1
          }
          if (month === "04"){
            apr = apr + 1
          }
          if (month === "05"){
            may = may + 1
          }
          if (month === "06"){
            jun = jun + 1
          }
          if (month === "07"){
            jul = jul + 1
          }
          if (month === "08"){
            aug = aug + 1
          }
          if (month === "09"){
            sep = sep + 1
          }
          if (month === "10"){
            oct = oct + 1
          }
          if (month === "11"){
            nov = nov + 1
          }
          if (month === "12"){
            dec = dec + 1
          }
        }
        console.log(mar)
        console.log(jul)
        for(let item in resultEvents.data.event.buget){
          totalbuget = totalbuget + 1
        }
        averagebuget= totalbuget/totalevents
        
        this.setState({
          events: [resultEvents.data.event],
          totalevents: totalevents,
          events: events,
          averagebuget: averagebuget,
          jan: jan,
          feb: feb,
          mar: mar,
          apr: apr,
          may: may,
          jun: jun,
          jul: jul,
          aug: aug,
          sep: sep,
          oct: oct,
          nov: nov,
          dec: dec
        });
      })
    }
  }

  render() {
    return (
    <div>
        <div className="ctn-dashboard pt-4 mb-5">
        <Navbar/>
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
                <div className="col-12 mt-5 container-tab">
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
                <div className="col-12 mt-5 container-tab">
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
                <div className="col-12 mt-5 container-charts">
                  <ChartBar chartData={this.state.chartDataBar} className="grafica" legendPosition="bottom"/>
                </div>
                <div className="dashboard-body">
                  <div className="row w-100 justify-content-between">
                  
                    <div className="col-12 col-md-5 container-charts">
                      <ChartPie chartData={this.state.chartDataPie}  legendPosition="bottom"/>
                    </div>
                    <div className="col-12 col-md-5 container-tab">
                      <label className="title-section">Gastos populares en bodas</label>
                      <Table className="tab mb-5 table-striped table-bordered"> 
                      <thead className="thead-dark">
                        <tr>
                          <th>Gasto</th>
                          <th>Costo promedio</th>
                        </tr>
                      </thead> 
                      <tbody>  
                        <tr>
                          <td>Vestido</td>
                          <td>18000</td>
                        </tr>
                        <tr>
                          <td>Comida</td>
                          <td>35000</td>
                        </tr>
                        <tr>
                          <td>Salón</td>
                          <td>15500</td>
                        </tr>
                        <tr>
                          <td>Adorno</td>
                          <td>33000</td>
                        </tr>
                        <tr>
                          <td>Recuerdos</td>
                          <td>6000</td>
                        </tr>
                        <tr>
                          <td>Flores</td>
                          <td>22650</td>
                        </tr>
                        <tr>
                          <td>Bebidas</td>
                          <td>26120</td>
                        </tr>
                      </tbody>
                    </Table>
                    </div>
                  </div>
                </div>
              </div>
        <Footer/>
        </div>
    </div>
    );
  }
}