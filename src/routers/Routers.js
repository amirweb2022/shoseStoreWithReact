import { Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import CartPage from '../Pages/CartPage';
import CheckoutPage from '../Pages/CheckoutPage';
import AuthPage from '../Pages/AuthPage';
import ProductDetailPage from '../Pages/ProductDetailPage';
import ShopPage from '../Pages/ShopPage';
import ProductLikeListPage from "../Pages/ProductLikeListPage";
const Routers = () => {
    return (
        <Routes>
            <Route path="/shop/:id" element={<ProductDetailPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/favorite" element={<ProductLikeListPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/auth/checkout" element={<CheckoutPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default Routers;