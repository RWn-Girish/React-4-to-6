import { Link } from "react-router"

const Header = () => {
    return(
        <>
            <Link to={"/150"} >Home</Link> || 
            <Link to={"/about"} >About</Link> || 
            <Link to={"/contact"} >Contact</Link>
        </>
    )
};

export default Header;