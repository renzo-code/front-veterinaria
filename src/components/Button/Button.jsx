import React from 'react'
import './ButtonStyles.scss'

const Button = (props) =>{
  return(
    <div>
      <button onClick={props.onClick} className="btn">{props.name}</button>
    </div>
  )
}

export default Button