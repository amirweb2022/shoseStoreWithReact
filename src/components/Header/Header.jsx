import { useRef } from "react";
import { NavLink } from "react-router-dom";
const nav__link = [
  { to: "/", display: "خانه" },
  { to: "/shop", display: "فروشگاه" },
  { to: "/blog", display: "بلاگ ها" },
  { to: "/support", display: "پشتیبانی" },
];
const Header = () => {
  const menuRef = useRef(null);
  const menuToggle = () => {
    menuRef.current.classList.toggle("hidden");
  };
  return (
    <header className="w-full sticky top-0 md:top-3 z-10 max-w-5xl mx-auto">
      <nav
        className="px-4 py-6 flex text-slate-600 bg-white
      shadow-md shadow-blue-400
      md:mt-3
      md:rounded-3xl justify-between items-center md:mx-auto md:w-4/5 lg:w-11/12"
      >
        {/* menu in size desktop */}
        <ul className="hidden md:flex justify-center items-center">
          {nav__link.map((nav) => {
            return (
              <li className="ml-5">
                <NavLink
                  to={nav.to}
                  className={(navClass) =>
                    navClass.isActive
                      ? "bg-blue-500 text-white p-2 px-4 rounded-3xl transition-all duration-100"
                      : ""
                  }
                >
                  {nav.display}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* brguer btn */}
        <button
          className="bg-blue-500 text-white p-2 focus:outline-none focus:ring-2
           focus:ring-blue-400 focus:ring-offset-1
         focus:ring-offset-white rounded-md md:hidden"
          onClick={menuToggle}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </span>
        </button>

        {/* login && cart */}
        <ul className="flex justify-center items-center">
          <li className="ml-3">
            <NavLink to="/cart">
              <span className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 stroke-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                {/* badge */}
                <span className="absolute flex justify-center items-center text-sm -right-2 -top-2 bg-red-600 text-white w-5 h-5 rounded-full">
                  0
                </span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 stroke-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
              </span>
            </NavLink>
          </li>
        </ul>

        <section
          className="hidden fixed w-full h-screen top-0 z-20 right-0 backdrop-blur-sm bg-white/20 md:hidden"
          ref={menuRef}
          onClick={menuToggle}
        >
          <div className="w-4/5 h-full shadow-2xl shadow-black bg-blue-500">
            {/* close btn */}
            <div className="flex justify-end items-center w-full p-3 border-b-2 border-b-slate-200">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>

            {/* menu mobile */}
            <div>
              <ul className="flex justify-start items-start flex-col">
                {nav__link.map((nav) => {
                  return (
                    <li className="p-3 w-full">
                      <NavLink
                        to={nav.to}
                        className={(navClass) =>
                          navClass.isActive
                            ? "bg-white text-slate-600 shadow-md focus:ring-2 focus:ring-blue-300 focus:ring-offset-4 focus:ring-offset-white shadow-white font-bold inline-block w-full pr-2 py-2 rounded-full transition-all duration-150"
                            : "text-white w-full inline-block"
                        }
                      >
                        {nav.display}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;