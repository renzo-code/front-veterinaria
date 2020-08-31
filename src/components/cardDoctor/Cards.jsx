import React from 'react'
import './CardsStyle.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter, faInstagram,} from '@fortawesome/free-brands-svg-icons'


const Cards = (props) =>{
  return(
    <div className="master-cards">
      <img className="image-cards" src={props.src} alt=""/>
      <h2 className="name-Card">{props.name}</h2>
      <h3 className="subTitle-Card">{props.subName}</h3>
      <p className="parrafo-Card">{props.parrafo}</p>
      <div className="fonts-master">
        <div className="fonts">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="fonts">
          <FontAwesomeIcon icon={faFacebookF}/>
        </div>
        <div className="fonts">
          <FontAwesomeIcon icon={faInstagram}/>
        </div>
      </div>
    </div>
  )
}

export default Cards