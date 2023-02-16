import products from "../assets/data/data";
import { useParams } from "react-router-dom";
import ForwardLink from "../components/ForwardLink/ForwardLink";
import ForwardLinkSection from "../components/ForwardLinkSection/ForwardLinkSection";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import ProductListSection from "../components/ProductListSection/ProductListSection";
import CartData from "../components/CartData/CartData"
const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const relatedProducts = products.filter(
    (item) => item.brand === product.brand
  );
  return (
    <div className="h-auto">
      {/* forward Link */}
      <ForwardLinkSection>
        <ForwardLink href="/" text="خانه" />
        <ForwardLink href="/shop" text="فروشگاه" />
        <ForwardLink
          href={`/shop/${id}`}
          text={product.productName.substring(0, 16)}
        />
      </ForwardLinkSection>

      <ProductDetail product={product} />

      <ProductListSection  ProductData={relatedProducts} title="محصولات مشابه"/>

      <CartData />
    </div>
  );
};

export default ProductDetailPage;