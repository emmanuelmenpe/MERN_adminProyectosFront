import { 
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from "../../types";
// funcion que recibe el estado de la app y la accion a ejecutar
export default (state, action) => {
    switch (action.type) {
        case MOSTRAR_ALERTA:
            return{
                alerta: action.payload
            }
        case OCULTAR_ALERTA:
            return{
                alerta : null
            }
        default:
            return state;
    }
}