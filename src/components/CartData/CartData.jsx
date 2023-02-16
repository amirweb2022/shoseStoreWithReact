import { Link } from "react-router-dom";
import { useCart } from "../../context/Provider/Cart/CartProvider";
const CartData = () => {
  const { cart, total } = useCart();
  if(!cart.length) {
    return (
        <section></section>
    )
  }
  return (
    <section className="fixed bottom-0 z- w-full bg-white shadow-lg shadow-slate-600 flex justify-between items-center px-2 py-3 md:hidden">
      <div className="w-1/2">
        <button className="bg-blue-500 text-white shadow-md shadow-blue-400 py-2 w-full rounded-md">
          <Link to="/login?redirect=checkout">ادامه سفارش</Link>
        </button>
      </div>
      <div className="w-1/2 text-left flex justify-end items-center">
        <span className="ml-2 text-lg font-bold">{total.toLocaleString("fa-IR")}</span>
        <span className="text-sm text-gray-400">تومان</span>
      </div>
    </section>
  );
};

export default CartData;