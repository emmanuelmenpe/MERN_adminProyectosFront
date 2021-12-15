import react, {useReducer} from "react";
import tareaConstext from './tareaContext';
import tareaReducer from './tareaReducer';
import {
    TAREAS_PROYECTOS,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA
} from '../../types/index';

const TareaState = (props) => {

    const initialState = {
        tareas:[
            {id:1, nombre: 'tarea1', estado:true, proyectoId:1},
            {id:2, nombre: 'tarea2', estado:false, proyectoId:1},
            {id:3, nombre: 'tarea3', estado:true, proyectoId:2},
            {id:4, nombre: 'tarea4', estado:false, proyectoId:3},
        ],
        tareasProyecto: null,
        errorTarea:false
    }

    const[state, dispatch] = useReducer(tareaReducer, initialState);

    //obtener tareas
    const obtenerTareas = (proyectoId) => {
        dispatch({
            type: TAREAS_PROYECTOS,
            payload: proyectoId
        })
    }

    //agregar tarea
    const agregarTarea = (nuevaTarea) => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: nuevaTarea
        })
    }

    //valida y muestra error
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //eliminar tarea
    const eliminarTarea = (tareaId) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tareaId
        })
    }

    return( 
        <tareaConstext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
            }}
        >
            {props.children}
        </tareaConstext.Provider>
    )
}

export default TareaState;