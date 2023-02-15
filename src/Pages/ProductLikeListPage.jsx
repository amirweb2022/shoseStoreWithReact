import ForwardLink from "../components/ForwardLink/ForwardLink";
import ForwardLinkSection from "../components/ForwardLinkSection/ForwardLinkSection";
import ProductList from "../components/ProductsList/ProductsList";
import { useLike } from "../context/Provider/ProductLiked/ProductLikeProvider";
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
          Not Product Liked
        </h1>
      )}
    </div>
  );
};

export default ProductLikeListPage;