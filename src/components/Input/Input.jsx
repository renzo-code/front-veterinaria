import React from 'react'
import './InputStyles.scss'

const Input = (props) =>{
  return(
    <div>
      <p className="title">{props.titleInput}</p>
      <input 
        className={`input ${props.className}`}
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
      />
    </div>
  )
}

export default Input