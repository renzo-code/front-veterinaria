import React from 'react'
import Axios from 'axios'

import Tabla from '../../../components/Tablas/Tabla'
import Button from '../../../components/Button/Button'
import './configuracionStyle.scss'
import Editar from'../../../Images/editar.png'
import Delete from '../../../Images/delete.png'
import Modal from '../../../components/Modal/Modal'
import Input from '../../../components/Input/Input'

  const cabeceraTipoMascota = [
    "Código",
    "Tipo de Mascota",
    "",
    ""
  ]
  const cabeceraRaza = [
    "Código",
    "Tipo de Raza",
    "",
    ""
  ]
  const cabeceraEstado = [
    "Código",
    "Estado del Paciente",
    "",
    ""
  ]
  const cabeceraDoctor = [
    "Código",
    "Datos del Doctor",
    "",
    ""
  ]
class obtenerData extends React.Component{
  state={
    dataTipo: [],
    dataRaza: [],
    dataEstado: [],
    dataDoctor: [],
    mostrarModalTipo: false,
    mostrarModalRaza: false,
    mostrarModalEstado: false,
    mostrarModalDoctor: false,
    editarModalTipo: false,
    editarModalRaza: false,
    editarModalEstado: false,
    editarModalDoctor: false,
    tipo: '',
    raza: '',
    estado: '',
    doctor: '',
    itemEditar: {},
    
  }
  
  componentDidMount(){
    this.obtenerTipo()
    this.obtenerRaza()
    this.obtenerEstado()
    this.obtenerDoctor()
  }
  obtenerTipo = async () =>{
    try{
      const tipo = await Axios.get('http://localhost:8080/api/v1/tipo')
      // console.log(tipo.data.reply,'resp')
      this.formatearData(tipo,'id_tipo','dataTipo')
    }
    catch(e){
      console.error(e)
    }
  }

  formatearData = (respuesta, id, nombreEstado, descripcion = 'description') =>{
    const nuevoArreglo = respuesta.data.reply.map((obj) => {
      return {
        id: obj[id],
        description: obj[descripcion],
        
      }
    })
    this.setState({
      [nombreEstado]: nuevoArreglo,
    })
    // console.log(nuevoArreglo, 'hello')
  }
  
  obtenerRaza = async () =>{
    try{
      const raza = await Axios.get('http://localhost:8080/api/v1/raza')
      this.formatearData(raza,'id_raza','dataRaza')
      // console.log(raza,'raza otros')
    }
    catch(e){
      console.error(e)
    }
  }
  
  obtenerEstado = async () =>{
    try{
      const estado = await Axios.get('http://localhost:8080/api/v1/estado')
      this.formatearData(estado,'id_estado','dataEstado')
      // console.log(estado,'estado')
    }
    catch(e){
      console.error(e)
    }
  }
  
  obtenerDoctor = async () =>{
    try{
      const doctor = await Axios.get(`http://localhost:8080/api/v1/doctor`)
      this.formatearData(doctor,'id_doctor','dataDoctor','nombres_apellidos')
      console.log(doctor,'doc')
    }
    catch(e){
      console.error(e)
    }
  }
  
  cerrarModal = (estadoModal) => { 
    this.setState({
      [estadoModal]: false
    })
  }
  
  abrirModal = (estadoModal) =>{
    this.setState({
      [estadoModal]: true
    })
  }

  inputChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  crearDatosTipo = async () =>{
    try{
      const nuevoTipo = {
        "tipo" : this.state.tipo
      }
      const datosAlServicioTipo = await Axios.post('http://localhost:8080/api/v1/tipo', nuevoTipo)
      console.log(datosAlServicioTipo, 'datos')
    }
    catch(e){
      console.error(e);
    }
    this.cerrarModal('mostrarModalTipo')
    this.obtenerTipo()
    this.limpiarDatosCrear('tipo')
  }
  
  limpiarDatosCrear = (limpiarEstado) =>{
    this.setState({
      [limpiarEstado] : '',
    })
  }

  eliminarTipo = async (id) =>{
    try{
      const deleteTipo = await Axios.delete(`http://localhost:8080/api/v1/tipo/${id}` )
      console.log(deleteTipo, 'delete tipo')
      
    }
    catch(e){
      console.error(e);
    }
    this.obtenerTipo()
  }

  crearDatosRaza = async () =>{
    try{
      const nuevaRaza = {
        "raza": this.state.raza
      }
      const DatosAlServicioRaza = await Axios.post(`http://localhost:8080/api/v1/raza`, nuevaRaza)
      console.log(DatosAlServicioRaza,'DatosAlServicioRaza')
    }
    catch(e){
      console.error(e)
    }
    this.cerrarModal('mostrarModalRaza')
    this.obtenerRaza()
    this.limpiarDatosCrear('raza')
  }
  
