import React from 'react'
import Button from '../../../components/Button/Button'
import './ContactoStyles.scss'
import Input from '../../../components/Input/Input'
import TextArea from '../../../components/TextArea/TextArea'
import Footer from '../../../components/Footer/Footer'
import Axios from 'axios'

class Contacto extends React.Component{
  state={
    datosInputNombre : '',
    datosInputEmail : '',
    datosInputAsunto : '',
    datosTextArea : '',
  }

  inputChange= (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
    console.log(e.target.value,'input')
  }

  crearContacto = async () =>{
    try{
      const nuevoContacto = {
        "email" : this.state.datosInputEmail,
        "nombres" : this.state.datosInputNombre,
        "asunto" : this.state.datosInputAsunto,
        "descripcion" : this.state.datosTextArea
      }
      const contactoCreado = await Axios.post(`http://localhost:8080/api/v1/contacto`, nuevoContacto)
      console.log(contactoCreado,'contactoCreado')
    }
    catch(e){
      console.error(e)
    }
    this.limpiarFormulario()
  }

  limpiarFormulario = () => {
    this.setState({
      datosInputEmail : '',
      datosInputNombre : '',
      datosInputAsunto : '',
      datosTextArea : ''
    })
  }

  render(){
    return(
      <div className="form-master">
        <div className="title-content">
          <h1 className="title-Form">Contáctanos</h1>
        </div>
          <h2 className="sub-title-form">
            Puedes usar este formulario para enviarnos alguna inquietud 
            que tengas o para hacernos llegar tus sugerencias.
          </h2>
          <div className="form-input-master">
              <Input
                className="form-input-contacto"
                titleInput="Nombre - Apellido*"
                onChange={this.inputChange}
                name="datosInputNombre"
                value={this.state.datosInputNombre}
              />
              <Input
                className="form-input-contacto"
                titleInput="Correo Electronico*"
                placeholder="ejemplo@tucorreo.com"
                onChange={this.inputChange}
                name="datosInputEmail"
                value={this.state.datosInputEmail}
              />
              <Input 
                className="form-input-contacto"
                titleInput="Asunto*"
                onChange={this.inputChange}
                name="datosInputAsunto"
                value={this.state.datosInputAsunto}
              />
          </div>
          <div className="form-texarea">
            <TextArea
              name="datosTextArea"
              value={this.state.datosTextArea}
              onChange={this.inputChange}
              title="Tú mensaje*"
            />
          </div>
        <div className="btn-enviar-msj">
          <Button 
            className="contacto-btn" 
            name="ENVIAR MENSAJE" 
            onClick={this.crearContacto}
          />
        </div>
        <Footer/>
      </div>
    )
  }
}


export default Contacto
