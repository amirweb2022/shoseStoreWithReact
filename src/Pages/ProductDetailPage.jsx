import { Link, useParams } from "react-router-dom";
import products from "../assets/data/data";
const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const { image, productName, brand, price, sizes, shortDesc, description } =
    product;
  return <div></div>;
};

export default ProductDetail;