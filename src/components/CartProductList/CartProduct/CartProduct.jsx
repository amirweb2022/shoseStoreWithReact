import { useCartActions } from "../../../context/Provider/Cart/CartProvider";
const CartProduct = ({ item }) => {
  const dispatch = useCartActions();
  const incrementHadnler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  const decrementHandler = (item) => {
    dispatch({ type: "DECREMENT_PRODUCT", payload: item });
  };
  const removeProduct = (item) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: item });
  };
  return (
    <div className="w-full bg-stone-50 shadow-md rounded-md py-2 flex justify-between items-center mt-3">
      <div className="flex justify-center items-center">
        <div className="w-20 md:w-28">
          <img
            src={item.image}
            className="w-full h-auto"
            alt={item.productName}
          />
        </div>
        <div className="flex flex-col justify-center items-center h-full py-3 mr-1">
          <p className="text-xs md:text-base text-slate-600">
            {item.productName.substring(0, 16)} ({item.size})
          </p>
          <span className="mt-3 text-sm md:text-base text-blue-500 font-bold">
            {item.price.toLocaleString("fa-IR")} تومان
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end h-20 ml-3 w-16">
        <button className="mb-3" onClick={() => removeProduct(item)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-red-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex justify-center items-center w-full">
          <button
            className="bg-blue-400 text-white rounded-full w-7 h-6"
            onClick={() => incrementHadnler(item)}
          >
            <span className="text-lg">+</span>
          </button>
          <span className="mx-1">{item.quantity}</span>
          <button
            className="bg-red-300 text-white rounded-full w-7 h-6"
            onClick={() => decrementHandler(item)}
          >
            <span className="text-lg">-</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;