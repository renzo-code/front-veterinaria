import React from 'react'
import { Link } from 'react-router-dom'
import './HomeStyle.scss'
import Button from '../../../components/Button/Button'
import Blockes from '../../../components/Blockes/Blockes'
import Cards from '../../../components/cardDoctor/Cards'
import Afiches from '../../../components/Afiches/Afiches'



class Home extends React.Component{
  state= {
    
  }

  render() {
    return(
    <div>
      <div className="image-fondo">
        <div className="image-title">
          <h1>EMERGENCIAS</h1>
          <h1 className="title-hora">24 HORAS - 365 DÍAS</h1>
          <Button className="btn-conocenos" name="CONÓCENOS"></Button>
        </div>
      </div>
      <div className="quienes-somos">
        <div className="container">
          <h1 className="body-title">QUIÉNES SOMOS</h1>
          <p className="body-parrafo">
            Somos la clínica veterinaria número 1 de todo el Perú, tenemos más de 50 años dedicados al cuidado y 
            atención de las mascotas.
          </p>
          <p className="body-parrafo">
            Disponemos de las mejores instalaciones y el personal mejor capacitado para garantizar el bienestar de tu mascota.
          </p>
          <p className="body-parrafo">
            Tu tranquilidad y la salud de tu engreído estarán en las mejores manos,
            porque tú y tu mascota al entrar por las puertas de nuestra clínica, pasarán a formar parte de nuestra gran familia.
          </p>
        </div>
        <div>
          <img className="body-imagen" src="https://veterinariarondon.com/wp-content/uploads/2018/12/recepcion-veterinaria.jpg" alt=""/>
        </div>
      </div>
      <div className="master-servicios">
        <div>
          <h1 className="title-servicios">Nuestros Servicios</h1>
          <div className="separador">
          </div>
          <div className="blocks">
            <Blockes
              src="https://veterinariarondon.com/wp-content/uploads/2018/04/Consultas.svg"
              titleBlock="Consultas de especialidad"
              parrafoBlock="Consulta médica veterinaria con los mejores especialistas de todo el Perú 
                            siempre dispuestos a dar todo por la salud de tu mascota."/>
            <Blockes
              src="https://veterinariarondon.com/wp-content/uploads/2018/04/Peluqueria-1.svg"
              titleBlock="Peluquería para mascotas"
              parrafoBlock="Cuidamos el aspecto y la salud de tu engreído haciendo uso de productos de la más alta calidad."
            />
            <Blockes
            src="https://veterinariarondon.com/wp-content/uploads/2018/04/internamientos-1.svg"
            titleBlock="Internamientos de ultima generación"
            parrafoBlock="Área de internados de última generación y el mejor personal dedicado las 24 horas al cuidado tu mascota."
            />
          </div>
          <div className="blocks">
            <Blockes
              src="https://veterinariarondon.com/wp-content/uploads/2018/04/pet-shop.svg"
              titleBlock="Pet Shop"
              parrafoBlock="Tenemos la mejor y más variada tienda de artículos para mascotas de toda Lima."
            />
            <Blockes
              src="https://veterinariarondon.com/wp-content/uploads/2018/04/Cirugias-1.svg"
              titleBlock="Cirugías"
              parrafoBlock="Cirugía veterinaria en las más modernas instalaciones y con los cirujanos más experimentados."
            />
            <Blockes
              src="https://veterinariarondon.com/wp-content/uploads/2018/04/Laboratorio-1.svg"
              titleBlock="Laboratorio"
              parrafoBlock="Disponemos de los mejores analistas y el más moderno laboratorio de muestras."
            />
          </div>
        </div>
      </div>
      <div>
        <div className="master-familia">
          <h1 className="title-familia">La Familia</h1>
          <div className="cards">
            <Cards
              src="https://veterinariarondon.com/wp-content/uploads/2018/12/eduardo-rondon.png"
              name="Eduardo Rondón Navas"
              subName="DIRECTOR & FUNDADOR"
              parrafo="Nuestro director y fundador, médico veterinario con más de 40 años de dedicación y 
                        amor por los animales. Fue Presidente de la Academia de Ciencias Veterinarias y Decano 
                        Nacional del Colegio Médico Veterinario del Perú. "
              imagen="faTwitter"
            />
            <Cards
              src="https://veterinariarondon.com/wp-content/uploads/2018/12/rodrigo-rondon.png"
              name="Rodrigo Rondón Herz"
              subName="ESPECIALISTA EN ANIMALES MENORES"
              parrafo="Médico veterinario especialista en animales menores, con más de dos décadas de experiencia. 
                      El Doctor Rodrigo se caracteriza por su delicada mano, sus acertados diagnósticos, y una sonrisa de oreja 
                      a oreja al recibir a sus pacientes."
            />
          </div>
        </div>
      </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13123.950201131476!2d-77.03654645011582!3d-12.059082881668964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c80c682de3%3A0x17152161175cbcdd!2sPlaza%20San%20Mart%C3%ADn!5e0!3m2!1ses-419!2spe!4v1597787310368!5m2!1ses-419!2spe" 
          width="100%" height="500" frameborder="0" 
          allowfullscreen="" aria-hidden="false" tabindex="0" 
          title="s"
          >
        </iframe>
      <div>
        <Afiches/>
      </div>
    </div>
    )
  }
}
export default Home