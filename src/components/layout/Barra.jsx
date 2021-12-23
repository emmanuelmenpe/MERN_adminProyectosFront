import React, {useEffect, useContext} from 'react';
import authContext from '../../context/autenticacion/authContext';

const Barra = () => {
    //extraer informacion de autenticacion
    const contextAuth = useContext(authContext);
    const {usuario, usuarioAutenticado, cerrarSesion} = contextAuth

    useEffect(() => {
        usuarioAutenticado();
        //eslint-disable-next-line
    }, [])

    return (
        <header className='app-header'>
            {usuario? <p className="nombre-usuario">hola <span>{usuario.nombre}</span></p> : null}
            <nav className='nav-principal'>
                <button 
                    className='btn btn-blank cerrar-sesion'
                    onClick={()=>cerrarSesion()}
                >Cerrar sesión</button>
            </nav>
        </header>
    )
}

export default Barra
