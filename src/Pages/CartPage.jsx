import ForwardLinkSection from "../components/ForwardLinkSection/ForwardLinkSection";
import ForwardLink from "../components/ForwardLink/ForwardLink";
import { useCart } from "../context/Provider/Cart/CartProvider";
import { Link } from "react-router-dom";
import CartProductList from "../components/CartProductList/CartProductList";
const CartPage = () => {
  const { cart, total } = useCart();

  if (cart.length === 0) {
    return (
      <section className="w-full text-center mt-4 h-screen">
        <p className="mb-4">محصولی در سبد خرید ندارید!</p>
        <Link to="/shop" className="bg-blue-500 text-white p-3">
          رفتن به فروشگاه
        </Link>
      </section>
    );
  }
  return (
    <section className="h-auto md:h-screen">
      {/* forward Link */}
      <ForwardLinkSection>
        <ForwardLink href="/" text="خانه" />
        <ForwardLink href="/cart" text="سبد خرید" />
      </ForwardLinkSection>

      <div className="w-full py-3 mt-3 px-2 max-w-6xl mx-auto">
        <div className="md:w-4/5 lg:w-11/12 md:mx-auto flex flex-col justify-center items-center md:flex-row md:justify-start">
          <div className="flex flex-col justify-center items-center w-full md:w-2/3">
            <CartProductList data={cart} />
          </div>
          {/* cart summery */}
          <CartSummery total={total} cart={cart} />
        </div>
      </div>
    </section>
  );
};
export default CartPage;
export const CartSummery = ({ total, cart }) => {
  return (
    <div
      className="flex justify-center items-center flex-col w-full bg-stone-50 shadow-md mt-4 
    rounded-md py-3 md:py-4 md:mr-3 md:w-1/3"
    >
      <div className="flex justify-between items-center w-full px-3">
        <span className="text-slate-600 text-sm">مجموعه قیمت :</span>
        <span className="text-blue-500 font-bold text-lg">
          {total.toLocaleString("fa-IR")}
        </span>
      </div>
      <div className="flex justify-between items-center w-full px-3 mt-2">
        <span className="text-slate-600 text-sm">تعداد محصول :</span>
        <span className="text-blue-500 font-bold text-lg">{cart.length}</span>
      </div>
      <div className="flex justify-center flex-col items-center w-full px-3 mt-2">
        <button className="w-full bg-blue-500 text-white rounded-md py-3 shadow-md shadow-blue-500">
          <Link to="/auth?redirect=checkout">ادامه فرایند خرید</Link>
        </button>
        <button className="w-full bg-transparent text-blue-500 rounded-md py-3 mt-3 border-2 border-blue-400">
          <Link to="/shop">رفتن به فروشگاه</Link>
        </button>
      </div>
    </div>
  );
};