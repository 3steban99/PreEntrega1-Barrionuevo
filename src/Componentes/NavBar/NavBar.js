import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './EstiloNav.css'
import icono from './icono.png'
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="md">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="#home">
                    <img src={icono} alt='Logo de la Tienda'></img>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#">HOME</Nav.Link>
                        <NavDropdown title="PRODUCTOS" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Prueba 1</NavDropdown.Item>
                            <NavDropdown.Item href="#">Prueba 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Prueba 3
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">PREGUNTAS FRECUENTES</Nav.Link>
                        <Nav.Link href="#">CONTACTOS</Nav.Link>
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