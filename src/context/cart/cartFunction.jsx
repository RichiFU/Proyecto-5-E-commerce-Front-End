
//* Añade productos al carro de compras
// dos paramaetros [items del carritos (en el array), producto a añadir]
export const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem._id === productToAdd._id)

    if (existingCartItem) {

        return cartItems.map((cartItem) =>
            cartItem._id === productToAdd._id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    // retorna un nuevo array con cartItems modificados
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

//* Remueve Productos del carro de compras
export const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem._id === cartItemToRemove._id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem._id !== cartItemToRemove._id)
    }

    return cartItems.map((cartItem) =>
        cartItem._id === cartItemToRemove._id ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}

//* Limpia el carro de compras
export const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem._id !== cartItemToClear._id)
}

