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
const decrementProductFromCart = (state, payload) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === payload.id
    );
    const updatedSizeIndex = updatedCart.findIndex(
        (item) => item.size === payload.size
    );
    const updatedItem = { ...updatedCart[updatedItemIndex || updatedSizeIndex] };
    if (updatedItem.quantity === 1) {
        const filteredCartWithId = updatedCart.filter((item) => item.id !== payload.id);
        const filteredCartWithSize = updatedCart.filter((item) => item.size !== payload.size);
        return {
            ...state,
            cart: filteredCartWithId && filteredCartWithSize,
            total: state.total - payload.price,
        };
    } else {
        updatedItem.quantity--;
        updatedCart[updatedItemIndex || updatedSizeIndex] = updatedItem;
        return {
            ...state,
            cart: updatedCart,
            total: state.total - payload.price,
        };
    }
};

const removeProductFromCart = (state, payload) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === payload.id
    );
    const updatedSizeIndex = updatedCart.findIndex(
        (item) => item.size === payload.size
    );
    const updatedItem = { ...updatedCart[updatedItemIndex || updatedSizeIndex] };
    if (updatedItem.quantity) {
        const filteredCartWithId = updatedCart.filter((item) => item.id !== payload.id);
        const filteredCartWithSize = updatedCart.filter((item) => item.size !== payload.size);
        return {
            ...state,
            cart: filteredCartWithId && filteredCartWithSize,
            total: state.total - payload.price * payload.quantity,
        };
    }
};
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return addProductToCart(state, action.payload);
        case "DECREMENT_PRODUCT":
            return decrementProductFromCart(state, action.payload);
        case "REMOVE_PRODUCT":
            return removeProductFromCart(state, action.payload);
        default:
            return state;
    }
};

export default cartReducer;