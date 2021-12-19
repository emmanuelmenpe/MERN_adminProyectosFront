import React, {useReducer} from "react";
import alertaReducer from "./alertaReducer";
import alertaContext from "./alertaContext";
import { 
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from "../../types";

const AlertaState  = (props) => {

    const inicialState = {
        alerta:null
    }

    //Dispatch para ejecutar las acciones 
    //const[state, funcionDelHook] = useReducer(FuncionesAEjecutar, EstadoInicialDeApp);
    const[state, dispatch] = useReducer(alertaReducer, inicialState);

    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,//ó msg:msg al tener el mismo nombre se puede omitir uno
                categoria//ó categoria:categoria al tener el mismo nombre se puede omitir uno
            }
        });


        //quitar alerta despues de 5 segundos
        setTimeout(()=>{
            dispatch({
                type: OCULTAR_ALERTA
            });
        }, 5000)
    }

    return (
        /**
         * todos los componentes dentro del context podran acceder al estado al estado definido
         */
        <alertaContext.Provider//.Provider parmite que solo los hijos accedan a las funciones y estado
            value={{//define que podran recibir o acceder los componentes hijos
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}{/*son los componentes dentro de este componente*/}
        </alertaContext.Provider>
    )
}

export default AlertaState;