import { useState } from "react";
import { useNavigate } from "react-router";

const Controll = () =>{

    const navigate = useNavigate();
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    // state using handel react
    const handelName = (e)=>{
        setFname(e.target.value);
       
    }
    const handelEmail = (e)=>{
        setEmail(e.target.value);
    }
    const handelSubmit = (e)=>{
        e.preventDefault();
        console.log('fullname: => ', fname);
        console.log('Email: => ', email);
        setEmail("")
        setFname("")
        navigate('/')
    }

    const handelClick = () => {
            navigate('/120')
    }
    return (
        <>
            <h1>Controll Components</h1>
            <button onClick={handelClick}>Home</button>
            <form onSubmit={(e)=>handelSubmit(e)}>
                <label>Name: </label>
                <input type="text" name="fullname" value={fname} onChange={handelName} /><br/>
                <label>Email: </label>
                <input type="text" name="email" value={email} onChange={handelEmail} /><br/>
                <button type="submit"> Submit</button>
            </form>
        </>
    )
}

export default Controll;