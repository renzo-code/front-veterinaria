import React from 'react'
import './TablaStyle.scss'

const Tabla = (props) => {
  return(
    <table className="tabla" >
      <thead>
        <tr>
          {
            props.cabecera.map((item,i)=>{
              return <th key={i} className="c-item">{item}</th>
            })
          }
        </tr>
      </thead>
      <tbody>
          {/* {
            props.dates.map((obj,i)=>{
              return(
                <tr key={i}>
                  <td className="tabla-item">{obj.id}</td>
                  <td className="tabla-item">{obj.description}</td>
                </tr>
              )
            })
          } */}
          {props.children}
        </tbody>
    </table>
  )
}

export default Tabla