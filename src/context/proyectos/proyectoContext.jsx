/**
 * accede al estado ProyectoState
 * retorna un estado,
 * separa un estado de otros que pudieramos tener, es decir
 * este archivo puede estar separedo de otros estado, manteniendo un orden
 */
import { createContext } from "react";

const proyectoConstext = createContext();//proyectoConstext será llenado con lo que contenga ProyectoState

export default proyectoConstext;