import React, {useContext} from 'react'
import proyectoConstext from '../../context/proyectos/proyectoContext';

const Proyecto = ({proyecto}) => {

    //obtener el state de proyectos 
    const proyetosContext = useContext(proyectoConstext);
    const { proyectoActual } = proyetosContext;


    return (
        <li>
            <button 
                type='button' 
                className='btn btn-blank'
                onClick={() => proyectoActual(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
    )
}

export default Proyecto
