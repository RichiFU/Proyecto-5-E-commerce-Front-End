
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user/UserContext";

// Estilo
import { Navbar, Nav, NavDropdown, Image, Spinner } from "react-bootstrap";
import CartIcon from "../cartComponents/cartIcon/CartIcon";
import CartDropdown from "../cartComponents/cartDropdown/CartDropdown";
import CartContext from "../../context/cart/CartContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './navigation.css'



const Navigation = () => {

    const { infoUser, signOut, authStatus, verifyToken } = useContext(UserContext)

    const { isCartOpen } = useContext(CartContext)

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getInfoUser = async () => {
            try {
                await verifyToken();
            } catch (error) {
                console.error("Error al obtener información del usuario:", error);
            } finally {
                // Indicar que la carga ha terminado
                setIsLoading(false);
            }
        };
        getInfoUser();
    }, [authStatus]);
    // Al utilizar authStatus como dependencia del efecto, el efecto se ejecute solo cuando authStatus cambie, evitando asi bucles infinitos.


    return (
        <header>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="text-center navbar-color justify-content-between">
                {/* Logo */}
                <Nav.Link as={NavLink} to="/">
                    <Image src="../../../logo-sport-eg.png" className="ms-4 me-5 nav-logo" rounded />
                </Nav.Link>

                <Navbar.Toggle className="me-4" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* Menu principal */}
                    <Nav className="flex-grow-1 justify-content-center">
                        <Nav.Link as={NavLink} to="/" className="fs-5">
                            Inicio
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/products" className="fs-5">
                            Productos
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="fs-5">
                            Sobre Nosotros
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/checkout" className="fs-5">
                            Carro De Compra
                        </Nav.Link>
                    </Nav>

                      {/* Login y Carrito */}
                    <Nav>
                    <div className="d-flex align-items-center justify-content-center"> {/* Contenedor para centrar horizontalmente */}
                            {authStatus ? (
                                <NavDropdown className="fs-5 " title={(
                                    <>
                                        {isLoading ? (
                                            <Spinner animation="border" variant="light" size="sm"  />
                                        ) : (
                                            <>
                                                <AccountCircleIcon className="me-1" />
                                                {infoUser.name}
                                            </>
                                        )}
                                    </>
                                )} id="nav-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/user/profile" className="fs-5">
                                        Mi perfil
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={signOut} className="fs-5">
                                        Cerrar Sesión
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav.Link className="fs-5" as={NavLink} to="/auth">
                                    {isLoading ? <Spinner animation="border" variant="light" size="sm" /> : <AccountCircleIcon className="account-circle-icon" />}
                                </Nav.Link>
                            )}
                        </div>
                        <div className="mr-2 pr-5 d-flex align-items-center justify-content-center cart-icon">
                            <CartIcon />
                        </div>
                        {isCartOpen && <CartDropdown />}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
export default Navigation