import React from 'react'
import './AfichesStyle.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhone, faMapMarkedAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faTwitter, faInstagram,} from '@fortawesome/free-brands-svg-icons'

const Afiches = () => {
  return(
    <div className="font-master">
      <div className="font-afiches">
        <div className="font-llamada">
        <FontAwesomeIcon icon={faPhone} />
        </div>
        <h1 className="font-text">01 448 6092</h1>
        <p className="font-parrafo">Disponibles para atender tu llamado.</p>
      </div>
      <div  className="font-afiches">
        <div className="font-ubicacion">
        <FontAwesomeIcon icon={faMapMarkerAlt}/>
        </div>
        <h1 className="font-text">Av. Pedro Venturo 104</h1>
        <p className="font-parrafo">Santiago de Surco, Lima.</p>
      </div>
      <div  className="font-afiches">
        <div className="font-tiempo">
          <FontAwesomeIcon icon={faClock}/>
        </div>
        <h1 className="font-text">Atención 24hrs/365d</h1>
        <p className="font-parrafo">Servicio de Emergencias.</p>
      </div>
    </div>
  )
}

export default Afiches