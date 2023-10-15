import { NavLink } from "react-router-dom";
import Logo from '../assets/images/logo.jpg';

const Navbar = () => {
    return (
        <div className="navbar-main">
            <div className="navbar-logo-container">
                <img className="navbar-logo" src={Logo} alt="This is the logo"></img>
            </div>
            <div className="navbar-container">
                <NavLink to="/" className="inactive navlink" activeClassName="active">Home</NavLink> 
                <NavLink to="/movies" className="inactive navlink" activeClassName="active">Movies</NavLink> 
                <NavLink to="/login" className="inactive navlink" activeClassName="active">Login</NavLink>
                <NavLink to="/signup" className="inactive navlink" activeClassName="active">Sign-up</NavLink>
            </div>
        </div>
    );
}

export default Navbar;