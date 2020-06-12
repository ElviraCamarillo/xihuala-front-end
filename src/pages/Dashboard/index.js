import React, { Component } from "react";
// Import components
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import ChartBar from './../../components/Charts/Bar';
import ChartLine from './../../components/Charts/Line'
import Chart from './../../components/Charts/Pie'
// Import CSS
import './Dashboard.css'
export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
        chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Noviembre','Diciembre'],
        datasets:[
          {
            label:'Bodas',
            data:[
              80,
              150,
              120,
              60,
              203,
              89,
              102,
              96,
              126,
              133,
              260
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)'
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
                <h2 className="title__section">Dashboard</h2>
                <div className="container-body row">
                    <div className="col-12 col-md-2 card" >
                        <div className="card-title">
                            <label>Bodas en curso</label>
                        </div>
                        <div className="card-body">
                            <label>2</label>
                        </div>
                    </div>
                    <div className="col-12 col-md-2 card" >
                        <div className="card-title">
                            <label>Bodas por el civil</label>
                        </div>
                        <div className="card-body">
                            <label>2</label>
                        </div>
                    </div>
                    <div className="col-12 col-md-2 card" >
                        <div className="card-title">
                            <label>Bodas en religiosas</label>
                        </div>
                        <div className="card-body">
                            <label>2</label>
                        </div>
                    </div>
                    <div className="col-12 col-md-2 card" >
                        <div className="card-title">
                            <label>Bodas en terminadas</label>
                        </div>
                        <div className="card-body">
                            <label>2</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <ChartBar chartData={this.state.chartData} location="Estado de México" legendPosition="bottom"/>
                </div>
                <div className="row">
                    <ChartLine chartData={this.state.chartData} location="Estado de México" legendPosition="bottom"/>
                </div>
                <div className="row">
                    <Chart chartData={this.state.chartData} location="Estado de México" legendPosition="bottom"/>
                </div>
            </div>
        <Footer/>
        </div>
    </div>
    );
  }
}
