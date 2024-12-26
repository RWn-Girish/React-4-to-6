import { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { CartContext } from "../Context/CartContex";

const Header = () => {
    const cart = useContext(CartContext);
    console.log(cart.getCartData());
    return (
        <>
            <Container>
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Cart({cart.getCartData().length})
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
};

export default Header;