import axios from 'axios';


export const addNewEmpSuc = () => {
    return {
        type: "ADD_EMPLOYEE_SUC",
    }
}

export const addNewEmpRej = (msg) => {
    return {
        type: "ADD_EMPLOYEE_REJ",
        payload: msg
    }
}

export const singleEmpSuc = (data) => {
    return {
        type: "SINGLE_EMPLOYEE",
        payload: data
    }
}

export const editEmp = (data) => {
    return {
        type: "EDIT_EMPLOYEE",
        payload: data
    }
}

export const deleteEmp = (id) => {
    return {
        type: "DELETE_EMPLOYEE",
        payload: id
    }
}


export const getAllEmps = (data) => {
    return {
        type: "GET_ALL_EMPLOYEES",
        payload: data
    }
}

export const loading = () => {
    return {
        type: "LOADING",
    }
}


export const getAllEmpsAsync = () => {
    return (dispatch) => {
        dispatch(loading());
        axios.get("http://localhost:5100/employees")
            .then((res) => {
                // console.log(res.data)
                dispatch(getAllEmps(res.data));
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const creatEmpAsync = (data) => {

    return dispatch => {
        axios.post("http://localhost:5100/employees", data)
        .then((res)=>{
            dispatch(addNewEmpSuc())
        }).catch((err)=> {
            console.log(err);
            dispatch(addNewEmpRej(err.message))
        })
    }

}
export const singleEmpAsync = (id) => {

    return dispatch => {
        axios.get(`http://localhost:5100/employees/${id}`)
        .then((res)=>{
            dispatch(singleEmpSuc(res.data))
        }).catch((err)=> {
            console.log(err);
            dispatch(addNewEmpRej(err.message))
        })
    }

}