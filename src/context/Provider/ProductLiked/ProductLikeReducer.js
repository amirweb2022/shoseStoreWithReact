const addProductToFavorite = (state, payload, liked) => {
    const updatedFavorite = [...state.likedProduct];
    const updatedItemIndex = updatedFavorite.findIndex(
        (item) => item.id === payload.id
    );

    if (updatedItemIndex < 0) {
        updatedFavorite.push({ ...payload, like: liked });
    } else {
        const updatedItem = { ...updatedFavorite[updatedItemIndex] };
        updatedItem.like = liked;
        updatedFavorite[updatedItemIndex] = updatedItem;
    }
    return {
        ...state,
        likedProduct: updatedFavorite,
    };
};

const likeReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITE":
            return addProductToFavorite(state, action.payload, action.liked);
        default:
            return state;
    }
};

export default likeReducer;