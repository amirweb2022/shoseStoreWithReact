import LikeProvider from "./context/Provider/ProductLiked/ProductLikeProvider";
import Layout from "./Layout/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from "./context/Provider/Cart/CartProvider";
import ProductsProvider from "./context/Provider/Products/ProductsProvider"
function App() {
  return (
    <CartProvider>
      <LikeProvider>
        <ToastContainer />
        <ProductsProvider>
          <Layout />
        </ProductsProvider>
      </LikeProvider>
    </CartProvider>
  );
}

export default App;