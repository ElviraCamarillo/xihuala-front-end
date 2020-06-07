import React from 'react'

import "./PrimaryButton.css"

export default function PrimaryButton({name}) {
  return (
      <button className="activePrimaryBtn">
        {name}
      </button>
  )
}


