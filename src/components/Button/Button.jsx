import React from 'react'
import './ButtonStyles.scss'

const Button = (props) =>{
  return(
    <button 
      onClick={props.onClick} 
      className={`btn ${props.className}`}
      disabled={props.disabled}
    >
    {props.name}
    </button>
  )
}

export default Button