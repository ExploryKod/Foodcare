import { useEffect } from "react";
import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem);
    };

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        // If the quantity of the existing cart item is 1, remove it from the cart
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    } else {
        // Otherwise, decrement the quantity of the existing cart item by 1
        return cartItems.map((cartItem) =>
            cartItem.id === productToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
    }
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () =>  { },
    cartCount: 0,
    total: 0
});

export const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0);

        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        setCartTotal(newCartTotal);
    }, [cartItems]);
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }



    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    };


    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        cartItems,
        cartCount,
        cartTotal,
    };



    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

