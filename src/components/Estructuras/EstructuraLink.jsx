import React from 'react'
import { Link } from 'react-router-dom'
import './EstructuraLinkStyle.scss'

const EstructuraLink = (props) => {
  return (
    <div>
      <Link className={`link-sidebar`} to={props.to}>{props.name}</Link>
    </div>
  )
}

export default EstructuraLink
