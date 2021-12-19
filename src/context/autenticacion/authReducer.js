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
            return{
                ...state
            }
        case REGISTRO_ERROR:
            return{
                ...state
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