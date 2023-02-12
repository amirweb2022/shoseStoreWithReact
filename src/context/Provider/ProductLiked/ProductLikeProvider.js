import { useContext, useReducer, createContext } from "react";
import likeReducer from "./ProductLikeReducer";
const LikeContext = createContext();
const LikeContextDispatcher = createContext();

const initialState = {
  likedProduct: [],
};

const LikeProvider = ({ children }) => {
  const [likedProduct, dispatch] = useReducer(likeReducer, initialState);
  return (
    <LikeContext.Provider value={likedProduct}>
      <LikeContextDispatcher.Provider value={dispatch}>
        {children}
      </LikeContextDispatcher.Provider>
    </LikeContext.Provider>
  );
};

export default LikeProvider;

export const useLike = () => useContext(LikeContext);
export const useLikeActions = () => useContext(LikeContextDispatcher);