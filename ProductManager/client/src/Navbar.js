import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/new'>Create New Product</NavLink>
        </nav>
    )
}

export default Navbar;