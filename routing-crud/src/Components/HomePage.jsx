import { useState } from "react";
import { getData } from "../services/localstorageData";
import { Container, Table, Button } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEye, FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
    const navigate = useNavigate();
    let [storageData, setStorageData] = useState(getData());
    let [search, setSearch] = useState("");
    const handelDelete = (id) => {
        const updateData = storageData.filter((data) => data.id != id)
        localStorage.setItem('Employees', JSON.stringify(updateData));
        setStorageData(updateData);
    }

    const handelEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    // const handelAsc = () => {
    //     let data = getData();
    //     let sortedData = data.sort((a,b)=> {
    //         return a.firstname.localeCompare(b.firstname);
    //     });
    //     // console.log(sortedData);
    //     setStorageData(sortedData);
    // }
    // const handelDesc = () => {
    //     let data = getData();
    //     let sortedData = data.sort((a,b)=> {
    //         return b.firstname.localeCompare(a.firstname);
    //     });
    //     // console.log(sortedData);
    //     setStorageData(sortedData);
    // }

    const handelSort = (type, field) => {
        let data = getData();
        let sortedData
        if (type == 'asc') {
            sortedData = data.sort((a, b) => {
                return a[field].localeCompare(b[field]);
            });
        }
        else if (type == 'desc') {
            sortedData = data.sort((a, b) => {
                return b[field].localeCompare(a[field]);
            });
        }
        // console.log(sortedData);
        setStorageData(sortedData);
    }

    const handelSearch = () => {
        let data = getData();
        let searchData = data.filter((emp) => {
            return emp.firstname.toLowerCase() == search || emp.lastname.toLowerCase() == search || emp.email.toLowerCase() == search || emp.contactNo == search;
        });
        // console.log("Rewsult ===> ", searchData)
        setStorageData(searchData)
    }

    // useEffect(()=> {
    //     localStorage.setItem('Employees', JSON.stringify(storageData));
    // },[storageData]);
    return (
        <>
            <Container>
                <h3>Home page</h3>
                <br />
                <div>
                    {/* <Button onClick={handelAsc} >A-Z</Button> || <Button onClick={handelDesc}>Z-A</Button> */}
                    || <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} /> <Button onClick={handelSearch}>Search</Button>
                </div>
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name <Button onClick={() => handelSort('asc', 'firstname')}><FaLongArrowAltUp /></Button> || <Button onClick={() => handelSort('desc', 'firstname')}><FaLongArrowAltDown /></Button></th>
                            <th>Last Name <Button onClick={() => handelSort('asc', 'lastname')}><FaLongArrowAltUp /></Button> || <Button onClick={() => handelSort('desc', 'lastname')}><FaLongArrowAltDown /></Button></th>
                            <th>Gender <Button onClick={() => handelSort('asc', 'gender')}><FaLongArrowAltUp /></Button> || <Button onClick={() => handelSort('desc', 'gender')}><FaLongArrowAltDown /></Button></th>
                            <th>Email <Button onClick={() => handelSort('asc', 'email')}><FaLongArrowAltUp /></Button> || <Button onClick={() => handelSort('desc', 'email')}><FaLongArrowAltDown /></Button></th>
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
                                        <Button onClick={() => handelEdit(data.id)} variant="warning">
                                            <FaEdit />
                                        </Button> ||
                                        <Button onClick={() => handelDelete(data.id)} variant="danger">
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