import { FORMULARIO_PROYECTO, OBTENER_PROYETCOS } from "../../types";

export default (state, action) => {
    switch(action.type){
        case FORMULARIO_PROYECTO:
            return{
                ...state,
                formulario:true
            }
        case OBTENER_PROYETCOS:
            return{
                ...state,
                proyectos: action.payload
            }
        default: return state;
    }
}