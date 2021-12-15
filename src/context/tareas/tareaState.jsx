import react, {useReducer} from "react";
import tareaConstext from './tareaContext';
import tareaReducer from './tareaReducer';
import { v4 as uuidv4 } from "uuid";
import {
    TAREAS_PROYECTOS,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
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
        errorTarea:false,
        tareaSeleccionada: null
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
        nuevaTarea.id = uuidv4();
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

    //cambiar el estado de tarea a completo o incompleto
    const cambiarEstadoTarea = (tarea) => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //extraer tarea para edicion
    const guardarTareaActual = (tarea) => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //edita tarea
    const actualizarTarea = (tarea) => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    //elimina tarea seleccionada despues de actualizar
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA,
        })
    }

    return( 
        <tareaConstext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </tareaConstext.Provider>
    )
}

export default TareaState;