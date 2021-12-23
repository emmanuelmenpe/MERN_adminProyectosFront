import React,{useContext, useEffect} from "react";
import { Navigate} from 'react-router-dom';
import authContext from "../../context/autenticacion/authContext";

//componente que recibe un componente dentro de el
const RutaPrivada = ({children}) => {

    const contextAuth = useContext(authContext);
    const {cargando, autenticado, usuarioAutenticado} = contextAuth
    //cargando es el intento para evitar el pantallazo que se ve de inicio de sesion y despues el panel cuando recarga el navegador

    useEffect(()=>{
        usuarioAutenticado();
        //eslint-disable-next-line
    },[])

    return(

        autenticado && !cargando? children : <Navigate to="/"/>
        /*por el cambio de versiones ya no funciona
        <Route {...props} render={props => !autenticado? (//si el usuario no esta autenticado
                <Navigate to="/"/>
            ) : (
                <Component {...props} />
            )}
        />*/
        
    );
}

export default RutaPrivada;