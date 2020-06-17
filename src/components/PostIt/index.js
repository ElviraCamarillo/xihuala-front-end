import React from 'react'
import "./postIt.css"

export default function postIt({title, number, icon}) {
  return (
    <div className="postIt" >
        <div className="post-header">
            <div className="post-icon">
                <img src={icon}  className="post-img" alt=''/>
            </div>
            <div className="post-title">
                <label>{title}</label>
            </div>
        </div>
        <div className="post-body">
            <label>{number}</label>
        </div>
    </div>
  )
}
