const initalState = {
    employees: JSON.parse(localStorage.getItem('Emp')) || [],
    employee: null,
    isCreated: false,
    isEdited: false
}


export const employeeReducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            let rec = [...state.employees, action.payload];
            localStorage.setItem("Emp", JSON.stringify(rec));
            return {
                ...state,
                employees : [...state.employees, action.payload]
            };
        default:
            return state;
    }
}