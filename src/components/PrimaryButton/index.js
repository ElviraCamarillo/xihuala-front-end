import React from 'react'

import "./PrimaryButton.css"

export default function PrimaryButton({name}) {
  return (
    <div>
      <button className="activePrimaryBtn">
        {name}
      </button>
    </div>
  )
}


