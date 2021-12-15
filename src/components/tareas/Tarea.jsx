import React, {useContext} from 'react';
import tareaConstext from '../../context/tareas/tareaContext';
import proyectoConstext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {

    //obtener el state de proyectos 
    const proyetosContext = useContext(proyectoConstext);
    const { proyecto } = proyetosContext;

    const [proyectoActual] =  proyecto;

    //obtener state de tarea
    const tareaContext = useContext(tareaConstext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareaContext;

    const borrarTarea = (tareaId) => {
        eliminarTarea(tareaId);
        obtenerTareas(proyectoActual.id)
    }

    //funcion para cambiar el estado de las tareas
    const cambiarEtado = (tarea) => {
        /*
        if (tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        */
        tarea.estado = !tarea.estado;
        cambiarEstadoTarea(tarea);
    }

    const seleccionarTarea = (tarea) => {
        guardarTareaActual(tarea);
    }

    return (
        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>
            <div className="estado">
                {
                    tarea.estado
                    ? (<button onClick={()=>cambiarEtado(tarea)} type='button' className='completo'>Completo</button>)
                    : (<button onClick={()=>cambiarEtado(tarea)} type='button' className='incompleto'>incompleto</button>)
                }
            </div>

            <div className="acciones">
                <button 
                    type='button' 
                    className='btn btn-primario'
                    onClick={()=> seleccionarTarea(tarea)}
                >Editar</button>
                <button 
                    type='button' 
                    className='btn btn-secundario'
                    onClick={() => borrarTarea(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    )
}

export default Tarea
