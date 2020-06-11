import React from 'react'

import './Index.css'

import novios from '../../img/novios1.svg'
import eventIcon from '../../img/icons__wedding/icon__register.png'
import guestIcon from '../../img/icons__wedding/user__invitado.png'
import inviteIcon from '../../img/icons__wedding/icon__invitation.png'

import HeaderPreLogin from '../../components/HeaderPreLogin'
import ImgContainer from '../../components/ImgContainer'
import Card from './components/Card'
import Footer from '../../components/Footer'


export default function Index() {
  return (
    <div className="ctn__index">
      <HeaderPreLogin />
      <section className='heroimage'>
      </section>
      <section className='wrap__text'>
        <div className="wrap__inner">
          <div className="row">
            <div className='col-12'>
              <h2 className='index-title'>Organicemos juntos tu boda</h2>
              <p className='index-text text-dark'>Te brindamos las herramientas necesarias para que organices tu boda, de manera fácil y sin complicaciones.</p>
            </div>
          </div>
        </div>
      </section>

      

      <section className='cards-section'>
        <div className="wrap__inner">
          <div className="row">

            <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
              <Card cardIcon={eventIcon} cardTitle={'Registra tu evento'} cardText={'Empieza indicando donde será la ceremonia religiosa, la fiesta y cuantos invitados consideras.'} />
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
            <Card cardIcon={guestIcon} cardTitle={'Organiza a tus invitados'} cardText={'Mantén el control de las confirmaciones de tus invitados, así como de peticiones especiales.'} />
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
            <Card cardIcon={inviteIcon} cardTitle={'Envía las invitaciones'} cardText={'Envía las invitaciones de forma totalmente digital y recibe las confirmaciones de tus invitados.'} />
            </div>
          </div>
        </div>
      </section>

      <section className='d-flex back__pink mt-5 ctn__control'>
        <div className="wrap__inner pt-5 pb-5"> 
          <div className="row align-items-center">
            <div className='col-12 col-md-6'>
              <h2 className='index-title'>Mantén todo bajo control</h2>
              <p className='index-text'>Que no se te escape nada y no te salgas de tu presupuesto. Te ayudamos.</p>
            </div>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
              <ImgContainer imageUrl={novios} />
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}
