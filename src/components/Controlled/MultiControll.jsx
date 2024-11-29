import { useState } from "react";

const MultiControll = () =>{
    const intialState = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        hobbie: ""
    }
    const [inputForm, setIntpuForm] = useState(intialState);
    const [errors, setErrors] = useState({});
    
    const handelInput = (e)=>{
        const {name, value} = e.target;
        setIntpuForm({...inputForm, [name]: value})
       
    }

    const validation = () =>{
        let formErrors = {};
        if(inputForm.fname === ""){
            formErrors.fname = " * First name is Required"
        }else{
            if(inputForm.fname.length < 3){
                formErrors.fname = " * First name length is minimum 3  or more"
            }
        }

        if(inputForm.lname === ""){
            formErrors.lname = "* last name is Required."
        }
        if(inputForm.email === ""){
            formErrors.email = "* Email is Required."
        }
        if(inputForm.password === ""){
            formErrors.password = "* Password is Required."
        }

        if(inputForm.hobbie === ""){
            formErrors.hobbie = "* Hobbie is Required"
        }
            setErrors(formErrors);
        
        if(Object.keys(formErrors).length > 0){
            return false;
        }else{
            return true;
        }

    }
    const handelSubmit = (e)=>{
        e.preventDefault();
        if(validation()){
            console.log('Form Submit')
            console.log("Form Input ===> ", inputForm);
            setIntpuForm(intialState);
        }else{
            console.log('Form is not Submited')
        }
        
    }
    return (
        <>
            <h1>MultiControll Components</h1>
            <form onSubmit={(e)=>handelSubmit(e)}>
                <label>First Name: </label>
                <input 
                    type="text" 
                    name="fname" 
                    value={inputForm.fname} 
                    onChange={handelInput}  
                    style={{borderColor : errors.fname ? 'Red' : ''}}
                    />
                 {errors.fname ? <i style={{color: 'Red'}}>{errors.fname}</i> : ''}   
                <br/>
                <label>Last Name: </label>
                <input type="text" name="lname" value={inputForm.lname} onChange={handelInput}  />
                {errors.lname ? <i>{errors.lname}</i> : ''}
                <br/>
                <label>Email: </label>
                <input type="text" name="email" value={inputForm.email} onChange={handelInput}/>
                {errors.email ? <i>{errors.email}</i> : ''}
                <br/>
                <label>Password: </label>
                <input type="text" name="password" value={inputForm.password} onChange={handelInput}/>
                {errors.password ? <i>{errors.password}</i> : ''}
                <br/>
                <label>hobbie: </label>
                <input type="text" name="hobbie" value={inputForm.hobbie} onChange={handelInput}/>
                {errors.hobbie ? <i>{errors.hobbie}</i> : ""}
                <br/>
                <button type="submit"> Submit</button>
            </form>
        </>
    )
}

export default MultiControll;