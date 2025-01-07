import React, { useEffect } from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { deleteEmp, getAllEmps, getAllEmpsAsync } from '../services/actions/employee.action';

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { employees, loading } = useSelector(state => state.employeeReducer);
    
    const handelEdit = (id) => {
        navigate(`/edit/${id}`);
    }

    const handelDelete = (id) => {
        dispatch(deleteEmp(id))
    }

    useEffect(() => {
        dispatch(getAllEmpsAsync())
    }, [])
    return (
        <>
            <Container>
                <h2>View Employees Details</h2>
                {
                    loading ? <div>

                        <div className="spinner-border text-dark" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div> :
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>ContactNo</th>
                                    <th>Gender</th>
                                    <th>DOB</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    employees.map((emp) => (
                                        <tr key={emp.id}>
                                            <td>{emp.id}</td>
                                            <td>{emp.firstname}</td>
                                            <td>{emp.lastname}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.contactNo}</td>
                                            <td>{emp.gender}</td>
                                            <td>{emp.DOB.split("-").reverse().join("/")}</td>
                                            <td>
                                                <Button variant='info'>
                                                    <FaEye />
                                                </Button> ||
                                                <Button onClick={() => handelEdit(emp.id)} variant='warning'>
                                                    <FaEdit />
                                                </Button> ||
                                                <Button onClick={() => handelDelete(emp.id)} variant='danger'>
                                                    <FaTrash />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </Table>}
            </Container>
        </>
    )
}

export default Home
