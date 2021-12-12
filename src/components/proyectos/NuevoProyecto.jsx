import React, {Fragment, useState,useContext} from 'react'
import proyectoConstext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
    //obtener el state del formulario 
    const proyetosContext = useContext(proyectoConstext);
    const {formulario, mostrarFormulario} = proyetosContext;

    const [proyecto, setProyecto] = useState({
        nombre:'',

    });

    const {nombre} = proyecto;

    const onSubmitProyecto = (e) => {
        e.prebentDefault();
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
        </Fragment>
    )
}

export default NuevoProyecto
