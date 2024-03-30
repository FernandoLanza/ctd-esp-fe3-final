import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../reducers/reducer"
import axios from "axios";

//1. Creo el contexto llmado DontistStates mediante createContext
export const DentistStates = createContext()

const initialState = {
    theme: "",
    dentistList: [],
    dentistSelected: [],
    favs: []
}


//2. CREO Caja con CONTEXTO
const DentistContext = ({ children }) => {

    // 3. DECLARO EL useReducer CON SUS PARAMETROS
    // state = DONDE SE ALMACENA EL ESTADO
    // dispatch = METODO COMO SE VAN A REALIZAR LAS ACCIONES PARA MODIFICAR EL ESTADO
    // useReducer = HOOK IMPORTADO, HACE LA MAGIA
    // reducer = ESPECIFICA LAS ACCIONES A REALIZAR PARA MODIFICAR EL ESTADO
    // initialState = ESTADO INICIAL 
    const [state, dispatch] = useReducer(reducer, initialState)


    //CREO LA LISTA DE ODONTOLOGOS
    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        axios(url)
            .then(res => dispatch({ type: 'LIST_DENT', payload: res.data }))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])

    // 4. RETORNO CONTEXTO CREADO +.Provider PASANDOLE LOS VALORES DE state Y dispatch
    return (
        <DentistStates.Provider value={{ state, dispatch }}>
            {children}
        </DentistStates.Provider>
    )
}

export default DentistContext

export const useDentistStates = () => useContext(DentistStates)