  eliminarRaza = async (idRaza) =>{
    try{
      const deleteRaza = await Axios.delete(`http://localhost:8080/api/v1/raza/${idRaza}`)
      console.log(deleteRaza,'deleteRaza')
    }
    catch(e){
      console.error(e)
    }
    this.obtenerRaza()
  }
  
  crearEstado = async () =>{
    try{
      const nuevoEstado= {
        "estado": this.state.estado
      }
    const DatosAlServicioEstado = await Axios.post('http://localhost:8080/api/v1/estado', nuevoEstado)
    console.log(DatosAlServicioEstado,'DatosAlServicioEstado')
  }
  catch(e){
    console.error(e)
    }
    this.cerrarModal('mostrarModalEstado')
    this.obtenerEstado()
    this.limpiarDatosCrear('estado')
  }

  eliminarEstado = async (idEstado) =>{
    try{
      const deleteEstado = await Axios.delete(`http://localhost:8080/api/v1/estado/${idEstado}`)
      console.log(deleteEstado,'deleteEstado')
    }
    catch(e){
      console.error(e)
    }
    this.obtenerEstado()
  }
  
  crearDoctor = async () => {
    // console.log(this.state.dataTipo,'qwe')
    try{
      const nuevoDoctor = {
        "nombresApellidos": this.state.doctor
      }
      const datosAlServicioDoctor = await Axios.post('http://localhost:8080/api/v1/doctor', nuevoDoctor)
      console.log(datosAlServicioDoctor,'datosAlServicioDoctor')
    }
    catch(e){
      console.error(e)
    }
    this.cerrarModal('mostrarModalDoctor')
    this.obtenerDoctor()
    this.limpiarDatosCrear('doctor')
  }

  eliminarDoctor = async (idDoctor) => {
    try{
      const deleteDoctor = await Axios.delete(`http://localhost:8080/api/v1/doctor/${idDoctor}`)
      console.log(deleteDoctor,'deleteDoctor')
    }
    catch(e){
      console.error(e)
    }
    this.obtenerDoctor()
  }

  editarTipo = async () => {
    try{
      const modificarTipo = {
        "tipo" : this.state.itemEditar.description,
        "idTipo": this.state.itemEditar.id
      }
      const tipoEditado = await Axios.put(`http://localhost:8080/api/v1/tipo`, modificarTipo)
      console.log(tipoEditado,'tipoEditado')
    }
    catch(e){
      console.error(e)
    }
    this.cerrarModal('editarModalTipo')
    this.obtenerTipo()
  }
  
  mostrarEditarTipo = (itemTipo) =>{
    this.setState({
      itemEditar : itemTipo 
    })
    this.abrirModal('editarModalTipo')
  }
  
  mostrarEditarRaza = (itemRaza) => {
    this.setState({
      itemEditar : itemRaza
    })
    this.abrirModal('editarModalRaza')
  }

  editarRaza = async () =>{
    try{
      const modificarRaza = {
        "raza" : this.state.itemEditar.description,
        "idRaza": this.state.itemEditar.id
      }
      const razaEditada = await Axios.put(`http://localhost:8080/api/v1/raza`, modificarRaza)
      console.log(razaEditada,'razaEditada')
    }
    catch(e){
      console.error(e)
    }
    this.cerrarModal('editarModalRaza')
    this.obtenerRaza()
  }

  mostrarEditarEstado = (itemEstado) =>{
    this.setState({
      itemEditar : itemEstado
    })
    this.abrirModal('editarModalEstado')
  }

  editarEstado = async () => {
    try{
      const modificarEstado = {
        "estado": this.state.itemEditar.description,
        "idEstado": this.state.itemEditar.id
      }
      const estadoEditado = await Axios.put('http://localhost:8080/api/v1/estado', modificarEstado)
      console.log(estadoEditado,'estadoEditado')
    }
    catch(e){
      console.error(e)
    }
    this.cerrarModal('editarModalEstado')
    this.obtenerEstado()
  }
  
  mostrarEditarDoctor = (itemDoctor) => {
    this.setState({
      itemEditar : itemDoctor
    })
    this.abrirModal('editarModalDoctor')
  }

