
import "./NavBar.css"
import  CartWidget from './CartWidget/CartWidget.js';

const NavBar = () => {

    return(
        <nav className="NavBar">
            <ul>
                <li> <a href="">Inicio</a></li>
                <li><a href=""> Productos </a></li>
                <li><a href=""> Nosotros</a></li>
                <li><a href="">Contáctanos</a></li>
                <li><CartWidget/></li>
            </ul>
        </nav>
    )
}

export default NavBar;
