import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from '../../layout'
import Home from './Home/Home'
import Otros from './Otros/Otros'
import Mascotas from './Mascotas/Mascotas'
import Historial from './Historial/Historial'
import Configuracion from './Configuracion/Configuracion'
import Contacto from './Contacto/Contacto'

const Pages = () => {
  return (
    <Layout>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/home" />}
        />
        <Route path="/home" component={Home} />
        <Route path="/otros" component={Otros} />
        <Route path="/mascota" component={Mascotas} />
        <Route path="/historial" component={Historial}/>
        <Route path="/configuracion" component={Configuracion}/>
        <Route path="/contacto" component={Contacto}/>
      </Switch>
    </Layout>
  )
}

export default Pages
//mascotas/historial/configuracion/contacto/Otros