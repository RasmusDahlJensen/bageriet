import { NavLink, Outlet } from "react-router-dom";
import { NavbarStyle } from "./Navbar.style";

export const Navbar = () => {
	return (
		<>
			<NavbarStyle id="top">
				<ul>
					<li>
						<NavLink to="/">FORSIDE</NavLink>
					</li>
					<li>
						<NavLink to="/contact">KONTAKT</NavLink>
					</li>
				</ul>
				<h1>bageriet</h1>
				<ul>
					<li>
						<NavLink to="/product">PRODUKTER</NavLink>
					</li>
					<li>
						<NavLink to="/login">LOGIN</NavLink>
					</li>
				</ul>
			</NavbarStyle>
			<Outlet />
		</>
	);
};
