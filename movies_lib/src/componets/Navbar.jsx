import {Link} from "react-router-dom"

import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";

const Pagina = () => {
  return (
    <nav id="navbar">
    <h2>
      <Link to="/">
        <BiCameraMovie/>Movies_lib
        </Link>
    </h2>
    <form>
      <input type="text"  placeholder="busque um filme"/>
      <button type="submit">
        <BiSearchAlt2/>
      </button>
    </form>
  </nav>
  )
}

export default Pagina