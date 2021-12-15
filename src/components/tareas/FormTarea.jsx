import React, {useContext, useState} from 'react'
import proyectoConstext from '../../context/proyectos/proyectoContext';
import tareaConstext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    const [tarea, setTarea] = useState({
        nombre:''
    })

    const {nombre}= tarea;

    //obtener si hay un proyecto activo
    const proyetosContext = useContext(proyectoConstext);
    const { proyecto } = proyetosContext;

    //obtener state de tarea
    const tareaContext = useContext(tareaConstext);
    const { errorTarea, agregarTarea, validarTarea, obtenerTareas } = tareaContext;

    //si no hay proyecto seleccionado 
    if (!proyecto) {
        return null;
    }

    //array destructuring  para extraer el proyecto actual
    const [proyectoActual] =  proyecto;

    const handleChange = (e) => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitTarea = (e) => {
        e.preventDefault();

        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);
        setTarea({nombre:''})
        obtenerTareas(proyectoActual.id)

    }

    return (
        <div className="formulario">
            <form onSubmit={onSubmitTarea}>
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        className="input-text" 
                        placeholder='Nombre de tarea' 
                        name='nombre'
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        value="Agregar tarea" 
                        className='btn btn-primario btn-block'
                    />
                </div>
            </form>
            {   errorTarea? 
                <p className="mensaje error">Ingrese nombre de tarea</p>
                : 
                null
            }
        </div>
    )
}

export default FormTarea
