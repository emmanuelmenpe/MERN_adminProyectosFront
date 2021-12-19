import React, {useState, useContext, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import authContext from '../../context/autenticacion/authContext';

const NuevaCuenta = (props) => {

    //extraer valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext ;

    const contextAuth = useContext(authContext);
    const {mensaje, autenticado,registrarUsuario} = contextAuth;
    
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

        if (nombre.trim() === '' || 
            email.trim() === '' ||
            password.trim() === '' ||
            confirmar.trim() === '') {
            mostrarAlerta('todos los campos son obligatorios', 'alerta-error');
            return;
        }

        if (password.length<5) {
            mostrarAlerta('password debe ser minimo de 6 caracteres', 'alerta-error');
            return;
        }

        if (password !== confirmar) {
            mostrarAlerta('los passwords no coinciden', 'alerta-error');
            return;
        }

        registrarUsuario({nombre, email, password});
    }

    //cuando usuario se haya registrado o sea un registro duplicado
    const history = useNavigate();
    useEffect(() => {
        if (autenticado) {
            history('/proyectos');
        }

        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

    }, [mensaje, autenticado, props.history])

    return (
        <div className="form-usuario">
            {alerta? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null }
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
