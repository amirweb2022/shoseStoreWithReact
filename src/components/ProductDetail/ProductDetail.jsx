import { Link } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import { toPersianNum } from "../../utils/utils";
import { useEffect } from "react";
const ProductDetail = ({ product }) => {
  const { image, productName, brand, price, sizes, id, description } = product;
  const query = useQuery();
  const sizeQuery = query.get("size") || "";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <section className="w-full mt-4 px-2 mb-4 max-w-6xl mx-auto">
      <div className="md:w-4/5 lg:w-11/12 md:mx-auto flex justify-center flex-col lg:flex-row ">
        <div className="w-full flex justify-center items-center bg-gray-200 rounded-md shadow-md">
          <img src={image} alt={productName} />
        </div>
        <div className="md:mr-3 w-full">
          <div className="mt-4 text-center md:w-full md:mx-auto">
            <h2 className="text-slate-800 font-bold text-lg">
              {productName} ({brand})
            </h2>
          </div>
          <div className="flex justify-center md:justify-between items-center mb-5 mt-5 md:mt-6">
            <span className="text-sm text-gray-500 ml-2">انتخاب سایز :</span>
            <div className="flex justify-center items-center">
              {sizes.map((size, index) => {
                return (
                  <div className="list-none ml-2" key={index}>
                    <Link
                      to={`/shop/${id}?size=${size}`}
                      className="bg-blue-500 text-white py-1 px-2 shadow-md shadow-slate-400 rounded-md focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 focus:ring-offset-white"
                    >
                      {size}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full mt-5 lg:mr-3">
          <div className="bg-white shadow-lg shadow-gray-400 p-3 rounded-lg flex flex-col justify-center items-center">
            <div className="w-full flex items-center">
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 stroke-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </span>
              <span className="text-slate-800 font-bold">گارانتی : </span>
              <span className="text-slate-600 mr-2 font-normal">6 ماه</span>
            </div>
            <div className="w-full flex items-center mt-4">
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 stroke-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                  />
                </svg>
              </span>
              <span className="text-slate-800 font-bold">فروشنده : </span>
              <span className="text-slate-600 mr-2 font-normal">
                فروشگاه کفش
              </span>
            </div>
            <div className="w-full flex items-center mt-4">
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 stroke-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </span>
              <span className="text-slate-800 font-bold">ارسال توسط : </span>
              <span className="text-slate-600 mr-2 font-normal">
                انبار تهران
              </span>
            </div>
            <div className="text-left w-full mt-2">
              <h3 className="text-lg text-slate-600 font-bold">
                {toPersianNum(price)}
              </h3>
            </div>
            <div className="w-full mt-3">
              <button className="w-full bg-blue-500 text-white py-3 rounded-md shadow-md shadow-blue-500">
                اضافه به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-7 px-2">
        <h2 className="text-slate-700 text-lg font-bold">توضیحات محصول</h2>
        <p className="text-lg mt-3 text-justify text-slate-500">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ProductDetail;