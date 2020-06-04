import React from 'react'

import './Index.css'
import logo from '../../img/logo-color.svg'

import PrimaryButton from '../../components/PrimaryButton'

export default function Index() {
  return (
    <div>
      <body>
        <div className='container-fluid'>
          
          <header className='row d-flex flex-row pt-2'>
            <div className='col-12 col-md-6'>
              <img className='logo-index' src={logo}></img>
            </div>
            <div className='col-12 col-md-6'>
              <PrimaryButton name={"INICIAR SESIÓN"} />
            </div>
          </header>

          <section className='row'>
            <div className='col-12'>
              Organicemos juntos tu boda
            </div>
          </section>

          <section className='row'>
            <div className='col-12'>
              Slide
            </div>
          </section>

          <section className='row'>
            <div className='col-12 col-md-4'>
              card
            </div>
            <div className='col-12 col-md-4'>
              card
            </div>
            <div className='col-12 col-md-4'>
              card
            </div>
          </section>

          <section className='row'>
            <div className='col-12 col-md-6'>
              Mantén todo bajo control
            </div>
            <div className='col-12 col-md-6'>
              Novios
            </div>
          </section>

          <footer className='row'>
            <div className='col-12'>
              Footer
            </div>
          </footer>

        </div>
      </body>
    </div>
  )
}
