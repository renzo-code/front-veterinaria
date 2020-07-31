import React from 'react'
import './InputStyles.scss'

const Input = (props) =>{
  return(
    <div>
      <p className="title">{props.titleInput}</p>
      <input 
        className="input"
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  )
}

export default Input