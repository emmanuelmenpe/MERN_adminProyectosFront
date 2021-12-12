import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyecto from '../proyectos/ListadoProyectos';

const Siderbar = () => {
    return (
        <aside>
            <h1>MERN <span>TASK</span></h1>
            <NuevoProyecto />
            <div className="proyectos">
                <h2>tus Proyectos</h2>
                <ListadoProyecto />
            </div>

        </aside>
    )
}

export default Siderbar
