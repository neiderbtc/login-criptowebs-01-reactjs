import React from 'react';
import FormularioLogin from './components/FormularioLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  const iconDown  = <FontAwesomeIcon icon={faAngleDoubleDown} />
  return (
    <div className="App">
        <div className="contenedor">
          <div className="box-formulario">
            <FormularioLogin/>
          </div>
          <div className="box-contacto">
          <div className="iconDown">{iconDown}</div>
            <div className="contacto__box-ilustracion">
              <img className="contacto__ilustracion" src="/images/ilustracion.png"/>
              </div>
              <div className="text-contacto">
                <h2 className="subtitle">Criptowebs.com</h2>
                <h3 className="lema">Criptomonedas, diseño, desarrollo web.</h3>
                <a href="#" >  
                  <div className="btn-contactanos">
                    Contactanos
                  </div>
                </a>
                </div>
          </div>
        </div>
    </div>
  );
}

export default App;
