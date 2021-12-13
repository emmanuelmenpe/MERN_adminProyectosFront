import React,{useContext, useEffect} from 'react'
import Proyecto from './Proyecto'
import proyectoConstext from '../../context/proyectos/proyectoContext';

const ListadoProyecto = () => {
   //obtener el proyectos del state inicial 
   const proyetosContext = useContext(proyectoConstext);
   const {proyectos, obtenerProyectos} = proyetosContext;

   //obtenerProyectos cuando carga el componente
   useEffect (()=>{
    obtenerProyectos();
   },[]);

   if (proyectos.length ===0)return <h3>No tiene proyectos aún.</h3>;
   
    return (
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto =>(
                <Proyecto key={proyecto.id} proyecto={proyecto}/>
            ))}
        </ul>
    )
}

export default ListadoProyecto
