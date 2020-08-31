import React from 'react'
import './EstructuraDetalleStyles.scss'


const EstructuraDetalle = (props) => {
  return(
    <div className="estructura-detalle">
      <h2>{props.title}</h2>
      <div>
        <h2 className="detalle">{props.detalle}</h2>
      </div>
    </div>
  )
}

export default EstructuraDetalle

//datos del dueño
//datos de la mascota
//detalle de cita