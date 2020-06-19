import React, { useEffect } from 'react'

import Api from '../../lib/api'

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function Confirmation (props) {
  // console.log(props)
  const hash = (props.location.pathname).substring(13)
  const { replace } = props.history
  useEffect(() => {
    async function validMail () {
      const validate = await Api.validateEmail(hash)
      if (validate.success) replace('/login')
    }
    validMail()
  }, [replace])
  return (
    <div>
        <Navbar/>
        <Footer/>
    </div>
  )
}
export default Confirmation