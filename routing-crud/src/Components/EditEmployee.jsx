import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";
import { getData } from "../services/localstorageData";

const EditEmployee = () => {
    const {id} = useParams();
    const navigate = useNavigate();
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

        let updateRecords = getData().map((emp)=> {
            if(emp.id == inputForm.id){
                return {...inputForm}
            }else{
                return emp;
            }
        });
        localStorage.setItem('Employees', JSON.stringify(updateRecords));
        navigate("/");

    } ;

    useEffect(()=> {
            let storageData = getData();
            let singleRecord = storageData.find((emp) => emp.id == id)
            // console.log(singleRecord)
            setInputForm(singleRecord);
    },[])
    return (
        <>
           <Container>
                <h2 className="text-center mb-4">Edit Employee Details</h2>
                <Form onSubmit={handelSubmit}>
                <Form.Control type="text" name="id" value={inputForm.id} hidden />
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
                                checked= {inputForm.gender == "Male"}
                            />
                        </Col>
                        <Col sm="1">
                            <Form.Check
                                type="radio"
                                label='Female'
                                name='gender'
                                value={'Female'}
                                onChange={handelChanged}
                                checked= {inputForm.gender == "Female"}
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
                            <Button type="submit">Update Employee</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
};

export default EditEmployee;