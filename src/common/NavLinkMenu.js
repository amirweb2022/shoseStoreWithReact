import { NavLink } from "react-router-dom";
const NavLinkMenu = ({ to, children, relative }) => {
    return (
        <li className="ml-4">
            <NavLink to={to}>
                <span className={relative}>{children}</span>
            </NavLink>
        </li>
    );
}

export default NavLinkMenu;