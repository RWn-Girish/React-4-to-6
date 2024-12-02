import { Card } from "react-bootstrap";

const CardComp = ({name, email, lname}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{lname}</Card.Subtitle>
                <Card.Text>
                    {email}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default CardComp;