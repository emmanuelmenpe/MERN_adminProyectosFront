import React, {Fragment, useContext} from 'react'
import Tarea from './Tarea'
import proyectoConstext from '../../context/proyectos/proyectoContext';
import tareaConstext from '../../context/tareas/tareaContext';
 import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoTarea = () => {

    //obtener el state de proyectos 
    const proyetosContext = useContext(proyectoConstext);
    const { proyecto, eliminarProyecto } = proyetosContext;

    //obtener el state de tareas
    const tareasContext = useContext(tareaConstext);
    const {tareasProyecto} = tareasContext;
/*
    useEffect(() => {
        const tareasProyecto = tareasProyecto
    }, [])
*/
    //si no hay proyecto seleccionado 
    if (!proyecto) {
        return <h2>Selecciona un proyecto</h2>
    }

    //array destructuring  para extraer el proyecto actual
    const [proyectoActual] =  proyecto;

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className='listado-tareas'>
                {tareasProyecto.length===0
                    ? (<li className='tarea'>no hay tareas</li>)
                    : <TransitionGroup>
                        {
                            tareasProyecto.map((tarea) => (
                                <CSSTransition 
                                    key={tarea._id}
                                    timeout={500}
                                    classNames="tarea"
                                >
                                    <Tarea tarea={tarea} />
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                }
            </ul>
            <button 
                type='buttom' 
                className='btn btn-eliminar'
                onClick={() => eliminarProyecto(proyectoActual._id)}
            >Eliminar proyecto &times;</button>
        </Fragment>
    )
}

export default ListadoTarea
