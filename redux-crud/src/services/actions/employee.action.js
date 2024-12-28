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