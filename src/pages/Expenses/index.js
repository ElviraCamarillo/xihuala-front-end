import React, { Component } from 'react'

import titleIcon from '../../img/expense-color-icon.svg'
import PrimaryButton from '../../components/PrimaryButton'
import HeaderEvent from '../../components/HeaderEvent'
import Navbar from '../../components/Navbar'

import './Expenses.css'

export default class Event extends Component {
  render() {
    return (
      <div>
        <body>
          <Navbar/>
          <HeaderEvent/>

          <section className='row'>
            <div className='col-12 col-md-6'>
              <div className='d-flex pb-5'>
                <img className='pr-3' src={titleIcon} alt='' />
                <h2>Control de Gastos</h2>
              </div>              
              <form className='expenses-form d-flex flex-column'>
                <div className='d-md-flex pb-3 d-flex flex-column'>
                  <div>
                    <label className='text-dark' for="initial-budget">Presupuesto inicial:</label>
                    <input type="text" id="initial-budget" name="initial-budget" />
                  </div>                  
                  <div className='d-flex justify-content-end'>                    
                    <PrimaryButton name={"Agregar presupuesto"}/>
                  </div>                  
                </div>
                <br/>
                <br/>
                <div className='d-md-flex pb-3'>  
                    <label className='text-dark' for="expense-description">Concepto:</label>
                    <input type="text" id="expense-description" name="expense-description" />                                 
                </div>                
                <div className='d-md-flex pb-3 d-flex flex-column'>
                  <div>
                    <label className='text-dark' for="expense-amount">Gasto:</label>
                    <input type="number" id="expense-amount" name="expense-amount" />
                  </div>                  
                  <div className='d-flex justify-content-end'>                    
                    <PrimaryButton name={"Agregar gasto"}/>
                  </div>                  
                </div>             
              </form>                                    
            </div>
            <div className='table-container col-12 col-md-6 d-flex flex-column justify-content-center'>
              <div className='left-budget d-flex justify-content-around'>
                <div>Presupuesto restante</div>
                <div>$29,960.25</div>
              </div>
              <div className='initial-budget d-flex justify-content-around'>
                <div>Presupuesto inicial</div>
                <div>$50,000.00</div>
              </div>
              <table class="table">
                <thead>
                  <tr>                  
                    <th scope="col">Concepto</th>
                    <th scope="col">Gasto</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>                  
                    <td>Gasto1</td>
                    <td>$8,000.00</td>
                    <td><div className='delete-expense'>X</div></td>
                  </tr>
                  <tr>                  
                    <td>Gasto2</td>
                    <td>$1,200.00</td>
                    <td><div className='delete-expense'>X</div></td>
                  </tr>
                  <tr>                  
                    <td>Gasto3</td>
                    <td>$840.00</td>
                    <td><div className='delete-expense'>X</div></td>
                  </tr>
                </tbody>
              </table>
              <div className='total-expense d-flex justify-content-around'>
                <div>Gasto Total</div>
                <div>$20,040.00</div>
              </div>              
            </div>          
          </section>

        </body>
      </div>
    )
  }
}
