import React from 'react'
import Axios from 'axios'
import Tabla from '../../../components/Tablas/Tabla'

  const cabeceraTipoMascota = [
    "Código",
    "Tipo de Mascota"
  ]
  const cabeceraRaza = [
    "Código",
    "Tipo de Raza"
  ]
  const cabeceraEstado = [
    "Código",
    "Estado del Paciente"
  ]
  const cabeceraDoctor = [
    "Código",
    "Datos del Doctor"
  ]
class obtenerData extends React.Component{
  state={
    dataTipo: [],
    dataRaza: [],
    dataEstado: [],
    dataDoctor: []
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
      const doctor = await Axios.get('http://localhost:8080/api/v1/doctor')
      this.formatearData(doctor,'id_doctor','dataDoctor','nombres_apellidos')
      console.log(doctor,'doc')
    }
    catch(e){
      console.error(e)
    }
  }

  render(){
    console.log(this.state.dataDoctor,'doctor')
    return(
      <div>
        <Tabla cabecera={cabeceraTipoMascota} dates={this.state.dataTipo}/>
        <Tabla cabecera={cabeceraRaza} dates={this.state.dataRaza}/>
        <Tabla cabecera={cabeceraEstado} dates={this.state.dataEstado}/>
        <Tabla cabecera={cabeceraDoctor} dates={this.state.dataDoctor}/>
      </div>
    )
  }
}
export default obtenerData