import React, {Fragment, useState,useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
    //obtener el state del formulario 
    const proyetosContext = useContext(proyectoContext);
    const {formulario,errorFormulario, mostrarFormulario, agregarProyecto, mostrarError} = proyetosContext;

    const [proyecto, setProyecto] = useState({
        nombre:'',

    });

    const {nombre} = proyecto;

    const onSubmitProyecto = (e) => {
        e.preventDefault();

        if (nombre === '') {
            mostrarError();
            return;
        }

        agregarProyecto(proyecto)

        setProyecto({nombre:''})
    }

    const onChange = (e) => {
        setProyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        })
    }

    return (
        <Fragment>
            <button 
                type='button' 
                className='btn btn-block btn-primario'
                onClick={() => mostrarFormulario()}
            >Nuevo proyecto</button>
            {
                formulario? 
                (
                    <form action="" className='formulario-nuevo-proyecto' onSubmit={onSubmitProyecto}>
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre" 
                            className='input-text' 
                            placeholder='Nombre proyecto' 
                            value={nombre}
                            onChange={onChange}
                        />

                        <input type="submit" value="Agregar proyecto" className='btn btn-primario btn-block' />
                    </form>
                ): null
            }
            {errorFormulario? <p className='mensaje error'>Nombre poryecto es obligatorio</p> : null}
        </Fragment>
    )
}

export default NuevoProyecto
