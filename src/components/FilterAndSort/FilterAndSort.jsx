import SortAndFilterLink from "../../common/SortAndFilterLink";
const FilterAndSort = ({ filter__Link, sort__Link }) => {
  return (
    <div className="hidden md:flex justify-center items-center w-full py-3 mt-3 px-2 max-w-6xl mx-auto">
      <div className="md:w-4/5 lg:w-11/12 md:mx-auto flex flex-col justify-center items-center">
        <div className="flex items-center justify-center w-full bg-gray-200 rounded-full">
          <span>فیلتر محصول : </span>
          <ul className="flex w-4/5 justify-center items-center text-center mt-2">
            {filter__Link.map((item, index) => (
              <SortAndFilterLink item={item} key={index} />
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center w-full bg-gray-200 rounded-full mt-2">
          <span>مرتب سازی محصول : </span>
          <ul className="flex w-4/5 justify-center items-center text-center mt-2">
            {sort__Link.map((item, index) => (
              <SortAndFilterLink item={item} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterAndSort;