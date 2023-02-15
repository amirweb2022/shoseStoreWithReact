import ProductsList from "../ProductsList/ProductsList";
const ProductListSection = ({ ProductData, title }) => {
  return (
    <section className="max-w-6xl mx-auto w-full my-4">
      <div className="md:mx-auto md:w-4/5 lg:w-full h-full">
        <div className="w-full text-center my-5 text-2xl text-slate-600 font-bold">
          <h1>{title}</h1>
        </div>
        <ProductsList data={ProductData} />
      </div>
    </section>
  );
};

export default ProductListSection;