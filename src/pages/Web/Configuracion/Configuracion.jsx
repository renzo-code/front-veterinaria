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
    mostrarModal: false
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
      // console.log(tipo,'resp')
      this.formatearData(tipo,'id_tipo','dataTipo')
    }
    catch(e){
      console.error(e)
    }
  }

  formatearData = (respuesta, id, nombreEstado, descripcion = 'description') =>{
    // console.log(respuesta, 'tipo')
    const nuevoArreglo = respuesta.data.reply.map((obj) => {
      return {
        id: obj[id],
        description: obj[descripcion]
      }
    })
    this.setState({
      [nombreEstado]: nuevoArreglo,
    })
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

  cerrarModal = () =>{
    this.setState({
      mostrarModal: false
    })
  }

  abrirModal = () =>{
    this.setState({
      mostrarModal: true
    })
  }

  render(){
    // console.log(this.state.dataDoctor,'doctor')
    return(
      <div>
        <div className="tablas-configuracion">
          <div className="items-configuracion">
            <div>
              <Button onClick={this.abrirModal} className="config" name="Crear"/>
              <Tabla cabecera={cabeceraTipoMascota} dates={this.state.dataTipo}>
                {
                  this.state.dataTipo.map((item,i)=>{
                    return(
                      <tr key={i}>
                        <td className="item-tabla"> {item.id} </td>
                        <td className="item-tabla"> {item.description} </td>
                        <td className="item-tabla"> <img className="img" src={Editar} alt=""/> </td>
                        <td className="item-tabla"> <img className="img" src={Delete} alt=""/> </td>
                      </tr>
                    )
                  })
                }
              </Tabla>
              <Modal
                className="middle" 
                show={this.state.mostrarModal} 
                onClose={this.cerrarModal}
                nameButton="Guardar"
              >
                {
                  <div>
                    <h2 className="form-title">CREAR TIPO </h2>
                    <div className="form-input">
                      <Input placeholder="Escribir aquí ..." titleInput="Tipo de Mascota :"/>
                    </div>
                  </div>
                }
              </Modal>
            </div>
            <div>
              <Button className="config" name="Crear"/>
              <Tabla cabecera={cabeceraRaza} dates={this.state.dataRaza}>
                {
                  this.state.dataRaza.map((item,i)=>{
                    return(
                      <tr key={i}>
                        <td className="item-tabla"> {item.id} </td>
                        <td className="item-tabla"> {item.description} </td>
                        <td className="item-tabla"> <img className="img" src={Editar} alt=""/> </td>
                        <td className="item-tabla"> <img className="img" src={Delete} alt=""/> </td>
                      </tr>
                    )
                  })
                }
              </Tabla>
            </div>
          </div>
          <div className="items-configuracion">
            <div>
              <Button className="config" name="Crear"/>
              <Tabla cabecera={cabeceraEstado} dates={this.state.dataEstado}>
                {
                  this.state.dataEstado.map((item,i)=>{
                    return(
                      <tr key={i}>
                        <td className="item-tabla"> {item.id} </td>
                        <td className="item-tabla"> {item.description} </td>
                        <td className="item-tabla"> <img className="img" src={Editar} alt=""/> </td>
                        <td className="item-tabla"> <img className="img" src={Delete} alt=""/> </td>
                      </tr>
                    )
                  })
                }
              </Tabla>
            </div>
            <div>
              <Button className="config" name="Crear"/>
              <Tabla cabecera={cabeceraDoctor} dates={this.state.dataDoctor}>
                {
                  this.state.dataDoctor.map((item,i)=>{
                    return(
                      <tr key={i}>
                        <td className="item-tabla"> {item.id} </td>
                        <td className="item-tabla"> {item.description} </td>
                        <td className="item-tabla"> <img className="img" src={Editar} alt=""/> </td>
                        <td className="item-tabla"> <img className="img" src={Delete} alt=""/> </td>
                      </tr>
                    )
                  })
                }
              </Tabla>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default obtenerData