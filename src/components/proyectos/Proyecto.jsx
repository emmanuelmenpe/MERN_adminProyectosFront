import React, {useContext} from 'react'
import proyectoConstext from '../../context/proyectos/proyectoContext';
import tareaConstext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    //obtener el state de proyectos 
    const proyetosContext = useContext(proyectoConstext);
    const { proyectoActual } = proyetosContext;

    //obtener el state de tareas
    const tareasContext = useContext(tareaConstext);
    const {obtenerTareas} = tareasContext;

    const seleccionarProyecto = (id) => {
        proyectoActual(id);
        obtenerTareas(id);
    }

    return (
        <li>
            <button 
                type='button' 
                className='btn btn-blank'
                onClick={() => seleccionarProyecto(proyecto._id)}
            >{proyecto.nombre}</button>
        </li>
    )
}

export default Proyecto
