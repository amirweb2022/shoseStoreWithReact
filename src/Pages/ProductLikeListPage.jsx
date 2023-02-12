import ProductList from "../components/ProductsList/ProductsList";
import { useLike } from "../context/Provider/ProductLiked/ProductLikeProvider";
const ProductLikeListPage = () => {
  const { likedProduct } = useLike();
  const filterdLikedProduct = likedProduct.filter((item) => item.like === true);
  return (
    <div>
      {likedProduct.length ? (
        <ProductList data={filterdLikedProduct}/>
      ) : (
        <h1 className="text-lg text-center mt-6 text-slate-800 font-bold">Not Product Liked</h1>
      )}
    </div>
  );
};

export default ProductLikeListPage;