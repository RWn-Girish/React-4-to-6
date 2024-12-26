

export const myReducer = (state, action) =>{
    switch(action.type){
        case "INCREMENT": 
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREMENT" :
            if(state.count> 0)
            return {
                ...state,
                count: state.count - 1
            }
            else{
                alert('Count value is Zero')
                return state;
            }
        default:
            return state;
    }
}