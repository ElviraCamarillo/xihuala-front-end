import React from 'react'

import './HeaderEvent.css'

export default function HeaderEvent() {
  return (
    <header className='event-header row sticky-top'>
      <div className='event-btn col-12'>
        <div>
          <a className='event-detail text-dark' href=''>DETALLE</a>
        </div>
        <div>
          <a className='event-guests text-dark' href=''>INVITADOS</a>
        </div>
        <div>
          <a className='event-expenses text-dark' href=''>CONTROL DE GASTOS</a>
        </div>        
      </div>
    </header>
  )
}
