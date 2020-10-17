import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const ApartadoContacto = () => {

    const iconDown  = <FontAwesomeIcon icon={faAngleDoubleDown} />
    
    return (
        <>
        <a href="#iconDown"><div className="iconDown">{iconDown}</div></a>
        <div className="contacto__box-ilustracion">
          <img className="contacto__ilustracion" src="/images/ilustracion.png"/>
          </div>
          <div className="text-contacto">
            <h2 className="subtitle">Criptowebs.com</h2>
            <h3 className="lema">Criptomonedas, diseño, desarrollo web.</h3>
            <a href="#" >  
              <div id="iconDown" className="btn-contactanos">
                Contactanos
              </div>
            </a>
            </div>
        </>
    )
}

export default ApartadoContacto
