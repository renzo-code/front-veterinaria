import React from 'react'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import ComboBox from '../../../components/ComboBox/ComboBox'
import Modal from '../../../components/Modal/Modal'
import './Mascotas.scss'
import Axios from 'axios'


class Mascotas extends React.Component {
  state= {
    servicioTipo : [],
    servicioRaza : [],
    estadoModalDuenio : false,

    servicioDuenio : [],
    nombresApellidos : '',
    email : '',
    dni : '',
    telefono : '',
    direccion : '',
    
    nombreMascota : '',
    servicioMascota: [],
    selectedTipo : 0,
    selectedRaza : 0,
    selectedDuenio : 0,
  }

componentDidMount(){
  this.obtenerdataTipo()
  this.obtenerDataRaza()
  this.obtenerDuenio()
}

  obtenerdataTipo = async () => {
    try{
      const dataTipo = await Axios.get('http://localhost:8080/api/v1/tipo')
      console.log(dataTipo,'dataTipo')
      this.formatearData(dataTipo, 'id_tipo','servicioTipo')
    }
    catch(e){
      console.error(e)
    }
  }

  obtenerDataRaza = async () =>{
  try{
      const dataRaza = await Axios.get('http://localhost:8080/api/v1/raza')
      console.log(dataRaza,'dataRaza')
      this.formatearData(dataRaza,'id_raza','servicioRaza')
    }
  catch(e){
    console.error(e)
    }
  }

  formatearData = (respuesta, id, estado, descripcion = 'description') => {
  const reset = respuesta.data.reply.map((item)=>{
    return{
      id : item[id],
      description : item[descripcion]
    }
  })
  this.setState({
    [estado] : reset
  })
  // console.log(reset,'reset')
}

  inputChange = (e) => {
    // console.log('inputChange', e.target.value)
    this.setState({
      [e.target.name] : e.target.value
    })
    console.log(e.target.value, 'ss')
  }

  abrirModal = (estadoModal) =>{
    this.setState({
      [estadoModal] : true 
    })
  }

  cerrarModal = (estadoModal) => {
    this.setState({
      [estadoModal] : false 
    })
  }

  crearDuenio = async () =>{
    try{
      const nuevoDuenio = {
        "nombresApellidos" : this.state.nombresApellidos,
        "email" : this.state.email,
        "dni" : this.state.dni,
        "telefono" : this.state.telefono,
        "direccion" : this.state.direccion
        }
      const duenioCreado = await Axios.post(`http://localhost:8080/api/v1/duenio`,nuevoDuenio)
      console.log(duenioCreado,'nuevoDuenio')
    }
    catch(e){
      console.error(e)
    }
    this.cerrarModal('estadoModalDuenio')
    this.obtenerDuenio()
    this.limpiarEstadoDuenio()
  }

  obtenerDuenio = async () =>{
    try{
      const duenioObtenido = await Axios.get(`http://localhost:8080/api/v1/duenio`)
      console.log(duenioObtenido,'duenioObtenido')
      this.formatearData(duenioObtenido,'id_duenio','servicioDuenio','nombres_apellidos')
      }
    catch(e){
      console.error(e)
    }
  }
  
crearMascota = async () =>{
  try{
    const nuevaMascota = {
      "nombre": this.state.nombreMascota,
      "idDuenio": parseInt(this.state.selectedDuenio),
      "raza": parseInt(this.state.selectedRaza),
      "tipo": parseInt(this.state.selectedTipo) 
      }
    const mascotaCreada = await Axios.post(`http://localhost:8080/api/v1/mascota`, nuevaMascota)
    console.log('mascotaCreada',mascotaCreada)
  }
  catch(e){
    console.error(e)
    }
    this.limpiarEstadoMascota()
  }

  limpiarEstadoMascota = () => {
    this.setState({
      nombreMascota : '',
      selectedTipo : 0,
      selectedRaza : 0,
      selectedDuenio : 0
    })
  }

  limpiarEstadoDuenio = () =>{
    this.setState({
      nombresApellidos : '',
      email : '',
      dni : '',
      telefono : '',
      direccion : ''
    })
  }

  // comboBoxChange = (e,obj) => {
  //   console.log('comboBoxChange', e?.target.value, e?.target.name)
  // }

  render() {
    // console.log(this.state.servicioDuenio,'servicioDuenio')
    // console.log(this.state.servicioTipo)
    return(
      <div>
      <div className="form-registro">
        <div className="container-form">
          <Button 
            className="btn-duenio" 
            onClick={() => this.abrirModal('estadoModalDuenio')} 
            name="Registar Dueño"
          />
          <h2 className="registrar-mascota">REGISTRAR MASCOTA</h2>
          <Input
            placeholder="Nombre de la Mascota"
            titleInput="Complete datos de la Mascota :"
            onChange={this.inputChange}
            name="nombreMascota"
            value={this.state.nombreMascota}
          />
          <ComboBox
            name="selectedTipo"
            placeholder="Seleccionar tipo"
            onChange={this.inputChange} 
            info={this.state.servicioTipo}
            title="Escoja un tipo de Mascota"
            value={this.state.selectedTipo}
            
          />
          <ComboBox
            name="selectedRaza"
            placeholder="Seleccionar raza"
            onChange={this.inputChange}
            info={this.state.servicioRaza}
            title="Escoja una Raza"
            value={this.state.selectedRaza}
            
          />
          <ComboBox
            name="selectedDuenio"
            placeholder="Seleccionar dueño"
            onChange={this.inputChange}
            info={this.state.servicioDuenio}
            title="Elija Dueño"
            value={this.state.selectedDuenio}
            
          />
          <div className="container-btn-form">
            <Button 
              className="btn-limpiar" 
              name="Limpiar"
            />
            <Button 
              className="btn-registrar-mascota" 
              onClick={this.crearMascota} 
              name="Registrar Mascota"
            />
          </div>
        </div>
          <Modal
            className="middle"
            show={this.state.estadoModalDuenio}
            onClose={() => this.cerrarModal('estadoModalDuenio')}
            nameButton="Registrar"
            onClick={this.crearDuenio}
          >
          <div>
            <h2 className="form-title">REGISTRAR DUEÑO</h2>
            <div className="input-duenio">
              <Input
                onChange={this.inputChange}
                value={this.state.nombresApellidos}
                name="nombresApellidos"
                titleInput="Complete sus Datos : " 
                placeholder="Nombres y Apellidos" 
              />
              <Input 
                onChange={this.inputChange}
                value={this.state.email}
                name="email"
                titleInput="Escriba su Email" 
                placeholder="Ingrese su Email"
                />
              <Input 
                onChange={this.inputChange}
                value={this.state.dni}
                name="dni"
                titleInput="Ingrese su DNI" 
                placeholder="DNI"
                />
              <Input
                onChange={this.inputChange}
                value={this.state.telefono}
                name="telefono"
                titleInput="Nro Telefónico" 
                placeholder="Telefono"
                />
              <Input 
                onChange={this.inputChange}
                value={this.state.direccion}
                name="direccion"
                titleInput="Ingrese su Dirección" 
                placeholder="Dirección"
              />
            </div>
          </div>
        </Modal>
      </div>
    </div>
    )
  }
}
export default Mascotas
