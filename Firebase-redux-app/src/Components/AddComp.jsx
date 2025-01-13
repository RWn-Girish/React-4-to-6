import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { createUserAsync } from "../services/actions/userAction";

const AddComp = () => {
    const dispatch = useDispatch()
    const {isCreated, errMSG} = useSelector(state => state.userReducer);
    const navigate = useNavigate();
    const [formInput, setFormInput] = useState({
        fname: "",
        email: "",
        password: ""
    })

    const handelChanged = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        // console.log('Form Sumbit', formInput);
        dispatch(createUserAsync(formInput))
    }

    useEffect(()=> {
        if(isCreated){
            navigate("/")
        }
    }, [isCreated])
    return (
        <>
            <Container>
                {errMSG ? <h3>{errMSG}</h3> : ""}
                <Form onSubmit={handelSubmit}>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Name:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="fname" onChange={handelChanged} placeholder="Enter name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Email:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="email" onChange={handelChanged} placeholder="Enter email" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Password:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" name="password" onChange={handelChanged} placeholder="Enter Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                        </Form.Label>
                        <Col sm="10">
                            <Button type="submit">Register Now</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default AddComp;