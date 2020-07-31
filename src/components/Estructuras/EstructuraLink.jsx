import React from 'react'
import { Link } from 'react-router-dom'

const EstructuraLink = (props) => {
  return (
    <div>
      <Link to={props.to}>{props.name}</Link>
    </div>
  )
}

export default EstructuraLink
