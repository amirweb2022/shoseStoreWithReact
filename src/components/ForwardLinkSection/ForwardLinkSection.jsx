import { useNavigate } from "react-router-dom";
const ForwardLinkSection = ({ children }) => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-between items-center w-full py-3 mt-3 px-2 max-w-6xl mx-auto">
      <div className="md:w-4/5 lg:w-11/12 md:mx-auto">
        <div className="flex justify-center items-center md:justify-start">
          {children}
        </div>
      </div>

      <div className="md:hidden">
        <button
          className="bg-white shadow-md shadow-slate-400 text-slate-700 p-2 rounded-md"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default ForwardLinkSection;