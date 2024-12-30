const initalState = {
    employees: JSON.parse(localStorage.getItem('Emp')) || [],
    employee: null,
    loading: false
}


export const employeeReducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            let rec = [...state.employees, action.payload];
            localStorage.setItem("Emp", JSON.stringify(rec));
            return {
                ...state,
                employees: [...state.employees, action.payload]
            };

        case "SINGLE_EMPLOYEE":
            let records = JSON.parse(localStorage.getItem('Emp'))
            let singleRec = records.find((emp) => emp.id == action.payload)
            return {
                ...state,
                employee: singleRec
            }

        case "EDIT_EMPLOYEE": {
            let oldData = JSON.parse(localStorage.getItem('Emp'));
            let updateData = oldData.map((emp) => {
                if (emp.id == action.payload.id) {
                    return action.payload
                } else {
                    return emp;
                }
            })
            localStorage.setItem("Emp", JSON.stringify(updateData))
            return {
                ...state,
                employees: updateData
            }
        }

        case "DELETE_EMPLOYEE":{
            let oldData = JSON.parse(localStorage.getItem('Emp'));
            let updateData = oldData.filter((emp) => emp.id != action.payload)
            localStorage.setItem("Emp", JSON.stringify(updateData))
            return {
                ...state,
                employees: updateData,
                loading: false
            }
        }

        case "GET_ALL_EMPLOYEES":{
            let oldData = JSON.parse(localStorage.getItem('Emp'));
            return {
                ...state,
                employees: oldData,
                loading: true
            }}

        default:
            return state;
    }
}