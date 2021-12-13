import React, {Fragment, useContext} from 'react'
import Tarea from './Tarea'
import proyectoConstext from '../../context/proyectos/proyectoContext';

const ListadoTarea = () => {

    //obtener el state de proyectos 
    const proyetosContext = useContext(proyectoConstext);
    const { proyecto, eliminarProyecto } = proyetosContext;

    //si no hay proyecto seleccionado 
    if (!proyecto) {
        return <h2>Selecciona un proyecto</h2>
    }

    //array destructuring  para extraer el proyecto actual
    const [proyectoActual] =  proyecto;

    const tareasProyecto = [
        {nombre: 'tarea1', estado:true},
        {nombre: 'tarea2', estado:false},
        {nombre: 'tarea3', estado:true},
        {nombre: 'tarea4', estado:false},
    ]

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className='listado-tareas'>
                {tareasProyecto.length===0
                    ? (<li className='tarea'>no hay tareas</li>)
                    : tareasProyecto.map((tarea,i) => (
                        <Tarea tarea={tarea}/>
                    ))
                }
            </ul>
            <button 
                type='buttom' 
                className='btn btn-eliminar'
                onClick={() => eliminarProyecto(proyectoActual.id)}
            >Eliminar proyecto &times;</button>
        </Fragment>
    )
}

export default ListadoTarea
