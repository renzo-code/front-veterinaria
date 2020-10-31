import React from 'react'
import './HomeStyle.scss'
import Footer from '../../../components/Footer/Footer'
import Button from '../../../components/Button/Button'
import Blockes from '../../../components/Blockes/Blockes'
import Cards from '../../../components/cardDoctor/Cards'
import Afiches from '../../../components/Afiches/Afiches'



class Home extends React.Component{
  state= {
    
  }

  render() {
    return(
    <div className="master-home">
      <div className="image-fondo">
        <div className="image-title">
          <h1>EMERGENCIAS</h1>
          <h1 className="title-hora">24 HORAS - 365 DÍAS</h1>
          <Button className="btn-conocenos" name="CONÓCENOS"></Button>
        </div>
      </div>
      <div className="quienes-somos">
        <div className="container">
          <h1 className="title-servicios">QUIÉNES SOMOS</h1>
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
          <img className="body-imagen" src="https://instagram.flim22-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/82785401_3045117178841308_1395746248079331773_n.jpg?_nc_ht=instagram.flim22-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=0cvipdCfYOcAX98H2r5&_nc_tp=24&oh=0d4186da9a552d3ef677d917b18cce21&oe=5FC58BBC" alt=""/>
        </div>
      </div>
      <div className="master-servicios">
        <div>
          <h1 className="title-servicios">Nuestros Servicios</h1>
          <div className="separador">
          </div>
          <div className="blocks">
            <Blockes
              src="data:image/png;base64,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"
              titleBlock="Consultas de especialidad"
              parrafoBlock="Consulta médica veterinaria con los mejores especialistas de todo el Perú 
                            siempre dispuestos a dar todo por la salud de tu mascota."/>
            <Blockes
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKb6OVTUk1gVFDnF9iENtr2qIHffQ1ks77dg&usqp=CAU"
              titleBlock="Peluquería para mascotas"
              parrafoBlock="Cuidamos el aspecto y la salud de tu engreído haciendo uso de productos de la más alta calidad."
            />
            <Blockes
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTunoah2778rvRVKp70kpfEyfrwBrHOWsaVDA&usqp=CAU"
            titleBlock="Internamientos de ultima generación"
            parrafoBlock="Área de internados de última generación y el mejor personal dedicado las 24 horas al cuidado tu mascota."
            />
          </div>
          <div className="blocks">
            <Blockes
              src="data:image/png;base64,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"
              titleBlock="Pet Shop"
              parrafoBlock="Tenemos la mejor y más variada tienda de artículos para mascotas de toda Lima."
            />
            <Blockes
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTn-mgr9y8iD5kLNXlGS9UP-y0fLRyfg-lK4Q&usqp=CAU"
              titleBlock="Cirugías"
              parrafoBlock="Cirugía veterinaria en las más modernas instalaciones y con los cirujanos más experimentados."
            />
            <Blockes
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfTSbvzQj3y9nFT58blLHXyU6yB5hOonB4mw&usqp=CAU"
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
              src="https://4.bp.blogspot.com/-CuYUrXfviw4/XLlgXqHglaI/AAAAAAAAACs/gsfjlyS4kGEElMgo1DSpAgZw5pkS3il1wCLcBGAs/s200/eduardo-rondon.png"
              name="Eduardo Rondón Navas"
              subName="DIRECTOR & FUNDADOR"
              parrafo="Nuestro director y fundador, médico veterinario con más de 40 años de dedicación y 
                        amor por los animales. Fue Presidente de la Academia de Ciencias Veterinarias y Decano 
                        Nacional del Colegio Médico Veterinario del Perú. "
              imagen="faTwitter"
            />
            <Cards
              src="https://2.bp.blogspot.com/-BdEy8PQL2j8/XLlgX3wlQoI/AAAAAAAAACw/_2gjsuQqjvshgzsBfkto0QnQ1SqBEtTawCLcBGAs/s200/rodrigo-rondon.png"
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
      <div className="afiches-master">
        <Afiches/>
      </div>
      <div>
        <div className="footer-master">
          <div className="footer-title">
          <h1 className="title-la-lealtad">La lealtad te hace familia.</h1>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
    )
  }
}
export default Home