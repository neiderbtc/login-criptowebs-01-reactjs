import React from 'react';
import FormularioLogin from '../components/FormularioLogin';
import ApartadoContacto from '../components/ApartadoContacto';

const  FormularioLoginView = () => {

  return (
        <div className="contenedor">
            <div className="box-formulario">
                <FormularioLogin/>
            </div>
            <div className="box-contacto">
                <ApartadoContacto/>
            </div>
        </div>
  );
}

export default FormularioLoginView;
