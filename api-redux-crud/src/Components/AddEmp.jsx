import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { creatEmpAsync } from '../services/actions/employee.action';
import generateUniqueId from "generate-unique-id";
import { useNavigate } from "react-router"


function AddEmp() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isCreated, errMSG} = useSelector(state => state.employeeReducer);
    const [inputForm, setInputForm] = useState({
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        contactNo: "",
        gender: "",
        DOB: ""
    });

    const handelChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({ ...inputForm, [name]: value })
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        let id = generateUniqueId({
            length: 6,
            useLetters: false
        });
        // console.log("Form Submit", { ...inputForm, id });
        dispatch(creatEmpAsync({ ...inputForm, id }))
    }

    useEffect(()=> {
        if(isCreated){
            navigate("/")
        }

    }, [isCreated])
    return (
        <>
            <Container>
                <p>{errMSG ? errMSG : ""}</p>
                <h2 className="text-center mb-4">Add New Employee Details</h2>
                <Form onSubmit={handelSubmit}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Firstname:
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control type="text" name="firstname" value={inputForm.firstname} onChange={handelChanged} />
                        </Col>
                        <Form.Label column sm="2">
                            Lastname:
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control type="text" name="lastname" value={inputForm.lastname} onChange={handelChanged} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Email:
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control type="text" name="email" value={inputForm.email} onChange={handelChanged} />
                        </Col>
                        <Form.Label column sm="2">
                            Contact No:
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control type="text" name="contactNo" value={inputForm.contactNo} onChange={handelChanged} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Gender:
                        </Form.Label>
                        <Col sm="1">
                            <Form.Check
                                type="radio"
                                label='Male'
                                name='gender'
                                value={'Male'}
                                onChange={handelChanged}
                            />
                        </Col>
                        <Col sm="1">
                            <Form.Check
                                type="radio"
                                label='Female'
                                name='gender'
                                value={'Female'}
                                onChange={handelChanged}
                            />
                        </Col>
                        <Col sm="1"></Col>
                        <Form.Label column sm="2">
                            Date Of Birth:
                        </Form.Label>
                        <Col sm="2">
                            <Form.Control type="date" name="DOB" value={inputForm.DOB} onChange={handelChanged} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 mt-4" >
                        <Form.Label column sm="5">
                        </Form.Label>
                        <Col sm="5">
                            <Button type="submit">Add Employee</Button>
                        </Col>
                    </Form.Group>


                </Form>
            </Container>
        </>
    )
}

export default AddEmp
