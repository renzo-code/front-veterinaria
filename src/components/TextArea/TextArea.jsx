import React from 'react'
import './TextAreaStyles.scss'

const TextArea = (props) => {
  return(
    <div className="master-textarea">
        <p className="text-area-title">{props.title}</p>
      <div>
        <textarea
          className={`text-area ${props.className}` }
          cols="30" 
          rows="10"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        >
        </textarea>
      </div>
    </div>
  )
}

export default TextArea