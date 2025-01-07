const initalState = {
    products: [],
    product: null,
}


export const productReducer = (state = initalState, action) => {
    switch (action.type) {
        case 1:
            return state;
        default:
            return state
    }
};