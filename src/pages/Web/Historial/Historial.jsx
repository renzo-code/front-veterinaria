import React from 'react'
import { withRouter } from 'react-router-dom'
import './HistorialStyles.scss'
import Tabla from '../../../components/Tablas/Tabla'
import Axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard} from '@fortawesome/free-solid-svg-icons'

const cabeceraHistorial = [ 
    "Nº",
    "Dueño",
    "Mascota",
    "Doctor",
    "Fecha de Ingreso",
    "Hora de Ingreso",
    "Fecha de Salida",
    "Hora de Salida",
    "Estado",
    "Observaciones"
  ]


class Historial extends React.Component{
  state={
    dataHistorial : [],
  }

componentDidMount(){
  this.obtenerHistorial()
}

  obtenerHistorial = async () => {
    try{
      const historialObtenido = await Axios.get('https://veterinaria-renzo-neira.herokuapp.com/api/v1/historial')
      this.setState({
        dataHistorial : historialObtenido.data.reply
      })
    }
    catch(e){
      console.error(e)
    }
  }

  redireccionar = (item) => {
    this.props.history.push(`/historial/detalle/${item.id_cita}`)
  }

  render(){
    console.log('this.props', this.props)
    return(
    <div>
      <div className="historial-master">
        <h1 className="title-cita">HISTORIAL DE SERVICIOS </h1>
      </div>
      <div className="tabla-master">
        <Tabla
          cabecera={cabeceraHistorial}
          dates={this.state.dataHistorial}
        >
          {
            this.state.dataHistorial.map((item,i)=>{
              return(
                <tr key={i}>
                  <td className="item-table">{item.id_cita}</td>
                  <td 
                    onClick={()=> this.redireccionar(item)}
                    className="item-table"
                  >
                    {item.nombre_duenio}
                  </td>
                  <td className="item-table">{item.nombre_mascota}</td>
                  <td className="item-table">{item.nombre_doctor}</td>
                  <td className="item-table">{item.fecha_ingreso.substring(0,10)}</td>
                  <td className="item-table">{item.time_ingreso.substring(0,8)}</td>
                  <td className="item-table">{item.fecha_salida.substring(0,10)}</td>
                  <td className="item-table">{item.hora_salida}</td>
                  <td className="item-table">{item.estado}</td>
                  <td className="item-table">
                    <div className="observacion-style">
                      <FontAwesomeIcon icon={faClipboard} />
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </Tabla>
      </div>
    </div>
    )
  }
}
export default withRouter(Historial)
