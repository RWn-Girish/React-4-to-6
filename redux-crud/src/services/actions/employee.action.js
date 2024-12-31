export const addNewEmp = (data) => {
    return {
        type: "ADD_EMPLOYEE",
        payload: data
    }
}

export const singleEmp = (id) => {
    return {
        type: "SINGLE_EMPLOYEE",
        payload: id
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


export const getAllEmps = () => {
    return {
        type: "GET_ALL_EMPLOYEES",
    }
}

export const loading = ()=> {
    return {
        type: "LOADING",
    }
}


export const getAllEmpsAsync = (data) => {
    return (dispatch) => {
        console.log("data --->",data)
        if(!data){
            dispatch(loading());
            setTimeout(()=> {
                dispatch(getAllEmps());
            }, 2000)
        }else{
            dispatch(getAllEmps());
        }

        
    }

}