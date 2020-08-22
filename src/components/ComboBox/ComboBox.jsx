import React from 'react'
import './ComboStyle.scss'

const ComboBox = (props) => {
  return (
    <div className="conboBox-master">
      <p className="title-box">{props.title}</p>
      <select
        value={props.value}
        defaultValue={props.value}
        onChange={props.onChange}
        className={`combo-box ${props.className}` }
        name={props.name}
        id=""
      >
        {
          [{id: 0, description: props.placeholder}, ...props.info].map((obj,i) =>
            <option hidden={i === 0}  key={i} value={obj.id}>{obj.description}</option>
          )
        }
      </select>
    </div>
  )
}

export default ComboBox
