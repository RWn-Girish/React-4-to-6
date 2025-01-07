
const initalState = {
    employees: [],
    employee: null,
    loading: false,
    errMSG: null,
    isCreated: false
}


export const employeeReducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_EMPLOYEE_SUC":
            return {
                ...state,
                isCreated: true
            };

        case "ADD_EMPLOYEE_REJ"  : 
        return {
            ...state,
            errMSG: action.payload,
        }

        case "SINGLE_EMPLOYEE":
            return {
                ...state,
                employee: action.payload
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
                employees: updateData,
                loading: true
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
    
            return {
                ...state,
                employees: action.payload,
                loading: false
            }}
        
            case "LOADING" : 
            return {
                ...state,
                loading: true
            } 

        default:
            return state;
    }
}