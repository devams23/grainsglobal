import React from 'react'
import "./Button.css"
function Button( {
    redirect = "",
    text = ""}) {
  return (
    <div className="login-button-large-screen">
    <a href={`/${redirect}`} className="login-button">{text}</a>
  </div>
  )
}

export default Button