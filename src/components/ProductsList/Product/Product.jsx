import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLikeActions } from "../../../context/Provider/ProductLiked/ProductLikeProvider";
const Product = ({ item }) => {
  const [like, setLike] = useState(false);
  const dispatch = useLikeActions();
  const clickHandler = (product) => {
    setLike(!false);
    dispatch({ type: "ADD_TO_FAVORITE", payload: product, liked: !like });
  };
  return (
    <div className="bg-white shadow-lg shadow-gray-400 my-4 md:w-1/3 lg:w-1/4 rounded-lg overflow-hidden md:ml-3">
      <Link to={`/shop/${item.id}`}>
        <div className="bg-gray-200 rounded-bl-lg rounded-br-lg">
          <img src={item.image} alt="" className="w-full h-auto" />
        </div>
      </Link>
      <div className="p-2 text-xs text-slate-500">
        <span>دسته بندی : </span>
        <span className="font-bold">{item.brand}</span>
      </div>
      <div className="p-2">
        <Link to={`/shop/${item.id}`}>
          <span className="text-gray-500 text-xs">نام محصول : </span>
          <span className="text-slate-700 text-sm font-bold hover:text-blue-400 transition-all duration-200">
            {item.productName}
          </span>
        </Link>
      </div>
      <div className="px-2 py-2 flex justify-between items-center">
        <motion.button
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
          className="bg-blue-500 p-2 rounded-full shadow-lg shadow-blue-400"
          onClick={() => clickHandler(item)}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`${
                like === true ? "w-6 h-6 text-red-400" : "w-6 h-6 text-white"
              }`}
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </span>
        </motion.button>
        <div className="text-sm">
          <span className="ml-1 text-slate-700 font-bold">
            {item.price.toLocaleString("fa-IR")}
          </span>
          <span className="text-gray-500">تومان</span>
        </div>
      </div>
    </div>
  );
};

export default Product;