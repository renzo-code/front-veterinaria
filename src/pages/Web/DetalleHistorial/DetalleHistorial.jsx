import React from 'react'
import './DetalleHistorialStyles.scss'
import Axios from 'axios'
import {withRouter} from 'react-router-dom'
import EstructuraDetalle from '../../../components/EstructuraDetalle/EstructuraDetalle'


class DetalleHistorial extends React.Component {
  state={
    dataDetalleHistorial : {},
  }

  componentDidMount(){
    this.obtenerHistorial()
  }

  obtenerHistorial = async () => {
    try{
      const historialObtenido = await Axios.get(`hhttps://veterinaria-renzo-neira.herokuapp.com/api/v1/historial/${this.props.match.params.id}`)
      console.log('historialObtenido',historialObtenido)
      this.setState({
        dataDetalleHistorial : historialObtenido.data.reply[0]
      })
    }
    catch(e){
      console.error(e)
    }
  }
  


  render(){
    console.log('props',this.state.dataDetalleHistorial.id_cita)
    return(
      <div>
        <div className="master-estructura">
          <h1 className="title-estructura-cita">DETALLE DE CITA</h1>
          <EstructuraDetalle
            title="Nº Cita :"
            detalle={this.state.dataDetalleHistorial.id_cita}
          />
          <EstructuraDetalle
            title="Fecha de Ingreso :"
            detalle={this.state.dataDetalleHistorial.fecha_ingreso}
          />
          <EstructuraDetalle
            title="Hora de Ingreso :"
            detalle={this.state.dataDetalleHistorial.time_ingreso}
          />
          <EstructuraDetalle
            title="Fecha de Salida :"
            detalle={this.state.dataDetalleHistorial.fecha_salida}
          />
          <EstructuraDetalle
            title="Hora de Salida :"
            detalle={this.state.dataDetalleHistorial.hora_salida}
          />
          <EstructuraDetalle
            title="Doctor a Cargo :"
            detalle={this.state.dataDetalleHistorial.nombre_doctor}
          />
          <EstructuraDetalle
            title="Observaciones:"
            detalle={this.state.dataDetalleHistorial.observaciones}
          />
        </div>
        <div className="sub-master-estructura">
          <h1 className="title-estructura-cita">DATOS DEL DUEÑO</h1>
          <EstructuraDetalle
            title="Nombre del Dueño :"
            detalle={this.state.dataDetalleHistorial.nombre_duenio}
          />
          <EstructuraDetalle 
            title="DNI :"
            detalle={this.state.dataDetalleHistorial.dni}
          />
          <EstructuraDetalle
            title="Telefono :"
            detalle={this.state.dataDetalleHistorial.telefono}
          />
          <EstructuraDetalle
            title="Email :"
            detalle={this.state.dataDetalleHistorial.email}
          />
        </div>
        <div className="sub-master-estructura">
          <h1 className="title-estructura-cita">DATOS DE LA MASCOTA</h1>
          <EstructuraDetalle
            title="Nombre de la mascota :"
            detalle={this.state.dataDetalleHistorial.nombre_mascota}
          />
            <EstructuraDetalle
              title="Tipo de Mascota :"
              detalle={this.state.dataDetalleHistorial.tipo}
            />
          <EstructuraDetalle
            title="Raza :"
            detalle={this.state.dataDetalleHistorial.raza}
          />
          <EstructuraDetalle
            title="Fecha de Registro :"
            detalle={this.state.dataDetalleHistorial.fecharegistromascota}
          />
        </div>
        
      </div>
    )
  }
}

export default withRouter(DetalleHistorial)
