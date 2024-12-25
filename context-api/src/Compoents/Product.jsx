import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import Cart from './Cart';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContex';

const Product = () => {
    const cart = useContext(CartContext);
    const products = [
        {
            id: 1,
            title: "Product 1",
            desc: "prodcut 1 vsdvsgszcvsvzsczxccvzxc",
            price: "20"
        },
        {
            id: 2,
            title: "Product 2",
            desc: "prodcut 2 vsdvsgszcvsvzsczxccvzxc",
            price: "45"
        },
        {
            id: 3,
            title: "Product 3",
            desc: "prodcut 3 vsdvsgszcvsvzsczxccvzxc",
            price: "30"
        },
        {
            id: 4,
            title: "Product 4",
            desc: "prodcut 4 vsdvsgszcvsvzsczxccvzxc",
            price: "25"
        },
        {
            id: 5,
            title: "Product 5",
            desc: "prodcut 5 vsdvsgszcvsvzsczxccvzxc",
            price: "49"
        },
        {
            id: 6,
            title: "Product 6",
            desc: "prodcut 6 vsdvsgszcvsvzsczxccvzxc",
            price: "35"
        },
    ]

    const handelClick = (id) => {
        let cartItem = products.find(prod => prod.id == id)
        // console.log("Cart Item ===> ", cartItem);
        cart.addToCart({...cartItem, quantity: 1})
    }
    return (
        <>
            <Container className='mt-3'>
                <Row>
                    {
                        products.map((product) => (
                            <Col className='mb-3' key={product.id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            {product.desc}
                                        </Card.Text>
                                        <Card.Text>
                                          Price:  ${product.price}
                                        </Card.Text>
                                        <Button onClick={()=>handelClick(product.id)} variant="primary">Add To Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
                <hr/>
                <Cart />
            </Container>
        </>
    )
};

export default Product;