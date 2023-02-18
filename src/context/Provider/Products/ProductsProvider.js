import { useContext, useReducer, createContext } from "react";
import productsData from "../../../assets/data/data.js";
const ProductsContext = createContext();
const ProductsContextDispatcher = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "filter": {
            if (action.filter === 'all') {
                return productsData
            } else if (action.filter.text === "اسنیکر") {
                const filterdProduct = productsData.filter(product => product.brand === "sneaker");
                return filterdProduct
            } else if (action.filter.text === 'نایک') {
                const filterdProduct = productsData.filter(product => product.brand === "nike");
                return filterdProduct
            } else {
                return productsData
            }
        }
        case "sort": {
            if (action.sort.text === "گرانترین") {
                const priceDescending = [...productsData].sort(
                    (a, b) => b.price - a.price
                );
                return priceDescending
            } else if (action.sort.text === 'ارزانترین') {
                const priceAscending = [...productsData].sort(
                    (a, b) => a.price - b.price
                );
                return priceAscending
            } else {
                return productsData
            }
        }
        default:
            return state
    }
}

const ProductsProvider = ({ children }) => {
    const [products, dispatch] = useReducer(reducer, productsData);
    return (
        <ProductsContext.Provider value={products}>
            <ProductsContextDispatcher.Provider value={dispatch}>
                {children}
            </ProductsContextDispatcher.Provider>
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;

export const useProduct = () => useContext(ProductsContext);
export const useProductActions = () => useContext(ProductsContextDispatcher);