import React from 'react'

import EstructuraLink from '../../components/Links/EstructuraLink'
import './style.scss'

const Sidebar = () => { 
  return (
    <div className="l-sidebar">
      <EstructuraLink to="/mascota" name='Mascotas' />  
      <EstructuraLink to="/historial" name="Historial"/> 
      <EstructuraLink to="/configuracion" name="Configuración"/>
      <EstructuraLink to="/contacto" name="Contacto"/>
      <EstructuraLink to="/home" name="Home"/>
    </div>
    )
  }

export default Sidebar
