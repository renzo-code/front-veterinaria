import React from 'react'
import './TextAreaStyles.scss'

const TextArea = (props) => {
  return(
    <div className="master-textarea">
        <p className="text-area-title">Tú mensaje*</p>
      <div>
        <textarea
          className="text-area" 
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