import React from 'react'

import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
// import Body from './Body/index'

import './style.scss'

const Layout = (props) => {
  return (
    <>
    <Header />
      <div className="l-content">
        <Sidebar />
        <div className="l-body">
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Layout
