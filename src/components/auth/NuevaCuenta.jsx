import React, {useState } from 'react';
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {
    
    const [usuario, setUsuario] = useState({
        nombre:'',
        email: '',
        password:'',
        confirmar:'',
    });

    const {nombre, email, password, confirmar} = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear Cuenta</h1>
                <form onSubmit={onSubmit}>

                    <div className="campo-form">
                        <label htmlFor="nombre" className="nombre">Nombre</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre" 
                            placeholder='ingrese nombre' 
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email" className="email">email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder='ingrese email' 
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password" className="password">Contraseña</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder='ingrese contraseña' 
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar" className="confirmar">Confirmar contraseña</label>
                        <input 
                            type="password" 
                            name="confirmar" 
                            id="confirmar" 
                            placeholder='Confirmar contraseña' 
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className='btn btn-primario btn-block' value="Crear Cuenta" />
                    </div>
                </form>
                <Link to={'/'} className='enlace-cuenta' >Iniciar sesión</Link>
            </div>
        </div>
    )
}

export default NuevaCuenta
