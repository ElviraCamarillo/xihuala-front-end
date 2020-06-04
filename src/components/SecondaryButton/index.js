import React from 'react'

import "./SecondaryButton.css"

export default function SecondaryButton({name}) {
  return (
    <div>
      <button className="activeSecondaryBtn">
        {name}
      </button>
    </div>
  )
}