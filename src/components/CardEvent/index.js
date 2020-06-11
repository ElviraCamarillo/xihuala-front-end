import React from 'react'

// Import icons
import calendarIcon from '../../img/icons__wedding/icon__day.png'
import invitacionIcon from '../../img/icons__wedding/user__invitado.png'
import expenseIcon from '../../img/icons__wedding/icon__cash.png'
import './CardEvent.css'

import {
  Link
} from "react-router-dom";


export default function Card(props) {
  console.log(props)
  const card = props.obj

  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date();
  const secondDate = new Date(card.eventDate);
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  console.log(diffDays)

  let confirmados = 0;
  let totalGuests = 0;
  let totalExpense = 0;

  for(let guest in card.guests){
    if(card.guests[guest].status == 'confirmado'){
      confirmados++
    }
    totalGuests = totalGuests + card.guests[guest].numberGuests
  }
  for(let expense in card.expenses){
    console.log(card.expenses[expense])
    totalExpense = totalExpense + parseInt(card.expenses[expense].amount)
  }


  return (
    <div className='ctn__card card__app'>
      <div className='card-title-event'>
        <img src={calendarIcon} alt=''/>
        <p>Faltan <strong>{diffDays}</strong> días para <strong>{card.nameEvent}</strong></p>
      </div>
      <div className='card-information-guest'>
        <img src={invitacionIcon} alt=''/>
        <p>Han confirmado <strong>{confirmados}</strong> personas de <strong>{totalGuests}</strong></p>
      </div>
      <div className='card-information-expenses'>
        <img src={expenseIcon} alt=''/>
        <p>Tu gasto actual es de <strong>{totalExpense}</strong> de <strong>{card.buget}</strong></p>
      </div>
      <Link to={`/events/${card._id}`} className="align-self-start btn__app btn__dark small ml-5">Ver detalle del evento</Link>

    </div>
  )
}

