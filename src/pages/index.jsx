import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Web from './Web/Web'

const Pages = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Web} />
      </Switch>
    </BrowserRouter>
  )
}

export default Pages
