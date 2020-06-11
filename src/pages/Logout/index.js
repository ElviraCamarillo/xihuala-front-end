import React, { useEffect } from 'react'
function Logout (props) {
  const { replace } = props.history
  useEffect(() => {
    window.localStorage.removeItem('tokenapp')
    replace('/login')
  }, [replace])
  return (
    <div />
  )
}
export default Logout