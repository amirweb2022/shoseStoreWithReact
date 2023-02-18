import { NavLink } from "react-router-dom";
import { useProductActions } from "../context/Provider/Products/ProductsProvider"
const SortAndFilterLink = ({ item }) => {
    const dispatch = useProductActions()
    const clickHandler = (item) => {
        dispatch({ type: "filter", filter: item })
        if (item.to === "/shop/?sort=lowest" || item.to === "/shop/?sort=hieghst") {
            dispatch({ type: "sort", sort: item})
        }
    }
    return (
        <li className="w-full mb-2">
            <NavLink
                onClick={() => clickHandler(item)}
                to={item.to}
                className="w-full bg-blue-600 text-white inline-block rounded-full py-2 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
            >
                {item.text}
            </NavLink>
        </li>
    );
}

export default SortAndFilterLink;