const addProductToCart = (state, payload) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === payload.id
    );

    const updatedSizeIndex = updatedCart.findIndex(
        (item) => item.size === payload.size
    );
    if (updatedItemIndex < 0) {
        updatedCart.push({ ...payload, quantity: 1 });
    } else if (updatedSizeIndex < 0) {
        updatedCart.push({ ...payload, quantity: 1 });
    } else {
        const updatedItem = { ...updatedCart[updatedItemIndex || updatedSizeIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex || updatedSizeIndex] = updatedItem;
    }
    return {
        ...state,
        cart: updatedCart,
        total: state.total + payload.price,
    };
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return addProductToCart(state, action.payload);
        default:
            return state;
    }
};

export default cartReducer;