import React,{useContext, useEffect} from 'react';
import Siderbar from '../layout/Siderbar';
import Barra from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import ListadoTarea from '../tareas/ListadoTarea';
import authContext from '../../context/autenticacion/authContext';

const Proyectos = () => {
    //extraer informacion de autenticacion
    const contextAuth = useContext(authContext);
    const {usuarioAutenticado} = contextAuth

    useEffect(() => {
        usuarioAutenticado();
        //eslint-disable-next-line
    }, [])

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
