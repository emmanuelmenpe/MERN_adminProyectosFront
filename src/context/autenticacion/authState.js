import React, {useReducer} from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import clienteAxios from "../../config/axios";
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
        mensaje:null
    }

    const[state, dispatch] = useReducer(authReducer, inicialState);

    const registrarUsuario = async(datos) => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios',datos);
            console.log(respuesta.data);

            dispatch({
                type:REGISTRO_EXITOSO,
                payload: respuesta.data
            })
        } catch (error) {
            //console.log(error.response);
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

    return(
        <authContext.Provider
            value={{
                token:state.token,
                autenticado:state.autenticado,
                usuario:state.usuario,
                mensaje:state.mensaje,
                registrarUsuario
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState;