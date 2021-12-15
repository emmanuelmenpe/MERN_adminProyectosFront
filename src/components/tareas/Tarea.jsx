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
    const { eliminarTarea, obtenerTareas } = tareaContext;

    const borrarTarea = (tareaId) => {
        eliminarTarea(tareaId);
        obtenerTareas(proyectoActual.id)
    }

    return (
        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>
            <div className="estado">
                {
                    tarea.estado
                    ? (<button type='button' className='completo'>Completo</button>)
                    : (<button type='button' className='incompleto'>incompleto</button>)
                }
            </div>

            <div className="acciones">
                <button type='button' className='btn btn-primario'>Editar</button>
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
