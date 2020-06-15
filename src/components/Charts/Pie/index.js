import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

class ChartPie extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartDataGastos:props.chartDataGastos
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">
        <Pie
          data={this.state.chartDataGastos}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Gastos ',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default ChartPie;