import React, {useContext} from 'react'
import proyectoConstext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    //obtener si hay un proyecto activo
    const proyetosContext = useContext(proyectoConstext);
    const { proyecto } = proyetosContext;

    //si no hay proyecto seleccionado 
    if (!proyecto) {
        return null;
    }

    //array destructuring  para extraer el proyecto actual
    const [proyectoActual] =  proyecto;

    return (
        <div className="formulario">
            <form action="">
                <div className="contenedor-input">
                    <input type="text" className="input-text" placeholder='Nombre de tarea' name='nombre'/>
                </div>

                <div className="contenedor-input">
                    <input type="submit" value="Agregar tarea" className='btn btn-primario btn-block' />
                </div>
            </form>
        </div>
    )
}

export default FormTarea
