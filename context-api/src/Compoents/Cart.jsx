import { useContext } from "react";
import { CartContext } from "../Context/CartContex";
import { Container, Table } from "react-bootstrap";

const Cart = () => {

    const cart = useContext(CartContext);
    // console.log("cart ===> ", cart.getCartData());
    let cartData = cart.getCartData();

    return (
        <>
            {
                cartData.length > 0 && <Container>
                <h2>Cart Items</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartData.map((cart, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{cart.title}</td>
                                    <td>{cart.price}</td>
                                    <td>{cart.quantity}</td>
                                    <td>{cart.quantity * cart.price}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </Container>
            }
        </>
    )
};

export default Cart;