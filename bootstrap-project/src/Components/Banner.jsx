import { Card, Col, Container, Row } from "react-bootstrap";
import CardComp from "./CardComp";

const Banner = () => {
    let userData = [
        {
            id:1,
            name: "Suresh",
            lname: "Asodariya",
            email: "suresh@test.in",
        },
        {
            id:2,
            name: "Meet",
            lname: "Bavishi",
            email: "meet@test.in",
        },
        {
            id:3,
            name: "Zeel",
            lname: "Sabhaya",
            email: "zeel@test.in",
        },
    ]
    return (
        <>
            <Container className="mt-3">
                <Row className="d-flex flex-row">
                    {userData.map((user)=>(
                        <Col key={user.id} className="p-2">
                            <CardComp name={user.name} email={user.email} lname={user.lname} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
};

export default Banner;