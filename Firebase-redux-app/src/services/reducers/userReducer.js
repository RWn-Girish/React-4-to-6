const initailState = {
    users: [],
    user: null,
    isLoading: false,
    errMSG: null,
    isCreated: false,
    isUpdated : false
}

export const userReducer = (state = initailState, action) => {
    switch (action.type) {

        case "LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "GET_ALL_USER":
           
            return {
                ...state,
                users: action.payload,
                isLoading: false,
                isUpdated: false,
                isCreated: false
            }
        case "GET_ALL_USER_REJ":
           
            return {
                ...state,
                errMSG: action.payload,
                isLoading: false
            }
        case "ADD_USER_REJ":
           
            return {
                ...state,
                errMSG: action.payload,
            }

        case "ADD_USER":
            return {
                ...state,
                isCreated: true
            };

        case "SINGLE_USER":
            return {
                ...state,
                user: action.payload
            }

        case "UPDATE_USER":
            return {
                ...state,
                isUpdated: true,
                user: null
            }

        case "DELETE_USER":
            let data = JSON.parse(localStorage.getItem('user'));
            let newdata = data.filter((user) => user.fname != action.payload)
            localStorage.setItem("user", JSON.stringify(newdata));
            return {
                ...state,
                users: newdata
            }

        case "DELETE_USER_REJ": 
        return {
            ...state,
            errMSG: action.payload
        }
        default:
            return state;
    }

}