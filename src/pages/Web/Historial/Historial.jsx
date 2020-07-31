import React from 'react'
import Input from '../../../components/Input/Input'

class Historial extends React.Component{
  state={

  }

  inputChange = (e) => {
    console.log(e.target.value, 'Cambié')
  }

  render(){
    return(
    <div>
      Historial
      <Input titleInput="Titulo Historia" placeholder="Historial" onChange={this.inputChange}
      />
      <Input titleInput="Titulo Cargando" placeholder="Cargando..." onChange={this.inputChange}/>
    </div>
    )
  }
}


export default Historial
