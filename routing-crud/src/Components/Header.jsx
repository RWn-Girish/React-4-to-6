import { Button, Container, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate();

    const handelClick = () => {
        navigate("/add")
    };

    return (
        <>
            <Navbar style={{backgroundColor: ' #87CEEB'}}>
                <Container>
                    <Navbar.Brand href="/" className='fw-bold'>Emplyoees</Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button variant='warning' onClick={handelClick}>Add Emplyoee</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default Header;