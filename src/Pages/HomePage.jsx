import proudcts from "../assets/data/data";
import { useState, useEffect } from "react";
import CommonSection from "../components/CommonSection/CommonSection";
import ProductListSection from "../components/ProductListSection/ProductListSection";
import CartData from "../components/CartData/CartData";
const HomePage = () => {
  const [sneakerProduct, setSneakerProduct] = useState([]);
  const [nikeProduct, setNikeProduct] = useState([]);
  useEffect(() => {
    const filterdSneakerProducts = proudcts.filter(
      (product) => product.brand === "sneaker"
    );
    const filterdNikeProducts = proudcts.filter(
      (product) => product.brand === "nike"
    );
    setSneakerProduct(filterdSneakerProducts);
    setNikeProduct(filterdNikeProducts);
  }, []);
  return (
    <>
      <CommonSection />
      {/* ProdutsList Sneaker */}
      <ProductListSection ProductData={sneakerProduct} title="محصولات اسنیکر"/>
      {/* ProdutsList Nike */}
      <ProductListSection ProductData={nikeProduct} title="محصولات نایک" />
      {/* Cart Data section in mobile */}
      <CartData />
    </>
  );
};

export default HomePage;