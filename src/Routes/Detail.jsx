import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useDentistStates } from "../Context/DentistContext"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { state, dispatch } = useDentistStates()
  const { dentistSelected } = state

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams()
  //console.log(params)
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  useEffect(() => {
    axios(url)
      .then(res => dispatch({ type: 'GET_DENT', payload: res.data }))//res.data
  }, [])
  console.log(dentistSelected)

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h2>{dentistSelected.name}</h2>
      <h3>{dentistSelected.email}</h3>
      <h3>{dentistSelected.phone}</h3>
      <h3>{dentistSelected.website}</h3>
      <button onClick={() => dispatch({ type: 'ADD_FAV', payload: dentistSelected })}>❤</button>
    </>
  )
}

export default Detail