import { NavLink } from "react-router-dom";
const Menu = ({ navlink }) => {
    return (
        <ul className="hidden md:flex justify-center items-center">
            {navlink.map((nav, index) => {
                return (
                    <li className="ml-5" key={index}>
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
    );
}

export default Menu;