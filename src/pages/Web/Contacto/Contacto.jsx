import React from 'react'
import Button from '../../../components/Button/Button'

class Contacto extends React.Component{
  state={

  }

  capturarClick = (e) => {
    console.log(e,'click')
    alert('hice click')
  }

  render(){
    return(
      
      <div>
        Contacto
        <Button name="Ingresar" onClick={this.capturarClick}/>
      </div>
    )
  }
}


export default Contacto
