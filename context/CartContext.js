import { createContext, useEffect, useState } from "react";

const CartAddItem = ((cartItems, productItem) => {

    const exicting = cartItems.find(cartItem => cartItem.id === productItem.id)

    if(exicting){
        return cartItems.map(cartItem => cartItem.id === productItem.id 
            ? {...productItem, count: cartItem.count + 1}
            :  cartItem
        )
    }

    return [...cartItems, {...productItem, count: 1}];
})

export const CartContext = createContext(
    {
        modalOpen: false,
        setIModalsOpen: () => {},
        cartItems: [],
        addCartItem: () => {},
        cartCount: 0
    }
);

const CartProvider = ({children}) => {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);

    const addCartItem = (productItem) => {
        setCartItems(CartAddItem(cartItems, productItem));
    }

    const value = { modalOpen, setModalOpen, addCartItem, cartItems }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;