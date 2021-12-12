import React from 'react';
import Siderbar from '../layout/Siderbar';
import Barra from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import ListadoTarea from '../tareas/ListadoTarea';

const Proyectos = () => {
    return (
        <div className='contenedor-app'>
            <Siderbar />
            <div className="seccion-principal">
                <Barra />
                <main>
                    <FormTarea/>
                    <div className="contenedor-tareas">
                        <ListadoTarea/>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Proyectos
