import React, { Component } from "react";
// Import components
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import ChartBar from './../../components/Charts/Bar';
// Import CSS
import './Dashboard.css'
export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
        chartData:{},
        chartDataGastos:{}
    }
  }

  componentWillMount(){
    this.getChartData();
    this.chartDataGastos();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Noviembre','Diciembre'],
        datasets:[
          {
            label:'Gastos promedio por boda',
            data:[80,150,120,60,203,89,102,96,126,133,260],
            backgroundColor:[ 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)','rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',  'rgba(255, 206, 86, 0.6)',  'rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)'
            ]
          }
        ]
      }
    });
  }

  chartDataGastos(){
    this.setState({
      chartData:{
        labels: ['Comida', 'Bebida', 'Salon', 'Musica', 'Iglesia', 'Vestido','Adornod'],
        datasets:[
          {
            label:'Gastos promedio por boda',
            data:[40000,25000,13700,25000,6000,18000,15000],
            backgroundColor:[ 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 
            'rgba(255, 206, 86, 0.6)','rgba(75, 192, 192, 0.6)','rgba(153, 102, 255, 0.6)', 
            'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }
  render() {
    return (
    <div>
        <div className="ctn-dashboard pt-4 mb-5">
        <Navbar/>
            <div className="wrap__inner">
              <div className="row">
              <h2 className="title__section">Dashboard</h2>
              </div>
              <div className="container">        
                <div class="container-cards">
                  <div className="col-12 col-md-2 card" >
                    <div className="card-title">
                        <label>Bodas en curso</label>
                    </div>
                    <div className="card-body">
                        <label>230</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-2 card" >
                    <div className="card-title">
                        <label>Bodas por el civil</label>
                    </div>
                    <div className="card-body">
                        <label>30</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-2 card" >
                    <div className="card-title">
                        <label>Bodas en religiosas</label>
                    </div>
                    <div className="card-body">
                        <label>20</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-2 card" >
                    <div className="card-title">
                        <label>Bodas ambos tipos</label>
                    </div>
                    <div className="card-body">
                        <label>180</label>
                    </div>
                  </div>
                </div>   
                <ChartBar chartData={this.state.chartData} location="Estado de México" legendPosition="bottom"/>
               
              </div>
            </div>
        <Footer/>
        </div>
    </div>
    );
  }
}
