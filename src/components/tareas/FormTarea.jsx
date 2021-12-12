import React from 'react'

const FormTarea = () => {
    return (
        <div className="formulario">
            <form action="">
                <div className="contenedor-input">
                    <input type="text" className="input-text" placeholder='Nombre de tarea' name='nombre'/>
                </div>

                <div className="contenedor-input">
                    <input type="submit" value="AGregar tarea" className='btn btn-primario btn-block' />
                </div>
            </form>
        </div>
    )
}

export default FormTarea
