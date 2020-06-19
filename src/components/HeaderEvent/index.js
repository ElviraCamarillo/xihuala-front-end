import React from 'react'
import {
  Link,
  // useLocation
} from "react-router-dom";


import './HeaderEvent.css'

export default function HeaderEvent(props) {

  console.log(props)
  const idEvent = props.id
  const active = props.active

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
              }}>GASTOS</Link>
            </div>        
          </div>
    </header>
  )
}
