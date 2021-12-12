import React, {Fragment} from 'react'
import Tarea from './Tarea'

const ListadoTarea = () => {

    const tareasProyecto = [
        {nombre: 'tarea1', estado:true},
        {nombre: 'tarea2', estado:false},
        {nombre: 'tarea3', estado:true},
        {nombre: 'tarea4', estado:false},
    ]

    return (
        <Fragment>
            <h2>Proyecto: tienda virtual</h2>

            <ul className='listado-tareas'>
                {tareasProyecto.length===0
                    ? (<li className='tarea'>no hay tareas</li>)
                    : tareasProyecto.map((tarea,i) => (
                        <Tarea tarea={tarea}/>
                    ))
                }
            </ul>
            <button type='buttom' className='btn btn-eliminar'>Eliminar proyecto &times;</button>
        </Fragment>
    )
}

export default ListadoTarea
