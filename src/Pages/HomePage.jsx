import logo from "../assets/images/image9.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductsList from "../components/ProductsList/ProductsList";
import proudcts from "../assets/data/data";
import { useState } from "react";
import { useEffect } from "react";
const HomePage = () => {
  const [sneakerProduct, setSneakerProduct] = useState([]);
  useEffect(() => {
    const filterdSneakerProducts = proudcts.filter(
      (product) => product.brand === "sneaker"
    );
    setSneakerProduct(filterdSneakerProducts);
  }, []);
  return (
    <>
      <section className="max-w-6xl mx-auto mb-5 backgroundVideo w-full py-10">
        <div className="flex h-full justify-center flex-col md:flex-row md:justify-around shadow-xl shadow-blue-500 items-center md:mx-auto md:w-4/5 lg:w-11/12">
          <div
            className="w-11/12 md:w-2/4 md:mb-3 bg-red-600 shadow-lg shadow-red-500"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }}
          >
            <img src={logo} alt="logo" className="w-full h-auto" />
          </div>
          <div className="my-5 flex justify-center items-center flex-col">
            <h2 className="text-slate-700 text-2xl">در هر شرایطی همراه شما</h2>
            <motion.button
              whileHover={{ scale: "1.1" }}
              className="mt-4 transition-all duration-150 bg-gradient-to-r from-red-500 to-blue-500 text-white px-5 py-3 rounded-full shadow-lg shadow-blue-400"
            >
              <Link to="/shop">مشاهده کالا ها</Link>
            </motion.button>
          </div>
        </div>
      </section>

      {/* ProdutsList Sneaker */}
      <section className="max-w-6xl mx-auto w-full my-4">
        <div className="md:mx-auto md:w-4/5 lg:w-full h-full">
          <div className="w-full text-center my-5 text-2xl text-slate-600 font-bold">
            <h1>محصولات اسنیکر</h1>
          </div>
          <ProductsList data={sneakerProduct}/>
        </div>
      </section>

    </>
  );
};

export default HomePage;