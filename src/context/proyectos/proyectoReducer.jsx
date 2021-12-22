import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYETCOS ,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
    PROYECTO_ERROR
} from "../../types";
// funcion que recibe el estado de la app y la accion a ejecutar
export default (state, action) => {
    /**
     * action.payload contiene los datos recibidos
     */
    switch(action.type){
        case FORMULARIO_PROYECTO:
            return{//retorna un objeto con...
                ...state,//copia de todo es estado (ProyectoState)
                formulario:true//cambia un valor del estado
            }
        case OBTENER_PROYETCOS:
            console.log(action.payload);
            return{
                ...state,
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO: 
            return{
                ...state,
                proyectos:[action.payload, ...state.proyectos],
                formulario:false,
                errorFormulario: false
            }
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorFormulario: true
            }
        case PROYECTO_ACTUAL:
            return{
                ...state,    
                proyecto: state.proyectos.filter(proyecto => proyecto._id === action.payload)
            }
        case ELIMINAR_PROYECTO:
            return{
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload),
                proyecto: null
            }
        case PROYECTO_ERROR:
            return{
                ...state,
                mensaje: action.payload
            }
        default: return state;
    }
}