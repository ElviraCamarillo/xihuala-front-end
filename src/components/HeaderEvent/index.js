import React from 'react'
import {
  Link
} from "react-router-dom";

import './HeaderEvent.css'

export default function HeaderEvent(props) {
  const idEvent = props.id
  const active = props.active
  return (
    <header className='event-header '>
      <div className='event-btn'>
        <div>
          <Link className={`event-detail text-dark ${active === "detalle" ? "active" : ""}`} to={`/events/${idEvent}/`}>DETALLE</Link>
        </div>
        <div>
          <Link className={`event-detail text-dark ${active === "invitados" ? "active" : ""}`} to={`/events/${idEvent}/guests`}>INVITADOS</Link>
        </div>
        <div>
          <Link className={`event-detail text-dark ${active === "gastos" ? "active" : ""}`} to={`/events/${idEvent}/expenses`}>CONTROL DE GASTOS</Link>
        </div>        
      </div>
    </header>
  )
}
