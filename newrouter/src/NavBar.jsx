import './NavBarCss.css'
import {NavLink} from "react-router-dom"


const NavBar = () => {
  return (
<>

<div className='navbar'>
<h1>Rihankhan</h1>
<div className='navlink'>
<NavLink id='home' to="/" className={(e)=>{return e.isActive ? "red": "" } } >
    <li>Home</li>
</NavLink >
<NavLink id='about' to="/About"className={(e)=>{return e.isActive ? "red" : ""}}  >
    <li>About</li>
</NavLink>
<NavLink id='contact' to="/Contect" className={(e)=>{return e.isActive ? "red" : ""}}>
    <li>Contact</li>
</NavLink>
</div>


</div>


</>
  )
}

export default NavBar