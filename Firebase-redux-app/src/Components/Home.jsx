import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteUserAsync, getAllUserAsync } from "../services/actions/userAction";
import { useEffect } from "react";

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {users, isLoading, errMSG} = useSelector(state => state.userReducer);
    const handelEdit = (id) => {
        navigate(`/edit/${id}`);
    }

    const handelDelete = (id) => {
        dispatch(deleteUserAsync(id))
    }

    useEffect(()=> {
        dispatch(getAllUserAsync())
    }, [])
    return (
        <>
        {errMSG ? <p>{errMSG}</p> : ""}
            <h3>Home Page</h3>
            {isLoading ? <h3>Loading......</h3> : <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i)=> (
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>
                                    {user.fname}
                                </td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td><button onClick={()=> handelEdit(user.id)}>Edit</button></td>
                                <td><button onClick={()=> handelDelete(user.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>}
        </>
    )
};

export default Home;