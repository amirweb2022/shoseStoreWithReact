import LikeProvider from "./context/Provider/ProductLiked/ProductLikeProvider";
import Layout from "./Layout/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from "./context/Provider/Cart/CartProvider";
function App() {
  return (
    <CartProvider>
      <LikeProvider>
        <ToastContainer />
        <Layout />
      </LikeProvider>
    </CartProvider>
  );
}

export default App;