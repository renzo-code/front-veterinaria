import React from 'react'
import './BlockesStyle.scss'



const Blockes = (props) =>{
  return(
    <div className="master-block">
      <div className="block">
        <img className="image-block" src={props.src} alt=""/>
        <h2 className="title-block">{props.titleBlock}</h2>
        <p className="parrafo-block">{props.parrafoBlock}</p>
        
      </div>
    </div>
  )
}

export default Blockes 