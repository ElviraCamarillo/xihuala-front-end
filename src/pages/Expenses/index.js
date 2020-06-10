import React, { Component } from 'react'
import PropTypes from 'prop-types'

//  Import icons
import titleIcon from '../../img/expense-color-icon.svg'

// Import components
import PrimaryButton from '../../components/PrimaryButton'
import HeaderEvent from '../../components/HeaderEvent'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Table } from 'reactstrap';
import Api from '../../lib/api'

// ImportCss
import './Expenses.css'

export default class Event extends Component {
  constructor(props){
    super(props)
    this.state = {
      event: []
    }
  }

  componentDidMount(){
    // get token
    const token = window.localStorage.getItem('tokenapp')
    var path = this.props.location.pathname
    const idEvent = path.substring(8, 32)
    console.log(`id del evento ${idEvent}`)
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
        console.log(resultEvent)
        this.setState({
          event: resultEvent.data.event
        });
      })
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleInput({ target:{ name, value }}){
    this.setState({
      [name]: value
    })
  }

  async onSubmit (event) {
    const token = window.localStorage.getItem('tokenapp')
    if(token === false) this.props.history.push(`/login`)
    var path = this.props.location.pathname
    const idEvent = path.substring(8, 32)
    event.preventDefault()
    const { expenseDescription, expenseAmount} = this.state
    console.log(this.props)
    if (expenseDescription === '' || expenseAmount === ''){
      console.log('Datos incompletos')
      this.setState({
        response: 'Favor de llenar los datos requeridos',
        statusresponse: 'error'
      })
      setTimeout(() => {
        this.setState({
          response: '',
          statusresponse: ''
        });
      }, 4000)
    } else {
      const payload = await Api.newExpense(token, idEvent, {expenseDescription, expenseAmount})
      console.log(payload)
      if(payload.success === true){
        this.setState({
          response: 'Gasto registrado correctamente',
          statusresponse: 'success'
        });
        setTimeout(() => {
          this.props.history.push(`/home`)
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
    const {event} = this.state
    console.log(event.buget)
    return (
      <div className="wrap__home">
        <Navbar/>
        <div className="ctn-eventExpenses">        
        <HeaderEvent/>
        <div className="wrap__inner pt-5">
          <section className='row'>
            <div className='col-12 col-md-6'>
              <div className='d-flex pb-5'>
                <img className='pr-3' src={titleIcon} alt='' />
                <h1 className='title__section'>Control de Gastos</h1>
              </div>
              <form 
                className='event-form d-flex flex-column'
                onSubmit={this.onSubmit.bind(this)} 
                action=''>
                <div className='d-md-flex pb-3'>  
                    <label className='text-dark' for="expenseDescription">Concepto:</label>
                    <input 
                      type="text" 
                      id="expenseDescription" 
                      name="expenseDescription" />                                 
                </div>                
                <div className='d-md-flex pb-3 d-flex flex-column'>
                  <div className='d-md-flex pb-3'>
                    <label className='text-dark' for="expenseAmount">Gasto:</label>
                    <input 
                      type="number" 
                      id="expenseAmount" 
                      name="expenseAmount" />
                  </div>                  
                  <div className='d-flex justify-content-end'>                    
                  <button className="btn__app btn__dark large" type="submit">Agregar Gasto</button>
                  </div>                  
                </div>             
              </form>                                    
            </div>

            <div className='container-table'>

            <div className="wrap__totalguests mb-3 rounded">
              <div className="row">
                <div className="col-6">
                  Presupuesto restante
                </div>
                <div className="col-6 text-right">
                
                </div>
              </div>              
            </div>

              <div className='initial-budget d-flex justify-content-around'>
                <div>Presupuesto inicial</div>
                <div className="col-6 text-right">
                {event.buget}
                </div>
              </div>

              <Table className="table mb-5 table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                    <th>Concepto</th>
                    <th>Gasto</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>Gasto1</td>
                      <td>$1,200.00</td>
                      <td><div className='delete-expense'>X</div></td>
                    </tr>
                    <tr>
                      <td>Gasto</td>
                      <td>$1,200.00</td>
                      <td><div className='delete-expense'>X</div></td>
                    </tr>
                    <tr>
                      <td>Gasto3</td>
                      <td>$1,200.00</td>
                      <td><div className='delete-expense'>X</div></td>
                    </tr> 
                </tbody>
              </Table>

              <div className='total-expense d-flex justify-content-around'>
                <div>Gasto Total</div>
                <div>$20,040.00</div>
              </div>              
            </div>          
          </section>

        </div>

          
          </div>
        <Footer/>
      </div>
    )
  }
}
