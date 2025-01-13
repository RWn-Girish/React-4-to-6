import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { singleUserAsync, updateUser, updateUserAsync } from "../services/actions/userAction";

const EditComp = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { user, isUpdated, errMSG } = useSelector(state => state.userReducer)


    const [formInput, setFormInput] = useState({
        id: "",
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
        dispatch(updateUserAsync(formInput))
    }


    useEffect(() => {
        dispatch(singleUserAsync(id))
    }, [])

    useEffect(()=> {
        if(user)
        setFormInput(user)
    }, [user])

    useEffect(()=> {
        if(isUpdated)
            navigate("/")
    }, [isUpdated])

    return (
        <>
            <Container>
                <Form onSubmit={handelSubmit}>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Name:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="fname" value={formInput.fname} onChange={handelChanged} placeholder="Enter name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Email:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="email" value={formInput.email} onChange={handelChanged} placeholder="Enter email" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Password:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" name="password" value={formInput.password} onChange={handelChanged} placeholder="Enter Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                        </Form.Label>
                        <Col sm="10">
                            <Button type="submit">Edit User</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default EditComp;