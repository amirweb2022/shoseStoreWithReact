import Product from "./Product/Product";
const ProductsList = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-0 md:flex-row md:flex-wrap">
      {data.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ProductsList;