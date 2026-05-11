import { Link } from "react-router-dom"
import './Header.css'

function Header({ title }) {
    return(
        <>
        <h1>{title}</h1>
        <nav>
            <Link to="/">Home</Link>
            &nbsp;
            <Link to="/products">Products</Link>
        </nav>
        </>
    )    
}

export default Header; 