import React,{useContext, useEffect} from 'react'
import Proyecto from './Proyecto'
import proyectoConstext from '../../context/proyectos/proyectoContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoProyecto = () => {
   //obtener el proyectos del state inicial 
   const proyetosContext = useContext(proyectoConstext);//almacena todos los estados y funciones 
   const {proyectos, obtenerProyectos} = proyetosContext;// obtiene estados o funciones que se necesita

   //obtenerProyectos cuando carga el componente
   useEffect (()=>{
    obtenerProyectos();
    //eslint-disable-next-line
   },[]);

   if (proyectos.length ===0)return <h3>No tiene proyectos aún.</h3>;
   
    return (
        <ul className='listado-proyectos'>
            <TransitionGroup>
                {
                    proyectos.map(proyecto =>(
                        <CSSTransition
                            key={proyecto.id}
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
