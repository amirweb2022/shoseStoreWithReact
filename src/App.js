import LikeProvider from "./context/Provider/ProductLiked/ProductLikeProvider";
import Layout from "./Layout/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from "./context/Provider/Cart/CartProvider";
import ProductsProvider from "./context/Provider/Products/ProductsProvider"
import AuthProvider from "./context/Provider/Auth/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <LikeProvider>
          <ProductsProvider>
            <ToastContainer />
            <Layout />
          </ProductsProvider>
        </LikeProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;