import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from "../../types";

export default (state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
            //almacenar token en localStorage
            console.log(action.payload.token);
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                autenticado: true,
                mensaje:null
            }
        case REGISTRO_ERROR:
            return{
                ...state,
                token:null,
                mensaje: action.payload
            }
        case OBTENER_USUARIO:
            return{
                ...state
            }
        case LOGIN_EXITOSO:
            return{
                ...state
            }
        case LOGIN_ERROR:
            return{
                ...state
            }
        case CERRAR_SESION:
            return{
                ...state
            }
        default:
            return state
    }
}