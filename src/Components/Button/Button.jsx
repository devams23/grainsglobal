import React from 'react'
import "./Button.css"
import { NavLink } from 'react-router-dom'
function Button( {
    redirect = "",
    text = ""}) {
  return (
    <div className="login-button-large-screen">
   <NavLink to={`${redirect}`} className={"login-button"}  >{text}</NavLink>
  </div>
  )
}

export default Button