import React,{useReducer} from "react";
import proyectoConstext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { FORMULARIO_PROYECTO, OBTENER_PROYETCOS } from "../../types";



const ProyectoState = (props) => {
    const proyectos = [
        {id:1,Nombre: 'tienda virtual'},
        {id:2,Nombre: 'tienda virtual'},
        {id:3,Nombre: 'tienda virtual'},
    ]
    const initialState = {
        proyectos: [],
        formulario:false
    }

    //Dispatch para ejecutar las acciones 
    const[state, dispatch] = useReducer(proyectoReducer, initialState);

    //funciones CRUD
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

    return(
        <proyectoConstext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}    
        >
            {props.children}
        </proyectoConstext.Provider>
    )
}

export default ProyectoState;