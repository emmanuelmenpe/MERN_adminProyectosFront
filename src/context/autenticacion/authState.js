import React, {useReducer} from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";
import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from "../../types";

const AuthState = (props) => {
    const inicialState = {
        token:localStorage.getItem('token'),
        autenticado: null,
        usuario:null,
        mensaje:null,
        cargando:true//para solucionar el pantallazo que se ve de inicio de sesion y despues el panel cuando recarga el navegador
    }

    const[state, dispatch] = useReducer(authReducer, inicialState);

    const registrarUsuario = async(datos) => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios',datos);

            dispatch({
                type:REGISTRO_EXITOSO,
                payload: respuesta.data
            })

            //obtener usuario
            usuarioAutenticado()
        } catch (error) {
            //console.log(error);
            const alerta = {
                msg:error.response.data.msg,
                categoria:'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    //buscar usuario autenticado
    const usuarioAutenticado = async() => {
        const token = localStorage.getItem('token');
        if (token) {
            //enviar token por headers
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');
            //console.log(respuesta);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data
            })
        } catch (error) {
            //console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    //inicio sesion de usuario
    const iniciarSesion = async(datos) => {
        //console.log(datos);
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            //console.log(respuesta);
            dispatch({
                type:LOGIN_EXITOSO,
                payload:respuesta.data
            });
            //obtener usuario
            usuarioAutenticado();
        } catch (error) {
            //console.log(error);
            const alerta = {
                msg:error.response.data.msg,
                categoria:'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    //cerrar sesion 
    const cerrarSesion = () => {
        dispatch({
            type:CERRAR_SESION
        })
    }

    return(
        <authContext.Provider
            value={{
                token:state.token,
                autenticado:state.autenticado,
                usuario:state.usuario,
                mensaje:state.mensaje,
                cargando:state.cargando,
                usuarioAutenticado,
                registrarUsuario,
                iniciarSesion,
                cerrarSesion
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState;
