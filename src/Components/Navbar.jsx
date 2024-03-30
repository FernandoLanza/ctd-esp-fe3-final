import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import { useDentistStates } from '../Context/DentistContext'
import '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useDentistStates()

  const themeSelected = () => { dispatch({ type: "THEME" }) }

  const navbarClass = state.theme === 'light' ? 'navbar light' : 'navbar dark';



  return (
    <nav className={navbarClass}>
      <a href="#" className='logo'><img className="logo" src="/public/DH.ico" alt="DHICON" ></img></a>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className="nav-links">
        <Link to={routes.home}><h3>Home</h3></Link>
        <Link to={routes.Favs}><h3>Favorites</h3></Link>
        <Link to={routes.contact}><h3>Contact</h3></Link>

        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={themeSelected} > {state.theme === 'light' ? 'Dark Mode' : 'Light Mode'} </button>
      </div>
    </nav>
  )
}

export default Navbar





