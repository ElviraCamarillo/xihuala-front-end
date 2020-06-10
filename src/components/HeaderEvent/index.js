import React from 'react'
import {
  Link,
  useLocation
} from "react-router-dom";


import './HeaderEvent.css'

export default function HeaderEvent(props) {
  
  
  console.log(props)
  const idEvent = props.id
  const active = props.active
  const url = props.location

  let urlsDetalle = {
    detalle: `./`,
    invitados: `./guests`,
    expenses: `./expenses`
  }
  let urlsInvitados = {
    detalle: `./`,
    invitados: `./guests`,
    expenses: `./expenses`
  }
  let urlsExpenses = {
    detalle: `./`,
    invitados: `./guests`,
    expenses: `./expenses`
  }

  let finalURL = {}
  if(active === "detalle"){
    finalURL = urlsDetalle
  }else if(active === "invitados"){
    finalURL = urlsInvitados
  }else if(active === 'gastos'){
    finalURL = urlsExpenses
  }

  console.log(finalURL)

  return (
    <header className='event-header '>
          <div className='event-btn'>
            <div>
              <Link className={`event-detail text-dark ${active === "detalle" ? "active" : ""}`}  to={{
                pathname: `/events/${idEvent}`,
              }}>DETALLE</Link>
            </div>
            <div>
              <Link className={`event-detail text-dark ${active === "invitados" ? "active" : ""}`} to={{
                pathname: `/events/${idEvent}/guests`,
              }}>INVITADOS</Link>
            </div>
            <div>
              <Link className={`event-detail text-dark ${active === "gastos" ? "active" : ""}`} to={{
                pathname: `/events/${idEvent}/expenses`,
              }}>CONTROL DE GASTOS</Link>
            </div>        
          </div>
    </header>
  )
}
