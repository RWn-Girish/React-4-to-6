import { useState } from "react";
import { getData } from "../services/localstorageData";
import { Container, Table, Button } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
    const navigate = useNavigate();
    let [storageData, setStorageData] = useState(getData());

    const handelDelete = (id) => {
        const updateData = storageData.filter((data)=> data.id != id)
        localStorage.setItem('Employees', JSON.stringify(updateData));
        setStorageData(updateData);
    }

    const handelEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    // useEffect(()=> {
    //     localStorage.setItem('Employees', JSON.stringify(storageData));
    // },[storageData]);
    return (
        <>
            <Container>
                <h3>Home page</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>DOB</th>
                            <th>ConatactNo</th>
                            <th>Acitons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storageData.map((data) => (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.firstname}</td>
                                    <td>{data.lastname}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.email}</td>
                                    <td>{data.DOB}</td>
                                    <td>{data.contactNo}</td>
                                    <td><Button>
                                        <FaEye />
                                        </Button> ||
                                        <Button onClick={()=>handelEdit(data.id)} variant="warning">
                                            <FaEdit />
                                        </Button> ||
                                        <Button onClick={()=>handelDelete(data.id)} variant="danger">
                                            <FaTrash />
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>

        </>
    )
};

export default HomePage;