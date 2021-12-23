import React, {useReducer} from "react";
import tareaConstext from './tareaContext';
import tareaReducer from './tareaReducer';
import clienteAxios from "../../config/axios";
import {
    TAREAS_PROYECTOS,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types/index';

const TareaState = (props) => {

    const initialState = {
        tareasProyecto: [],
        errorTarea:false,
        tareaSeleccionada: null
    }

    const[state, dispatch] = useReducer(tareaReducer, initialState);

    //obtener tareas
    const obtenerTareas = async(proyectoId) => {
        try {
            const respuesta = await clienteAxios.get('/api/tareas', {params: {proyecto: proyectoId}});
            
            dispatch({
                type: TAREAS_PROYECTOS,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    //agregar tarea
    const agregarTarea = async(nuevaTarea) => {        
        try {
            await clienteAxios.post('/api/tareas', nuevaTarea);

            dispatch({
                type: AGREGAR_TAREA,
                payload: nuevaTarea
            })
        } catch (error) {
            console.log(error);
        }
    }

    //valida y muestra error
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //eliminar tarea
    const eliminarTarea = async(tareaId, proyectoId) => {
        try {
            await clienteAxios.delete(`/api/tareas/${tareaId}`,{params:{proyecto:proyectoId}});
            dispatch({
                type: ELIMINAR_TAREA,
                payload: tareaId
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    //extraer tarea para edicion
    const guardarTareaActual = (tarea) => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //edita tarea
    const actualizarTarea = async(tarea) => {
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`,tarea);
            
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
        }
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
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
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