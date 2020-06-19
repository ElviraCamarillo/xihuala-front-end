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

import { Chart } from "react-google-charts";


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
      eventPerMonth:[],
      width: 1024,
      optionBar: {
        title: "Bodas 2020",
        hAxis: { title: "Número de bodas",  minValue: 0 },
        vAxis: { title: "Mes",},
      },
      dataBar: [
        ["Year", "Bodas", { role: "style" }],
        ["Enero", 10, "color: gray"],
        ["Febrero", 14, "color: #76A7FA"],
        ["Marzo", 16, "color: blue"],
        ["abril", 16, "color: blue"],
        ["Mayo", 22, "fill-color: #C5A5CF"],
        ["Junio", 22, "fill-color: #C5A5CF"],
        ["Julio", 22, "fill-color: #C5A5CF"],
        ["Agosto", 22, "fill-color: #C5A5CF"],
        ["Septiembre", 22, "fill-color: #C5A5CF"],
        ["Octubre", 22, "fill-color: #C5A5CF"],
        ["Noviembre", 22, "fill-color: #C5A5CF"],
        ["Diciembre", 22, "fill-color: #C5A5CF"],
      ],
      dataPie: [],
      dataPieTable: [],
      maxInvitados: 0,
    }
    
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
        let totalevents = 0
        let events = []
        let dates = []
        let bugets = []
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
        
        let eventMonth=[]
        let expensesArray = []
        let maxInvitados = 0
        
        for(let item in resultEvents.data.event){

          events.push(resultEvents.data.event[item])
          bugets.push(resultEvents.data.event[item].buget)
          totalevents = totalevents + 1

          let expense = resultEvents.data.event[item].expenses;
          let guests = resultEvents.data.event[item].guests;
          for(let itemExpense in expense){
            expensesArray.push(expense[itemExpense])
          }
          
          for(let itemGuest in guests){
            maxInvitados = maxInvitados + guests[itemGuest].numberGuests
          }

          let date = (resultEvents.data.event[item].eventDate)
          let month = date.slice(5,7)
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
        var bug = bugets.reduce((acc, cvalue) =>{
          // console.log(acc, cvalue)
          return acc + cvalue
        }, 0)
        // console.log(bug, events.length)
        this.setState({
          maxInvitados: maxInvitados,
          averagebuget: bug / events.length
        })

        // console.log('bugets', bugets)

        let arrayToFilter =  []
        for(let itemFilter = 0; itemFilter < expensesArray.length; itemFilter++){
          arrayToFilter.push(expensesArray[itemFilter].expenseDescription.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())
        }
        let uniqueArray = arrayToFilter.filter(function(item, pos, self) {
          return self.indexOf(item) == pos;
        })

        let arrayToPie = [['Task', 'Gasto promedio']]
        let arrayToPieTable = []
        for(let itemPie = 0; itemPie < uniqueArray.length ; itemPie++ ){
          let acc = 0;
          let len = 0;
          for(let itemPieX = 0; itemPieX < expensesArray.length; itemPieX++){
            //console.log(expensesArray[itemPieX])
            if(expensesArray[itemPieX].expenseDescription.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()  === uniqueArray[itemPie] ){
              acc = acc + expensesArray[itemPieX].expenseAmount
              len = len + 1
              // console.log(expensesArray[itemPieX])
            }
            
          }
          // console.log('acc', acc, len)
          arrayToPie.push([uniqueArray[itemPie],acc / len])
          arrayToPieTable.push([uniqueArray[itemPie],acc / len])
        }
        // console.log(arrayToPie)
        this.setState({
          dataPie: [...arrayToPie],
          dataPieTable: arrayToPieTable
        })

        
        // eventMonth.push(jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec)
        // console.log(eventMonth)
        this.setState({
          events: [resultEvents.data.event],
          totalevents: totalevents,
          events: events,
          dataBar: [
            ["Mes", "Bodas", { role: "style" }], 
            ["Enero", jan, "fill-color: #c5a2fc"],
            ["Febrero", feb, "fill-color: #7342bf"],
            ["Marzo", mar, "fill-color: #f9e3fc"],
            ["abril", apr, "fill-color: #e8e2f1"],
            ["Mayo", may, "fill-color: #843ef5"],
            ["Junio", jun, "fill-color: #52367a"],
            ["Julio", jul, "fill-color: #43144b"],
            ["Agosto", aug, "fill-color: #f36ce8"],
            ["Septiembre", sep, "fill-color: #8118a1"],
            ["Octubre", oct, "fill-color: #b16dc5"],
            ["Noviembre", nov, "fill-color: #755d79"],
            ["Diciembre", dec, "fill-color: #ce74ba"]
          ]
        });

       
      })
    }
  }
 

  render() {
    const margin = {top: 20, right: 20, bottom: 30, left: 40};

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
                  <PostIt icon={iconGest} title={"Invitados"} number={this.state.maxInvitados}/>
                  </div>
                  <div className="indicator">
                  <PostIt icon={iconCash} title={"Presupuesto"} number={Math.round(this.state.averagebuget)}/>
                  </div>
                </div>   
                <div className="col-12 mt-5 container-tab">
                  <label className="title-section">Usuarios Registrados</label>
                  <div class="table-responsive-sm">
                    <Table className="tab mb-5 table-striped table-bordered"> 
                    <thead className="thead-dark">
                      <tr>
                        <th>Correo</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                      </tr>
                    </thead>
                    <tbody>
                       {this.state.users.reverse().map((users, index) => 
                        index < 10 ? 
                        <tr>
                          <td >{users.email}</td>
                          <td >{users.name}</td>
                          <td >{users.lastName}</td>
                        </tr>
                        : ''
                      )}
                    </tbody>
                  </Table>
                  </div>
                </div>
                <div className="col-12 mt-5 container-tab">
                  <label className="title-section">Bodas Registrados</label>
                  <div class="table-responsive-sm">
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
                       {this.state.events.reverse().map((events, index) => 
                        index < 10 ? 
                        <tr>
                          <td >{events.nameEvent}</td>
                          <td >{events.location}</td>
                          <td >{events.eventDate.slice(0, 10)}</td>
                          <td >{events.eventTime}</td>
                          <td className="text-right"><small>$ </small>{events.buget} <small>MXN</small></td>
                        </tr> : ''
                        )}
                    </tbody>
                  </Table>
                  </div>
                </div>
                <div className="col-12 mt-5 container-charts" id="container_bar">

                  <Chart 
                    chartType="BarChart" 
                    options={this.state.optionBar} 
                    width="100%" 
                    height="500px" 
                    data={this.state.dataBar} 
                  />

                </div>
                <div className="dashboard-body">
                  
                    <div className="col-12 col-md-6 container-charts ">
                      {/* <ChartPie chartData={this.state.chartDataPie}  legendPosition="bottom"/> */}
                      <label className="title-section">Gastos promedio por evento</label>

                      <Chart
                        width={'100%'}
                        height={'500px'}
                        chartType="PieChart"
                        loader={<div>Cargando...</div>}
                        data={this.state.dataPie}
                        options={{
                          title: 'Gastos promedio por evento',
                          slices: {
                            0: {color: '#c5a2fc'},
                            1: {color: '#7342bf'},
                            2: {color: '#f9e3fc'},
                            3: {color: '#e8e2f1'},
                            4: {color: '#843ef5'},
                            5: {color: '#52367a'},
                            6: {color: '#43144b'},
                            7: {color: '#f36ce8'},
                            8: {color: '#8118a1'},
                            9: {color: '#b16dc5'},
                            10: {color: '#755d79'},
                            11: {color: '#ce74ba'}
                          }
                        }}
                      />
                    </div>
                    <div className="col-12 col-md-5 container-tab offset-md-1">
                      <label className="title-section">Gastos populares en bodas</label>
                      <div class="table-responsive-sm">
                        <Table className="tab mb-5 table-striped table-bordered"> 
                          <thead className="thead-dark">
                            <tr>
                              <th>Gasto</th>
                              <th>Costo promedio</th>
                            </tr>
                          </thead> 
                          <tbody>  
                          {this.state.dataPieTable.map((expense, index) => 
                            <tr>
                              <td className="text-capitalize">{expense[0]}</td>
                              <td className="text-right"><small>$</small> {expense[1]}  <small>MXN</small> </td>
                            </tr>
                          )}
                            
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