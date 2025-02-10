import "./NavBarCss.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="Navbar">
        <NavLink to="/" className={(e)=>{return e.isActive ? "red": ""}}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/About" className={(e)=>{return e.isActive ? "red": ""}}>
          <li>about</li>
        </NavLink>
        <NavLink
          to="/Contacte"
          className={(e)=>{return e.isActive ? "red": ""}}
        >
          <li>Contacte</li>
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
