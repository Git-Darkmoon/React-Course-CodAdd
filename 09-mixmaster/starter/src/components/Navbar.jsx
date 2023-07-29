import { NavLink } from "react-router-dom"
import Nav from "../assets/wrappers/Navbar"

function Navbar() {
  return (
    <Nav>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to={"/"} className="nav-link">
            Home
          </NavLink>
          <NavLink to={"/about"} className="nav-link">
            About
          </NavLink>
          <NavLink to={"/newsletter"} className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Nav>
  )
}

export default Navbar
