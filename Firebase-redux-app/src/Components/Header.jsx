import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signOutAync } from "../services/actions/auth.action";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.authReducer)
    const handleLogin = () => {
        navigate("/signin");
    }
    const handleLogOut = () => {
        dispatch(signOutAync());
    }
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav.Link href="/add">Add</Nav.Link>
                    </Navbar.Collapse>
                    {user ? <button onClick={handleLogOut}>LogOut</button> : <button onClick={handleLogin}>SignIn</button>}
                </Container>
            </Navbar>
        </>
    )
}

export default Header;