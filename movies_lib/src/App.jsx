import Pagina from "./componets/Navbar"

import {Outlet} from "react-router-dom"

import './App.css'

function App() {  
  return (
    <div className="App">
     <Pagina/>
     <h2>Movie_lib</h2>
     <Outlet/>
    </div>
  )
}

export default App
