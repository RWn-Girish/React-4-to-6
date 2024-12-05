import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";


const getData = () => {
    return JSON.parse(localStorage.getItem('employee')) || []
}

const Employee = () => {
    const [inputForm, setInputForm] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [storage, setStorage] = useState(getData());

    const handelChange = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setInputForm({ ...inputForm, [name]: value });
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(inputForm);
        let id = Math.floor(Math.random() * 10000);
        setStorage([...storage, { ...inputForm, id: id }]);
        setInputForm({
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        })
    }

    const handelDelete = (id) =>{
        // console.log(id)
       const deleteRec = storage.filter((emp)=> emp.id !== id)
        // console.log(deleteRec)
        setStorage(deleteRec)
    }
    useEffect(() => {
        localStorage.setItem('employee', JSON.stringify(storage));
    }, [storage])

    return (
        <>
            <Container>
            {/* insert Record */}
                <Form onSubmit={handelSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextFname">
                        <Form.Label column sm="2">
                            ID
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="id" value={inputForm.id} disabled />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextFname">
                        <Form.Label column sm="2">
                            FirstName
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="firstName" value={inputForm.firstName} onChange={handelChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextLname">
                        <Form.Label column sm="2">
                            LastName
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="lastName" value={inputForm.lastName} onChange={handelChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" name="email" value={inputForm.email} onChange={handelChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" name="password" value={inputForm.password} onChange={handelChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        </Form.Label>
                        <Col sm="10">
                            <Button type="submit" variant="primary">Add Employee</Button>
                        </Col>
                    </Form.Group>
                </Form>
                <hr />

            {/* View Record */}
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storage.map((emp, i) => (
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.lastName}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.password}</td>
                                    <td><button>Edit</button> || <button onClick={ ()=> handelDelete(emp.id)}>Delete</button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </Container>
        </>
    )
};

export default Employee;