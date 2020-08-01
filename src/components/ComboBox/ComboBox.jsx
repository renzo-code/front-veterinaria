import React from 'react'
import './ComboStyle.scss'

const ComboBox = (props) => {
  return (
    <div>
      <p className="title-box">{props.title}</p>
      <select onChange={props.onChange} className="combo-box" name="" id="">
        {
          props.info.map((obj,i)=>
        <option  key={i} value={obj.id}>{obj.description}</option>
        )
        }
        </select>
    </div>
  )
}
export default ComboBox
