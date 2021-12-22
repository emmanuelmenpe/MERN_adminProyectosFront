import React,{useContext, useEffect} from 'react'
import Proyecto from './Proyecto'
import proyectoConstext from '../../context/proyectos/proyectoContext';
import alertaContext from '../../context/alertas/alertaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoProyecto = () => {
   //obtener el proyectos del state inicial 
   const proyetosContext = useContext(proyectoConstext);//almacena todos los estados y funciones 
   const {mensaje, proyectos, obtenerProyectos} = proyetosContext;// obtiene estados o funciones que se necesita

   const contextAlerta = useContext(alertaContext);
   const {alerta, mostrarAlerta} = contextAlerta;

   //obtenerProyectos cuando carga el componente
   useEffect (()=>{
       if (mensaje) {
           mostrarAlerta(mensaje.msg, mensaje.categoria);
       }
        obtenerProyectos();
        //eslint-disable-next-line
   },[mensaje]);

   if (proyectos.length ===0)return <h3>No tiene proyectos aún.</h3>;
   
    return (
        <ul className='listado-proyectos'>
            {alerta? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ): null }
            <TransitionGroup>
                {
                    proyectos.map(proyecto =>(
                        <CSSTransition
                            key={proyecto._id}
                            timeout={900}
                            classNames="proyecto"
                        >
                            <Proyecto proyecto={proyecto}/>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </ul>
    )
}

export default ListadoProyecto
