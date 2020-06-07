import React, { Component } from 'react'

// Import icons
import calendarIcon from '../../img/event-color-icon.svg'
import invitacionIcon from '../../img/invite-color-icon.svg'
import expenseIcon from '../../img/expense-color-icon.svg'
import './CardEvent.css'

export default function Card({nameEvent, timeRest, confirmationGuests, totalGuests, expenseAcutal, expenseInitial}) {
  return (
    <div className='ctn__card'>
      <div className='card-title-event'>
        <img src={calendarIcon} alt=''/>
        <p>Faltan <strong>{timeRest = 5 }</strong> días para <strong>{nameEvent = 'Boda Monse & Dani'}</strong></p>
      </div>
      <div className='card-information-guest'>
        <img src={invitacionIcon} alt=''/>
        <p>Han confirmado <strong>{confirmationGuests=5}</strong> personas de <strong>{totalGuests=50}</strong></p>
      </div>
      <div className='card-information-expenses'>
        <img src={expenseIcon} alt=''/>
        <p>Tu gasto actual es de <strong>{expenseAcutal='$10,000'}</strong> de <strong>{expenseInitial='$50,000'}</strong></p>
      </div>
    </div>
  )
}

