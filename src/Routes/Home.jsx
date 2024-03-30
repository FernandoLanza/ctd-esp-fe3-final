import React, { useState , useEffect } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useDentistStates } from '../Context/DentistContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state}=useDentistStates()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.dentistList.map((item)=><Card key={item.id} item={item}/>)}
      </div>
    </main>
  )
}

export default Home