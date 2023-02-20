import ForwardLink from "../components/ForwardLink/ForwardLink";
import ForwardLinkSection from "../components/ForwardLinkSection/ForwardLinkSection";
import ProductList from "../components/ProductsList/ProductsList";
import { useLike } from "../context/Provider/ProductLiked/ProductLikeProvider";
import CartData from "../components/CartData/CartData"
const ProductLikeListPage = () => {
  const { likedProduct } = useLike();
  const filterdLikedProduct = likedProduct.filter((item) => item.like === true);
  return (
    <div className="h-auto">
      {/* forward Link */}
      <ForwardLinkSection>
        <ForwardLink href="/" text="خانه" />
        <ForwardLink href="/favorite" text="مورد علاقه ها" />
      </ForwardLinkSection>

      {likedProduct.length ? (
        <ProductList data={filterdLikedProduct} />
      ) : (
        <h1 className="text-lg text-center mt-6 text-slate-800 font-bold">
          علاقه مندی خالی است
        </h1>
      )}
      <CartData />
    </div>
  );
};

export default ProductLikeListPage;