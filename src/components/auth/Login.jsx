import React, {useState, useContext, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import authContext from '../../context/autenticacion/authContext';

const Login = (props) => {

    //extraer valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext ;

    const contextAuth = useContext(authContext);
    const {mensaje, autenticado,iniciarSesion} = contextAuth;

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
        if (email.trim() === '' || password.trim() === '') {
            mostrarAlerta('todos los campos son obligatorios', 'alerta-error');
            return;
        }
        iniciarSesion({email, password});

    }

     //cuando usuario sinicie sesion
     const history = useNavigate();
     useEffect(() => {
         if (autenticado) {
             history('/proyectos');
         }
         
         if (mensaje) {
             mostrarAlerta(mensaje.msg, mensaje.categoria);
         }

         //eslint-disable-next-line
     }, [mensaje, autenticado, props.history])

    return (
        <div className="form-usuario">
            {alerta? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null }
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
