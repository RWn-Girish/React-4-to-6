import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext(null);


export const CartProvider = ({ children }) => {
    let [cartItem, setCartItems] = useState([]);
    let addToCart = (data) => {
        setCartItems([...cartItem, data]);
    } 
    let getCartData = () => {
        return cartItem;
    }

    return (
        <CartContext.Provider value={{ addToCart, getCartData }}>
            {children}
        </CartContext.Provider>
    )
};