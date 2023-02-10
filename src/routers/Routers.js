import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import CartPage from '../Pages/CartPage';
import CheckoutPage from '../Pages/CheckoutPage';
import LoginPage from '../Pages/LoginPage';
import ProductDetailPage from '../Pages/ProductDetailPage';
import ShopPage from '../Pages/ShopPage';
import SignupPage from '../Pages/SignupPage';
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    );
}

export default Routers;