  editarDoctor = async () =>{
    try{
      const modificarDoctor = {
        "doctor" : this.state.itemEditar.description,
        "idDoctor" : this.state.itemEditar.id
      }
      const doctorEditado = await Axios.put('http://localhost:8080/api/v1/doctor', modificarDoctor)
      console.log(doctorEditado,'doctorEditado')
    }
    catch(e){
      console.error(e)
    }
    this.cerrarModal('editarModalDoctor')
    this.obtenerDoctor()
  }

  inputEditChange = (e) =>{
    this.setState({
      itemEditar: {
        ...this.state.itemEditar,
        description: e.target.value
      }
    })
  }

  

  render(){
    // console.log(this.state.itemEditarTipo,'itemEditarTipo')
    // console.log(this.state.tipo,'tipo')
    return(
      <div>
        <div>
          <div className="items-configuracion">
            <div>
              <Button onClick={()=>this.abrirModal('mostrarModalTipo')} className="config" name="Crear"/>
              <Tabla cabecera={cabeceraTipoMascota} dates={this.state.dataTipo}>
                {
                  this.state.dataTipo.map((item,i)=>{
                    return(
                      <tr key={i}>
                        <td className="item-tabla"> {item.id} </td>
                        <td className="item-tabla"> {item.description} </td>
                        <td
                          className="item-tabla"
                          onClick={() => this.mostrarEditarTipo(item)}
                        >
                          <img className="img" src={Editar} alt=""/>
                        </td>
                        <td
                          className="item-tabla"
                          onClick={() => this.eliminarTipo(item.id)}
                        >
                          <img className="img" src={Delete} alt=""/>
                        </td>
                      </tr>
                    )
                  })
                }
              </Tabla>
              <Modal
                className="middle"
                show={this.state.editarModalTipo}
                onClose={() => this.cerrarModal('editarModalTipo')}
                nameButton="Editar"
                onClick={this.editarTipo}
                >
                {
                  <div>
                    <h2 className="form-title" >EDITAR TIPO MASCOTA</h2>
                    <div className="form-input">
                      <Input 
                      value={this.state.itemEditar.description} 
                      titleInput="Mascota a Editar"
                      onChange={(e) => this.inputEditChange(e, 'itemEditar')}
                      />
                    </div>
                  </div>
                }
              </Modal>
              <Modal
                className="middle" 
                show={this.state.mostrarModalTipo} 
                onClose={() => {
                  this.cerrarModal('mostrarModalTipo')
                  this.limpiarDatosCrear('tipo')
                }}
                nameButton="Guardar"
                onClick={this.crearDatosTipo}
              >
                {
                  <div>
                    <h2 className="form-title">CREAR TIPO </h2>
                    <div className="form-input">
                      <Input 
                        onChange={this.inputChange} 
                        placeholder="Escribir aquí ..." 
                        titleInput="Tipo de Mascota :"
                        value={this.state.tipo}
                        name="tipo"
                      />
                    </div>
                  </div>
                }
              </Modal>
            </div>

            <div>
              <Button onClick={()=>this.abrirModal('mostrarModalRaza')} className="config" name="Crear"/>
              <Tabla cabecera={cabeceraRaza} dates={this.state.dataRaza}>
                {
                  this.state.dataRaza.map((item,i)=>{
                    return(
                      <tr key={i}>
                        <td className="item-tabla"> {item.id} </td>
                        <td className="item-tabla"> {item.description} </td>
                        <td className="item-tabla" 
                          onClick={() => this.mostrarEditarRaza(item)}
                        >
                          <img className="img" src={Editar} alt=""/> 
                        </td>
                        <td className="item-tabla" 
                          onClick={() => this.eliminarRaza(item.id)}
                        >
                          <img className="img" src={Delete} alt=""/> 
                        </td>
                      </tr>
                    )
                  })
                }
              </Tabla>
              <Modal
              className="middle"
              show={this.state.editarModalRaza}
              onClose={() => this.cerrarModal('editarModalRaza')}
              nameButton="Editar"
              onClick={this.editarRaza}
              >
                {
                  <div>
                    <h2 className="form-title">EDITAR RAZA</h2>
                    <div className="form-input">
                      <Input
                        value={this.state.itemEditar.description}
                        titleInput="Raza a Editar :"
                        onChange={(e) => this.inputEditChange(e,'itemEditar')}
                      />
                    </div>
                  </div>
                }
              </Modal>
              <Modal
                className="middle"
                show={this.state.mostrarModalRaza}
                onClose={() => {
                  this.cerrarModal('mostrarModalRaza')
                  this.limpiarDatosCrear('raza')
                }}
                nameButton="Guardar"
                onClick={this.crearDatosRaza}
              >
                {
                  <div>
                    <h2 className="form-title">CREAR RAZA</h2>
                    <div className="form-input">
                      <Input
                        onChange={this.inputChange}
                        titleInput="Tipo de Raza :"
                        placeholder="Escribir aquí..."
                        value={this.state.raza}
                        name="raza"
                      />
                    </div>
                  </div>
                }
              </Modal>
            </div>
          </div>

          <div className="items-configuracion">
            <div>
              <Button onClick={() => this.abrirModal('mostrarModalEstado')} className="config" name="Crear"/>
              <Tabla cabecera={cabeceraEstado} dates={this.state.dataEstado}>
                {
                  this.state.dataEstado.map((item,i)=>{
                    return(
                      <tr key={i}>
                        <td className="item-tabla"> {item.id} </td>
                        <td className="item-tabla"> {item.description} </td>
                        <td className="item-tabla"
                          onClick={()=>this.mostrarEditarEstado(item)}
                        > 
                          <img className="img" src={Editar} alt=""/> 
                        </td>
                        <td className="item-tabla" 
                          onClick={() => this.eliminarEstado(item.id)} 
                        > 
                          <img className="img" src={Delete} alt=""/> 
                        </td>
                      </tr>
                    )
                  })
                }
              </Tabla>
              <Modal
              show={this.state.editarModalEstado}
              onClose={() => this.cerrarModal('editarModalEstado')}
              nameButton="Editar"
              className="middle"
              onClick={this.editarEstado}
              >
                <div>
                  <h2 className="form-title">EDITAR ESTADO</h2>
                  <div className="form-input">
                    <Input
                      value={this.state.itemEditar.description}
                      titleInput="Edite Estado del Paciente :"
                      onChange={(e)=> this.inputEditChange(e, 'itemEditar')}
                    />
                  </div>
                </div>
              </Modal>
              <Modal
                className="middle"
                show={this.state.mostrarModalEstado}
                onClose={() => {
                  this.cerrarModal('mostrarModalEstado')
                  this.limpiarDatosCrear('estado')
                }}
                nameButton="Guardar"
                onClick={this.crearEstado}
              >
              {
                <div>
                  <h2 className="form-title">CREAR ESTADO</h2>
                  <div className="form-input">
                    <Input
                      titleInput="Nuevo estado del Paciente :"
                      placeholder="Escribir Aquí..."
                      onChange={this.inputChange}
                      value={this.state.estado}
                      name="estado"
                    />
                  </div>
                </div>
              }
              </Modal>
            </div>

            <div>
              <Button onClick={() => this.abrirModal('mostrarModalDoctor')} className="config" name="Crear"/>
              <Tabla cabecera={cabeceraDoctor} dates={this.state.dataDoctor}>
                {
                  this.state.dataDoctor.map((item,i)=>{
                    return(
                      <tr key={i}>
                        <td className="item-tabla"> {item.id} </td>
                        <td className="item-tabla"> {item.description} </td>
                        <td className="item-tabla"
                          onClick={()=>this.mostrarEditarDoctor(item)}
                        > 
                          <img className="img" src={Editar} alt=""/>
                        </td>
                        <td className="item-tabla" 
                          onClick={() => this.eliminarDoctor(item.id)} 
                        > 
                          <img className="img" src={Delete} alt=""/> 
                        </td>
                      </tr>
                    )
                  })
                }
              </Tabla>
              <Modal
              className="middle"
              show={this.state.editarModalDoctor}
              onClose={() => this.cerrarModal('editarModalDoctor')}
              nameButton="Editar"
              onClick={this.editarDoctor}
              >
                <div>
                  <h2 className="form-title">EDITAR DATOS DEL DOCTOR</h2>
                  <div className="form-input">
                    <Input
                      titleInput="Edite los Datos del Doctor :"
                      value={this.state.itemEditar.description}
                      onChange={(e)=> this.inputEditChange(e,'ItemEditar')}
                    />
                  </div>
                </div>
              </Modal>
              <Modal
                className="middle"
                show={this.state.mostrarModalDoctor}
                nameButton="Guardar"
                onClose={() => {
                  this.cerrarModal('mostrarModalDoctor')
                  this.limpiarDatosCrear('doctor')
                }}
                onClick={this.crearDoctor}
              >
              {
                <div>
                  <h2 className="form-title">CREAR NUEVO DOCTOR </h2>
                  <div className="form-input">
                    <Input
                    titleInput="Datos del Doctor :"
                    placeholder= "Escribir Aquí..."
                    onChange={this.inputChange}
                    name="doctor"
                    value={this.state.doctor}
                    />
                  </div>
                </div>
              }
              </Modal>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default obtenerData