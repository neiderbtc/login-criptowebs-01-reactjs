import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const  FormularioLogin = () => {
    const iconEye = <FontAwesomeIcon icon={faEye}/>
    return (
        <div>
            <form className="formulario-login" id="formulario-login">
                <h1 className="title">Criptowebs.com</h1>
                <div className="formulario-login__box-input">
                    <label className="formulario-login__label">Usuario</label>
                    <input className="formulario-login__input" type="text" />
                </div>
                <div className="formulario-login__box-input">
                    <label className="formulario-login__label">Contraseña</label>
                    <div className="c">
                        <input className="formulario-login__input" type="password" />
                        <span className="icono-eye">{iconEye}</span>
                    </div>

                </div>
                <p className="reset-password" >Olvidaste tu contraseña?</p>
                <div className="box_btn-entrar">
                    <input className="btn-entrar" type="submit" value="Entrar" />
                </div>
                <p className="elegir">ó</p>
                <div className="box_btn-registrarme">
                <a href="/" >  
                    <div className="btn-registrarme">
                        Registrarme 
                    </div>
                </a>
                </div>
            </form>
        </div>
    )
}

export default FormularioLogin