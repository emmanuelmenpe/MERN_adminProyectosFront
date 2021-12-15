/**
 * definicion del estado y funciones que lo alteran 
 */

import React,{useReducer} from "react";
import proyectoConstext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { v4 as uuidv4 } from 'uuid';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYETCOS, 
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from "../../types";



const ProyectoState = (props) => {
    const proyectos = [
        {id:1,nombre: 'tienda virtual'},
        {id:2,nombre: 'curso udemy'},
        {id:3,nombre: 'MERN '},
    ]
    const initialState = {
        proyectos: [],
        formulario:false,
        errorFormulario: false,
        proyecto: null //proyeto que este seleccionado
    }

    //Dispatch para ejecutar las acciones 
    //const[state, funcionDelHook] = useReducer(FuncionesAEjecutar, EstadoInicialDeApp);
    const[state, dispatch] = useReducer(proyectoReducer, initialState);

    /**
     * a dispatch se le envia un objeto
     * payload es por donde se envian los datos
     */

    //mostrar formulario
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYETCOS,
            payload: proyectos
        })
    }

    //agreagar proyecto
    const agregarProyecto = (proyectos) => {
        proyectos.id = uuidv4();
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyectos
        })
    }

    //validar formulario
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO,
        })
    }

    //seleccionar el proyecto que el usuraio selecciono
    const proyectoActual = (proyectoId) => {
         dispatch({
             type:PROYECTO_ACTUAL,
             payload: proyectoId
         })
    }

    //ELIMINAR PROYECTO
    const eliminarProyecto = (proyectoId) => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return(
        /**
         * todos los componentes dentro del context podran acceder al estado al estado definido
         */
        <proyectoConstext.Provider//.Provider parmite que solo los hijos accedan a las funciones y estado
            value={{//define que podran recibir o acceder los componentes hijos
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}    
        >
            {props.children}//son los componentes dentro de este componente
        </proyectoConstext.Provider>
    )
}

export default ProyectoState;