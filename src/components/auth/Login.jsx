import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    const [usuario, setUsuario] = useState({
        email: '',
        password:'',
    });

    const {email, password} = usuario;

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
                <h1>Iniciar sesión</h1>
                <form onSubmit={onSubmit}>
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
                        <input type="submit" className='btn btn-primario btn-block' value="Iniciar sesión" />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className='enlace-cuenta' >Obtener cuenta</Link>
            </div>
        </div>
    )
}

export default Login
