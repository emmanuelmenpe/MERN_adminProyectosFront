import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from "../../types";

const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO:
            //almacenar token en localStorage
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                autenticado: true,
                mensaje:null,
                cargando:false
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                usuario:null,
                autenticado:null,
                cargando:false,
                mensaje: action.payload
            }
        case OBTENER_USUARIO:
            return{
                ...state,
                autenticado:true,
                cargando:false,
                usuario:action.payload
            }
        default:
            return state
    }
}

export default authReducer;