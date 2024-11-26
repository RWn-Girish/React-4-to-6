import { useRef } from "react";


const UnControll = () =>{
    const fname = useRef(null);
    const email = useRef(null);

    const handelSubmit =  (e) =>{
        e.preventDefault();
        console.log('Click')
        console.log('Full Name: ==> ', fname.current.value)
        console.log('Email: ==> ', email.current.value)

        fname.current.value  = ""
        email.current.value  = ""
    }
    return (
        <>
            <h1>UnControll Component</h1>
            <form onSubmit={(e)=>handelSubmit(e)}>
                <label>Name: </label>
                <input type="text" name="fullname" ref={fname}  /><br/>
                <label>Email: </label>
                <input type="text" name="email"  ref={email} /><br/>
                <button type="submit"> Submit</button>
            </form>
        </>
    )
}

export default UnControll;