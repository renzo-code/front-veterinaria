import React from 'react'
import './DetalleCitaStyles.scss'
import Axios from 'axios'
import EstructuraDetalle from '../../../components/EstructuraDetalle/EstructuraDetalle'
import {withRouter} from 'react-router-dom'


class DetalleCita extends React.Component {
  state = {
    dataCitas : []
  }

  componentDidMount(){
    this.obtenerCitas()
  }

  obtenerCitas = async () => {
    try{
      const citasObtenidas = await Axios.get(`http://localhost:8080/api/v1/cita/${this.props.match.params.id}`)
      this.setState({
        dataCitas : citasObtenidas.data.reply[0]
      })
    }
    catch(e){
      console.error(e)
    }
  }
  
  render(){
    console.log('citaObtenida',this.state.dataCitas)
    // console.log('props', this.props.match.params.id)
    return(
      <div>
        <div className="master-estructura">
          <h1 className="title-estructura-cita">DETALLE DE CITA</h1>
          <EstructuraDetalle
            title="Nº Cita"
            detalle={this.state.dataCitas.id_cita}
          />
          <EstructuraDetalle
            title="Datos del Dueño :"
            detalle={this.state.dataCitas.nombre_duenio}
          />
          <EstructuraDetalle
            title="Nombre de la Mascota :"
            detalle={this.state.dataCitas.nombre_mascota}
          />
          <EstructuraDetalle
            title="Datos del Doctor :"
            detalle={this.state.dataCitas.nombre_doctor}
          />
          <EstructuraDetalle
            title="Fecha de Ingreso :"
            detalle={this.state.dataCitas.fecha_ingreso}
          />
          <EstructuraDetalle
            title="Hora de Ingreso :"
            detalle={this.state.dataCitas.time_ingreso}
          />
          <EstructuraDetalle
            title="Estado :"
            detalle={this.state.dataCitas.estado}
          />
          <EstructuraDetalle
            title="Observaciones:"
            detalle={this.state.dataCitas.observaciones}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(DetalleCita)