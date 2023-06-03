import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './EstiloNav.css'
import icono from './icono.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Navbar sticky='top' collapseOnSelect expand="md">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Link to={'/'} class='navbar-brand'>
                    <img class='logoTienda' src={icono} alt='Logo de la Tienda'></img>
                </Link>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Link class='nav-link' to={'/'}>HOME</Link>
                        <NavDropdown title="PRODUCTOS" id="collasible-nav-dropdown">
                            <Link class='dropdown-item' to={'/verTodo'}>VER TODO</Link>
                            <NavDropdown.Divider />
                            <Link to={'/category/ropa'} class='dropdown-item'>PRENDA</Link>
                            <Link to={'/category/sport'} class='dropdown-item'>SPORT</Link>
                            <Link to={'/category/productos sports'} class='dropdown-item'>PRODUCTOS SPORTS</Link>
                        </NavDropdown>
                        <Link class='nav-link' to={'/preguntas'}>PREGUNTAS FRECUENTES</Link>
                        <Link class='nav-link' to={'/contactos'}>CONTACTOS</Link>
                    </Nav>
                    <Nav class="navbar-nav">
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;