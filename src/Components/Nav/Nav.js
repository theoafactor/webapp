import { Link, NavLink } from "react-router-dom"
import "./Nav.css"
export default function Nav(){

    return (
        <nav className='nav-menu'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about-us'>About Us</NavLink>
            <NavLink to='/contact-us'>Contact Us</NavLink>
            <NavLink to='/register'>Register</NavLink>
            <input />
        </nav>
    )


}

