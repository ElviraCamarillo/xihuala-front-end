import React from 'react'

// Import icons
import calendarIcon from '../../img/event-color-icon.svg'
import invitacionIcon from '../../img/invite-color-icon.svg'
import expenseIcon from '../../img/expense-color-icon.svg'
import './CardEvent.css'

import {
  Link
} from "react-router-dom";


export default function Card(props) {
  console.log(props)
  const card = props.obj
  return (
    <div className='ctn__card'>
      <div className='card-title-event'>
        <img src={calendarIcon} alt=''/>
        <p>Faltan <strong>N</strong> días para <strong>{card.nameEvent}</strong></p>
      </div>
      <div className='card-information-guest'>
        <img src={invitacionIcon} alt=''/>
        <p>Han confirmado <strong>confirmationGuests</strong> personas de <strong>totalGuests</strong></p>
      </div>
      <div className='card-information-expenses'>
        <img src={expenseIcon} alt=''/>
        <p>Tu gasto actual es de <strong>expenseAcutal</strong> de <strong>{card.buget}</strong></p>
      </div>
      <Link to={`/events/${card._id}`} className="btn btn-info">Ver detalle del evento</Link>

    </div>
  )
}

