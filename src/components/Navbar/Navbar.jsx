import { NavLink } from "react-router-dom";
import { useCart } from "../../context/Provider/Cart/CartProvider";
import { useRef } from "react";
import Menu from "../../common/Menu";
import NavLinkMenu from "../../common/NavLinkMenu";
import { useLike } from "../../context/Provider/ProductLiked/ProductLikeProvider";
import { useAuth } from "../../context/Provider/Auth/AuthProvider";
const Navbar = ({ nav__link }) => {
  const { cart } = useCart();
  const userData = useAuth();
  const { likedProduct } = useLike();
  const menuRef = useRef(null);
  const clickHandler = () => {
    localStorage.clear();
    window.location.reload();
  };
  const menuToggle = () => {
    menuRef.current.classList.toggle("hidden");
  };
  return (
    <nav
      className="px-4 py-6 flex text-slate-600 bg-white
      shadow-md shadow-blue-400
      md:mt-3
      md:rounded-3xl justify-between items-center md:mx-auto md:w-4/5 lg:w-11/12"
    >
      {/* menu in size desktop */}
      <Menu navlink={nav__link} />

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

      {/* login && cart && liked */}
      <ul className="flex justify-center items-center">
        <NavLinkMenu to="/favorite" relative="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 stroke-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          {/* badge */}
          <span className="absolute flex justify-center items-center text-sm -right-2 -top-2 bg-red-600 text-white w-5 h-5 rounded-full">
            {likedProduct.length}
          </span>
        </NavLinkMenu>

        <NavLinkMenu to="/cart" relative="relative">
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
            {cart.length}
          </span>
        </NavLinkMenu>

        <NavLinkMenu to="/auth">
          {userData ? (
            <svg
              onClick={clickHandler}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 stroke-red-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
              />
            </svg>
          ) : (
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
          )}
        </NavLinkMenu>
      </ul>

      <section
        className="hidden fixed w-full h-screen top-0 z-30 right-0 backdrop-blur-sm bg-white/20 md:hidden"
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
              {nav__link.map((nav, index) => {
                return (
                  <li className="p-3 w-full" key={index}>
                    <NavLink
                      to={nav.to}
                      className={(navClass) =>
                        navClass.isActive
                          ? "bg-white text-slate-600 shadow-md ring-2 ring-blue-300 ring-offset-4 ring-offset-white shadow-white font-bold inline-block w-full pr-2 py-2 rounded-full transition-all duration-150"
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
  );
};

export default Navbar;