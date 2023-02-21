import { useAuth } from "../context/Provider/Auth/AuthProvider";
import { useCart } from "../context/Provider/Cart/CartProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Checkout = () => {
  const userInfo = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const clickHandler = () => {
    window.location.reload();
    navigate("/");
    toast.success('پرداخت با موفقیت انجام شد')
  };

  if (!cart.length) {
    navigate("/");
  }
  return (
    <div className="w-full py-3 mt-3 px-2 max-w-6xl mx-auto md:h-screen">
      <div className="md:w-4/5 lg:w-11/12 md:mx-auto flex flex-col justify-center items-center bg-white shadow-md py-4 rounded-md">
        <div className="w-full flex justify-between items-center px-2">
          <span>ایمیل :</span>
          <span>{userInfo.email}</span>
        </div>
        {cart.map((c) => {
          return (
            <div className="w-full flex justify-between items-center px-2 mt-2">
              <span>نام محصول :</span>
              <span>{c.productName}</span>
            </div>
          );
        })}
        <div className="w-full flex justify-between items-center px-2 mt-2">
          <button
            className="w-full text-white bg-blue-500 py-3 shadow-md shadow-blue-500"
            onClick={clickHandler}
          >
            <Link to="/">پرداخت</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;