import React from 'react'

import EstructuraLink from '../../components/Estructuras/EstructuraLink'
import './style.scss'

const Sidebar = () => { 
  return (
    <div className="l-sidebar">
      <EstructuraLink className="link-sidebar" to="/home" name="Home"/>
      <EstructuraLink to="/mascota" name='Mascotas' />  
      <EstructuraLink to="/historial" name="Historial"/> 
      <EstructuraLink to="/configuracion" name="Configuración"/>
      <EstructuraLink to="/contacto" name="Contacto"/>
      <EstructuraLink to="/citas" name="Citas " />
    </div>
    )
  }

export default Sidebar
