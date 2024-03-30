
import { Route, Routes } from "react-router-dom";
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import { routes } from './Components/utils/routes'
import './index.css'; 


import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import { useDentistStates } from './Context/DentistContext'


function App() {

  const { state, dispatch } = useDentistStates()

  const themeSelected = () => { dispatch({ type: "THEME" }) }

  const body = state.theme === 'light' ? 'navbar light' : 'navbar dark';


  return (
    <>
      <div className={body} id="">
        <header><Navbar /></header>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.Favs} element={<Favs />} />
          <Route path={routes.detail} element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
