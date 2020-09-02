import React from 'react'
import Axios from 'axios'
import './CitasStyles.scss'
import TextArea from '../../../components/TextArea/TextArea'
import Button from '../../../components/Button/Button'
import ComboBox from '../../../components/ComboBox/ComboBox'
import Modal from '../../../components/Modal/Modal'
import Tabla from '../../../components/Tablas/Tabla'
import {withRouter} from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboard, faUserEdit} from '@fortawesome/free-solid-svg-icons'
// import {} from '@fortawesome/free-brands-svg-icons'

const cabeceraCitas = [
  "Nº Cita",
  "Dueño",
  "Mascota",
  "Doctor",
  "Fecha de Ingreso",
  "Hora de Ingreso",
  "Fecha de Salida",
  "Hora de Salida",
  "Estado",
  "Observación",
  ""
]


class Citas extends React.Component {
  state = {
    datosDuenio : [],
    selectedDuenio: null,
    datosMascota : [],
    selectedMascota : null,
    fechaSalida : '',
    horaSalida : '',
    datosDoctor : [],
    selectedDoctor : null,
    datosEstado : [],
    selectedEstado : null,
    observaciones : '',
    modalObservacionCitas : false,
    datosCitas : [],
    guardarItemObs : '',
    modalEditarCitas : false,
    itemEditar : [],
  }

  componentDidMount(){
    this.obtenerDuenio()
    this.obtenerMascota()
    this.obtenerDoctor()
    this.obtenerEstado()
    this.obtenerCitas()
  }

  inputEditChange = (e) => {
    this.setState({
      itemEditar : {
        ...this.state.itemEditar,
        [e.target.name] : e.target.value
      }
    })
  }

  inputChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
    console.log(e.target.value, 'inputs')
  }

  formatearData = (respuesta,id,estado, description = 'description') => {
    const reset = respuesta.data.reply.map((item)=>{
      return{
        id : item[id],
        description : item[description]
      }
    })
    this.setState({
      [estado] : reset
    })
  }

  obtenerDuenio = async () =>{
    try{
      const duenioObtenido = await Axios.get('http://localhost:8080/api/v1/duenio')
      console.log(duenioObtenido,'duenioObtenido')
      this.formatearData(duenioObtenido, 'id_duenio','datosDuenio' ,'nombres_apellidos')
    }
    catch(e){
      console.error(e)
    }
  }

  obtenerMascota = async () => {
    try{
      const mascotaObtenida = await Axios.get('http://localhost:8080/api/v1/mascota')
      console.log(mascotaObtenida,'mascotaObtenida')
      this.formatearData(mascotaObtenida,'id_mascota','datosMascota','nombre')
    }
    catch(e){
      console.error(e)
    }
  }

  obtenerDoctor = async () => {
    try{
      const doctorObtenido = await Axios.get('http://localhost:8080/api/v1/doctor')
      console.log(doctorObtenido,'doctorObtenido')
      this.formatearData(doctorObtenido, 'id_doctor', 'datosDoctor', 'nombres_apellidos')
    }
    catch(e){
      console.error(e)
    }
  }

  obtenerEstado = async () => {
    try{
      const estadoObtenido = await Axios.get('http://localhost:8080/api/v1/estado')
      console.log(estadoObtenido,'estadoObtenido')
      this.formatearData(estadoObtenido,'id_estado', 'datosEstado')
    }
    catch(e){
      console.error(e)
    }
  }

  crearCita = async () => {
    const {
      selectedDuenio,
      selectedMascota,
      selectedDoctor,
      observaciones,
      selectedEstado
    } = this.state
    try{
      const nuevaCita = {
        "idDuenio" : parseInt(selectedDuenio),
        "idMascota" : parseInt(selectedMascota),
        "idDoctor" : parseInt(selectedDoctor),
        "observaciones" : observaciones,
        "idEstado" : parseInt(selectedEstado)
      }
      const citaCreada = await Axios.post(`http://localhost:8080/api/v1/cita`, nuevaCita)
      console.log(citaCreada, 'citaCreada')
    }
    catch(e){
      console.error(e)
    }
    this.limpiarFormulario()
    this.obtenerCitas()
  }

  limpiarFormulario = () => {
    this.setState({
      selectedDuenio : '',
      selectedMascota : '',
      selectedDoctor : '',
      observaciones : '',
      selectedEstado : ''
    })
  }

  abrirModal = (estadoModal) => {
    this.setState({
      [estadoModal] : true
    })
  }
  cerrarModal = (estadoModal) => {
    this.setState({
      [estadoModal] : false
    })
  }

  obtenerCitas = async () => {
    try{
      const citasObtenidas = await Axios.get(`http://localhost:8080/api/v1/cita`)
      console.log(citasObtenidas,'citasObtenidas')
      this.setState({
        datosCitas : citasObtenidas.data.reply
      })
    }
    catch(e){
      console.error(e)
    }
  }
  
  obtenerItem = (item) =>{
    this.setState({
      guardarItemObs : item
    })
    this.abrirModal('modalObservacionCitas')
  }

  editarCitas = async () => {
    const {
      itemEditar: {
        id_cita,
        id_doctor,
        observaciones,
        id_estado,
        fecha_salida,
        hora_salida
      }
    } = this.state
    try{
      const modificarCita = {
        "idCita" : parseInt(id_cita),
        "idDoctor" : parseInt(id_doctor),
        "observaciones" : observaciones,
        "idEstado" : parseInt(id_estado),
        "fechaSalida" : fecha_salida,
        "horaSalida" : hora_salida,
      }
      const citaEditada = await Axios.put(`http://localhost:8080/api/v1/cita`, modificarCita)
      console.log(citaEditada,'citaEditada')
    }
    catch(e){
      console.error(e)
    }
    this.obtenerCitas()
  }

  mostrarDatosParaEditar = (dataEditar) => {
    this.setState({
      itemEditar : dataEditar
    })
    this.abrirModal('modalEditarCitas')
  }

  redireccionar = (item) => {
    this.props.history.push(`/citas/detalle/${item.id_cita}`)
  }

  render(){
    console.log('props',this.props)
    // console.log(this.state.itemEditar,'obs')
    // console.log(this.state.estadoObtenido,'asd')
    return(
      <div>
        <div className="formn-citas">
          <h1 className="title-cita">NUEVA CITA</h1>
          <ComboBox
            onChange={this.inputChange}
            info={this.state.datosDuenio}
            name="selectedDuenio"
            value={this.state.selectedDuenio}
            placeholder="Seleccione un dueño"
            title="Datos del Dueño :"
          />
          <ComboBox
            onChange={this.inputChange}
            info={this.state.datosMascota}
            name="selectedMascota"
            placeholder="Seleccione la mascota"
            value={this.state.selectedMascota}
            title="Nombre de la mascota :"
          />
          <ComboBox
            onChange={this.inputChange}
            info={this.state.datosDoctor}
            name="selectedDoctor"
            value={this.state.selectedDoctor}
            title="Doctor a cargo :"
            placeholder="Seleccione un Doctor"
          />
          <ComboBox
            onChange={this.inputChange}
            info={this.state.datosEstado}
            value={this.state.selectedEstado}
            name="selectedEstado"
            title="Estado de la mascota :"
            placeholder="Seleccione un Estado"
          />
          <div className="text-area-cita">
            <TextArea
              name="observaciones"
              value={this.state.observaciones}
              onChange={this.inputChange}
              title="Observaciones :"
            />
          </div>
        </div>
          <div className="form-cita-btn">
            <Button
              className="btn-crear-cita"
              name="Crear Nueva Cita"
              onClick={this.crearCita}
            />
          </div>
          <div className="tabla-master">
            <Tabla
              cabecera={cabeceraCitas} 
              dates={this.state.datosCitas}
            >
              {
                this.state.datosCitas.map((item, i)=>{
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
                      <td className="item-table">{item.fecha_salida}</td>
                      <td className="item-table">{item.hora_salida}</td>
                      <td 
                        className="item-table"
                        >
                        {item.estado}
                      </td>
                      <td
                        className="item-table"
                        onClick={()=> this.obtenerItem(item)}
                      >
                        <div className="observacion-style">
                          <FontAwesomeIcon icon={faClipboard}/>
                        </div>
                      </td>
                      <td
                        onClick={()=> this.mostrarDatosParaEditar(item)}
                      >
                        <div className="btn-editar-citas">
                          <FontAwesomeIcon icon={faUserEdit} />
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </Tabla>
            <Modal
              className="middle"
              show={this.state.modalObservacionCitas}
              hideButtonCancel={true}
              nameButton="Cerrar"
              onClick={()=> this.cerrarModal('modalObservacionCitas')}
            >
              {
                <tr>
                  <td className="obs-modal">
                    {this.state.guardarItemObs.observaciones}
                  </td>
                </tr>
              }
            </Modal>
            <Modal
              className="middle"
              show={this.state.modalEditarCitas}
              nameButton="Guardar Cambios"
              onClose={()=> this.cerrarModal('modalEditarCitas')}
              onClick={this.editarCitas}
            >
              {
                <div>
                  <h1 className="title-edit-cita">Editar Cita</h1>
                  <div>
                    <ComboBox
                      title="Editar Doctor :"
                      info={this.state.datosDoctor}
                      name="id_doctor"
                      value={this.state.itemEditar.id_doctor}
                      onChange={(e)=> this.inputEditChange(e,'id_doctor')}
                    />
                    <label className="fecha-edit-title">Hora y fecha de Salida :</label>
                    <input
                      className="fecha-salida"
                      type="date" id="start"
                      name="fecha_salida"
                      min="2019-01-01" max="2022-01-01"
                      value={this.state.itemEditar.fecha_salida}
                      onChange={this.inputEditChange}
                    />
                    <input 
                      className="fecha-salida"
                      type="time"
                      name="hora_salida"
                      id="time"
                      value={this.state.itemEditar.hora_salida}
                      onChange={this.inputEditChange}
                    />
                    <ComboBox
                      className="combo-estado-editar"
                      title="Editar Estado :"
                      info={this.state.datosEstado}
                      name="id_estado"
                      value={this.state.itemEditar.id_estado}
                      onChange={(e)=> this.inputEditChange(e,'datosEstado')}
                    />
                    <TextArea
                      title="Observación :"
                      className="textarea-editar-cita"
                      value={this.state.itemEditar.observaciones}
                      name="observaciones"
                      onChange={(e)=>this.inputEditChange(e,'observaciones')}
                    />
                  </div>
                </div>
              }
            </Modal>
      </div>
          </div>
    )
  }
}

export default withRouter(Citas)
//dueño, mascota, fecha de ingreso, fecha de salida , doctor , observaciones