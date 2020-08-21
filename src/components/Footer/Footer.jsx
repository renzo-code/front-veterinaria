import React from 'react'
import './FooterStyles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhone, faMapMarkedAlt, faClock, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faTwitter, faInstagram, faWhatsapp,} from '@fortawesome/free-brands-svg-icons'

const Footer = () =>{
  return(
    <div className="footer-master" >
      <div className="redes-sociales-icon">
        <div className="red-social">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="red-social">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className="red-social">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="red-social">
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>
      <div className="container-info">
        <div className="master-info">
          <div className="icons">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
            <h2 className="parrafo-info">Av. Pedro Venturo 104</h2>
        </div>
        <div className="master-info">
          <div className="icons">  
            <FontAwesomeIcon icon={faPhone} />
          </div>
            <h2 className="parrafo-info">01 448 6092</h2>
        </div>
          <div className="master-info">
            <div className="icons">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <h2 className="parrafo-info">r@veterinariarondon.com</h2>
          </div>
      </div>
          <h2 className="parrafo-footer">© Clínica Veterinaria R 2020 • Hecho con ❤ por :<span className="rn"> rN</span></h2>
    </div>
  )
}

export default Footer