import { Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import CartPage from '../Pages/CartPage';
import CheckoutPage from '../Pages/CheckoutPage';
import LoginPage from '../Pages/LoginPage';
import ProductDetailPage from '../Pages/ProductDetailPage';
import ShopPage from '../Pages/ShopPage';
import SignupPage from '../Pages/SignupPage';
import ProductLikeListPage from "../Pages/ProductLikeListPage";
const Routers = () => {
    return (
        <Routes>
            <Route path="/shop/:id" element={<ProductDetailPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/favorite" element={<ProductLikeListPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default Routers;