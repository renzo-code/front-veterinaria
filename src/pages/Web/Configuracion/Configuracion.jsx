import React from 'react'
import ComboBox from './../../../components/ComboBox/ComboBox'
import Axios from 'axios'

class obtenerData extends React.Component{
  state={
    info: []
  }

  obtenerDatos = async () =>{
    try{
      const respuesta = await Axios.get('http://localhost:8080/api/v1/tipo')
      console.log(respuesta,'resp')
      this.formatearDatos(respuesta)
    }
    catch(X){
      console.error(X)
    }
  }
  
  formatearDatos = (respuesta) =>{
    console.log(respuesta, 'respuesta')
    const form = respuesta.data.reply.map((obj) => {
      return {
        id: obj.id_tipo,
        description: obj.description
      }
    })
    this.setState({
      info: form
    })
  }

  componentDidMount(){
    this.obtenerDatos()
  }

  cambio = (e) =>{
    console.log(e.target.value,'Actualizó')
  }

  render(){
    return(
      <div>
        <ComboBox onChange={this.cambio} title="Combo1" info={this.state.info}></ComboBox>
        <ComboBox onChange={this.cambio} title="Combo2" info={this.state.info} ></ComboBox>
        <ComboBox onChange={this.cambio} title="Combo3" info={this.state.info}></ComboBox>
      </div>
    )
  }
}
export default obtenerData