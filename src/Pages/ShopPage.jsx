import CartData from "../components/CartData/CartData";
import ForwardLink from "../components/ForwardLink/ForwardLink";
import ForwardLinkSection from "../components/ForwardLinkSection/ForwardLinkSection";
import SortAndFilterLink from "../common/SortAndFilterLink";
import ButtonSortAndFilter from "../common/ButtonSortAndFilter";
import { useRef } from "react";
import ProductListSection from "../components/ProductListSection/ProductListSection";
import { useProduct } from "../context/Provider/Products/ProductsProvider";
import FilterAndSort from "../components/FilterAndSort/FilterAndSort";
const ShopPage = () => {
  const product = useProduct();
  const sortRef = useRef(null);
  const filterRef = useRef(null);
  const sort__Link = [
    { to: `/shop/?sort=hieghst`, text: "گرانترین" },
    { to: `/shop/?sort=lowest`, text: "ارزانترین" },
  ];
  const filter__Link = [
    { to: `/shop/?filter=all`, text: "همه" },
    { to: `/shop/?filter=sneaker`, text: "اسنیکر" },
    { to: `/shop/?filter=nike`, text: "نایک" },
  ];
  const sortToggle = () => {
    sortRef.current.classList.toggle("hidden");
  };
  const filterToggle = () => {
    filterRef.current.classList.toggle("hidden");
  };
  return (
    <section>
      {/* forward Link */}
      <ForwardLinkSection>
        <ForwardLink href="/" text="خانه" />
        <ForwardLink href="/shop" text="فروشگاه" />
      </ForwardLinkSection>
      {/* mobile size */}
      <div className="w-full md:hidden flex justify-around items-center p-2">
        <ButtonSortAndFilter onClick={sortToggle} text="مرتب سازی">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </ButtonSortAndFilter>

        <ButtonSortAndFilter onClick={filterToggle} text="فیلتر محصول">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>
        </ButtonSortAndFilter>

        {/* sort modal */}
        <section
          className="hidden fixed w-full h-screen top-0 z-30 right-0 backdrop-blur-sm bg-white/10 md:hidden"
          ref={sortRef}
          onClick={sortToggle}
        >
          <div className="bg-white shadow-md shadow-slate-700 absolute bottom-0 w-full mx-auto left-0 right-0 h-1/3 rounded-tr-2xl rounded-tl-2xl">
            <ul className="w-full h-full flex flex-col justify-center items-center text-center px-2">
              {sort__Link.map((item, index) => (
                <SortAndFilterLink item={item} key={index} />
              ))}
            </ul>
          </div>
        </section>

        {/* filter modal */}
        <section
          className="hidden fixed w-full h-screen top-0 z-30 right-0 backdrop-blur-sm bg-white/10 md:hidden"
          ref={filterRef}
          onClick={filterToggle}
        >
          <div className="bg-white shadow-md shadow-slate-700 absolute bottom-0 w-full mx-auto left-0 right-0 h-1/3 rounded-tr-2xl rounded-tl-2xl">
            <ul className="w-full h-full flex flex-col justify-center items-center text-center px-2">
              {filter__Link.map((item, index) => (
                <SortAndFilterLink item={item} key={index} />
              ))}
            </ul>
          </div>
        </section>
      </div>
      <FilterAndSort filter__Link={filter__Link} sort__Link={sort__Link} />
      <ProductListSection ProductData={product} title="" />
      <CartData />
    </section>
  );
};

export default ShopPage;